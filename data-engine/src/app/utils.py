import json
import pickle
from pathlib import Path

def read_file(file):
    reading_file = Path(file)
    file_extension = reading_file.suffix
        
    if file_extension == ".json":
        with open(file, "r") as accidents_file:
            return json.load(accidents_file)
    
    if file_extension == ".pkl":
        with open(file, "rb") as accidents_file:
            return pickle.load(accidents_file)
        
    raise ValueError("File not supported")
    

""" 
import joblib
import pandas as pd

# Cargar el modelo y la lista de columnas (hazlo globalmente, donde cargas tu modelo)
modelo = joblib.load("../../models/model_accidents.pkl")
columnas_esperadas = joblib.load("../../models/model_columns.pkl")

# --- Dentro de tu endpoint ---

# 1. Conviertes el JSON que recibes a DataFrame
df_entrada = pd.DataFrame([datos_entrada.dict()])

# 2. Haces el One-Hot Encoding del dato que llegó
df_entrada = pd.get_dummies(df_entrada)

# 3. LA MAGIA: Alineas el DataFrame entrante con la estructura del modelo
# Cualquier columna de clima que no esté en la petición se crea y se llena con 0
df_entrada = df_entrada.reindex(columns=columnas_esperadas, fill_value=0)

# 4. Ahora sí, el modelo tiene todas las piezas que espera
prediccion = modelo.predict(df_entrada) """