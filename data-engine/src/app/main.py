from fastapi import FastAPI
from utils import read_file

app = FastAPI(title="Data & ML Traffic API")

@app.get("/data")
def get_data():
    try:
        accidents_data = read_file('../../data/accidents.json')
        return {
            "data": accidents_data,
            "status:": 200
        }
    except ValueError as e:
        return {
            "error": str(e), 
            "status": 500
        }

@app.get("/columns")
def get_columns():
    try:
        columns_data = read_file("../../models/model_columns.pkl")
        return {
            "data": columns_data,
            "status:": 200
        }
    except ValueError as e:
        return {
            "error": str(e),
            "status": 500
        }