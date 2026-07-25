from fastapi import FastAPI, HTTPException,APIRouter
from pydantic import BaseModel, Field
import joblib
import os
from utils import read_file
import pandas as pd
from collections import Counter

app = FastAPI(title="Data & ML Traffic API")
router = APIRouter(prefix="/data-engine/api/v1")

model_prediction_path = "../../models/model_prediction.pkl"
model_columns_path = "../../models/model_columns.pkl"
data_path = "../../data/accidents.json"
data_for_ui = "../../data/accidentsForUI.json"

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
    #hour: int = Field(..., alias="Hour")
    month: int = Field(..., alias="Month")
    #weekday: int = Field(..., alias="Weekday")
    is_day: int = Field(..., alias="Is_Day")
    weather_condition: str = Field(..., alias="Weather_Condition")
    traffic_signal: int = Field(0, alias="Traffic_Signal")
    junction: int = Field(0, alias="Junction")

    class Config:
        populate_by_name = True # This will convert all variables into a JSON
        
@router.get("/data")
def data():
    if not os.path.exists(data_for_ui):
        raise HTTPException(
            status_code = 404, 
            detail = "accidents.json file not found"
        )
    try:
        unique_weather = []

        data = read_file(data_for_ui)
        weather = [item["Weather_Condition"] for item in data]

        for w in weather:
            if w not in unique_weather:
                unique_weather.append(w)

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
    return {
        "data": unique_weather
    }
        
    
@router.get("/data/{stateCode}")
def get_data(stateCode: str):
    if not os.path.exists(data_path):
        raise HTTPException(
            status_code = 404, 
            detail = "accidents.json file not found"
        )
    
    if not stateCode:
        raise HTTPException(
            status_code = 400,
            detail = "There is not a state code"
        )
    try:
        accidents_json = read_file(data_path)
        accidents_for_ui_json = read_file(data_for_ui)

        normalized_state_code = stateCode.upper()

        accidents = accidents_json["accidents"]

        filtered_data = [
            data 
            for data in accidents
            if data["State"] == normalized_state_code
        ]
        
        totals_by_state = accidents_json["totalAccidentsByState"]

        average_severity = (
            sum(data["Severity"] for data in filtered_data) / len(filtered_data)
            if filtered_data
            else 0.0
        )
        
        weather_counter = Counter(
            accident["Weather_Condition"]
            for accident in filtered_data
            if accident["Weather_Condition"] is not None
        )

        common_weather = (
            weather_counter.most_common(1)[0][0]
            if weather_counter
            else "N/A"
        )
        
        city_counter = Counter(
            data["City"]
            for data in filtered_data
            if data["City"] is not None
        )

        high_risk_zones = [
            city
            for city, _ in city_counter.most_common(5)
        ]

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
        
    return {
        "state_code": stateCode,
        "data": {
            "total_accidents": totals_by_state.get(normalized_state_code, 0),
            "average_severity": round(average_severity, 2),
            "most_common_weather": common_weather,
            "high_risk_zones": high_risk_zones
        },

    }
    
@router.post("/predict")
def post_prediction(payload: PredictionInput):
    if not os.path.exists(model_prediction_path):
        raise HTTPException(
            status_code=404,
            datail="The math model is not loaded to the server"
        )
    try:    
        input_df = pd.DataFrame(0, index=[0], columns=model_columns)

        direct_mappings = {
            "Temperature": payload.temperature,
            "Humidity": payload.humidity,
            "Visibility": payload.visibility,
            "Wind_Speed": payload.wind_speed,
            "Precipitation": payload.precipitation,
            #"Hour": payload.hour,
            "Month": payload.month,
            #"Weekday": payload.weekday,
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
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
    return {
        "status": 200,
        "prediction": int(prediction),
        "risk_probabilities_percent": prob_dict
    }
    
app.include_router(router)