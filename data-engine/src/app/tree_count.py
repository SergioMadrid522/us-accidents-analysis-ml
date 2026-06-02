import joblib

model = joblib.load("../../models/model_prediction.pkl")

print(f"Count of trees trained: {len(model.estimators_)}")

print(f"Classes: {model.classes_}")