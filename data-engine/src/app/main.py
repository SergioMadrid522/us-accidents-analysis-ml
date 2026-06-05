from fastapi import FastAPI, HTTPException,APIRouter
from pydantic import BaseModel, Field
import joblib
import os
from utils import read_file
import pandas as pd

app = FastAPI(title="Data & ML Traffic API")
router = APIRouter(prefix="/data-engine/api/v1")

model_prediction_path = "../../models/model_prediction.pkl"
model_columns_path = "../../models/model_columns.pkl"
data_path = "../../data/accidents.json"

model = None
model_columns = None

#This event will load the model when startup
@app.on_event("startup")
def load_ml_components():
    global model, model_columns
    try:
        if os.path.exists(model_prediction_path) and os.path.exists(model_columns_path):
            model = joblib.load(model_prediction_path)
            model_columns = joblib.load(model_columns_path)
            print("model and columns files has loaded to the system correctly")
        else:
            print("model and columns file not found")
    except Exception as e:
        print(f"Couldn't load the files into the system {e}")

class PredictionInput(BaseModel):
    # we use Field(alias=...) to map the exact names from the json file
    temperature: float = Field(..., alias="Temperature(F)")
    humidity: float = Field(..., alias="Humidity(%)")
    visibility: float = Field(..., alias="Visibility(mi)")
    wind_speed: float = Field(..., alias="Wind_Speed(mph)")
    precipitation: float = Field(..., alias="Precipitation(in)")
    hour: int = Field(..., alias="Hour")
    month: int = Field(..., alias="Month")
    weekday: int = Field(..., alias="Weekday")
    is_day: int = Field(..., alias="Is_Day")
    weather_condition: str = Field(..., alias="Weather_Condition")
    traffic_signal: int = Field(0, alias="Traffic_Signal")
    junction: int = Field(0, alias="Junction")

    class Config:
        populate_by_name = True # This will convert all variables into a JSON
        

@router.get("/data")
def get_data():
    try:
        if not os.path.exists(data_path):
            raise HTTPException(status_code=404, detail="accidents.json file not found")
        
        accidents_data = read_file(data_path)
        return {"data": accidents_data, "status": 200}
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
    
@router.post("/predict")
def post_prediction(payload: PredictionInput):
    try:
        if not os.path.exists(model_prediction_path):
            raise HTTPException(status_code=404, datail="The math model is not loaded to the server")
        
        input_df = pd.DataFrame(0, index=[0], columns=model_columns)

        direct_mappings = {
            "Temperature": payload.temperature,
            "Humidity": payload.humidity,
            "Visibility": payload.visibility,
            "Wind_Speed": payload.wind_speed,
            "Precipitation": payload.precipitation,
            "Hour": payload.hour,
            "Month": payload.month,
            "Weekday": payload.weekday,
            "Is_Day": payload.is_day,
            "Traffic_Signal": payload.traffic_signal,
            "Junction": payload.junction
        }   
        
        for col, val in direct_mappings.items():
            if col in input_df.columns:
                input_df.at[0, col] = val

        weather_col_name = f"Weather_Condition_{payload.weather_condition}"

        if weather_col_name in input_df.columns:
            input_df.at[0, weather_col_name] = 1

        prediction = model.predict(input_df)[0]
        probabilities = model.predict_proba(input_df)[0]
        
        prob_dict = {
            f"Severity_{model.classes_[i]}": 
                round(prob * 100, 2) 
                for i, prob in enumerate(probabilities)
            }

        return {
            "status": 200,
            "prediction": int(prediction),
            "risk_probabilities_percent": prob_dict
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
    

app.include_router(router)