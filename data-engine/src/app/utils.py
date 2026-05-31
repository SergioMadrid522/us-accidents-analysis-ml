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
    