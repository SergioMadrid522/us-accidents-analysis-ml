# US Traffic Risk Predictor: AI-Powered Analysis Engine

> **Project Status:** Phase 2 Data & AI Microservice with FastAPI <br/>
> **Next Steps:** Phase 3: BFF (Backend for Frontend) Orchestrator with Node.js + TypeScript

## Project Overview

This project is an Artificial Intelligence engine designed to analyze and predict the severity of traffic accidents in the US using a massive dataset of **over 7 million historical records**.

The goal is to transform raw big data into a predictive model capable of estimating road risk based on variables such as weather conditions, time of day, geographic location, and road infrastructure (traffic signals, stop signs, etc.).

## Tech Stack

- **Language:** Python 3.10+, TypeScript
- **Data Processing:** Pandas, NumPy (Big Data handling).
- **Machine Learning:** Scikit-Learn (Random Forest Classifier).
- **Tools:** Jupyter Notebooks, Node.js & React.js.
- **Serialization:** Joblib (for `.pkl` model export).

## Pipeline Architecture (Phase 1)

The project follows a structured Data Science workflow:

1.  **Exploratory Data Analysis (EDA):** Visual analysis to understand accident distribution by state, time, and weather patterns.
2.  **Data Cleaning & Optimization:**
    - Dimensionality reduction (removing redundant features).
    - Null value handling and Datetime type conversion.
    - Memory optimization to process millions of rows efficiently.
3.  **Feature Engineering:**
    - Cyclical variable transformation (Hour, Month, Weekday).
    - _One-Hot Encoding_ for categorical weather conditions.
4.  **Model Training:** Training a `RandomForestClassifier` to predict accident severity (Scale 1-4).

## Key Insights & Results
### Weather Impact Analysis
Analysis reveals that the majority of accidents occur during **Clear** conditions, likely due to higher traffic volume. However, significant clusters appear during **Rain** and **Cloudy** conditions, which are critical features for the risk model.

<img width="950" height="776" alt="imagen2" src="https://github.com/user-attachments/assets/b40599e7-e713-451e-93ee-2e47b1ff2314" />

### Geographic Hotspots
Using Pandas grouping aggregation, I identified high-risk urban areas. **Los Angeles** presents an outlier behavior with the highest accident density, followed by Sacramento and San Diego.

<img width="949" height="673" alt="imagen1" src="https://github.com/user-attachments/assets/3caee038-df07-4199-99c6-c701058ad2e5" />

### Model Performance Evaluation
The Random Forest model achieved a solid **74.14% Accuracy** on the test set. 

The classification report below details the Precision and Recall metrics, showing strong predictive capability for the most common accident severities (Class 2 and 3), which constitute the majority of the dataset.

<img width="421" height="376" alt="imagen3" src="https://github.com/user-attachments/assets/d47967da-7038-44dd-bf19-0d56edf4c2f2" />

## Data & AI Microservice with FastAPI (Phase 2)

Coming Soon...

## Project Structure

```text
├── data-engine/
│   ├── data/                         # JSON file with all data
│   ├── datasets/                     # (Ignored by git due to size)
│   ├── models/                       # Pickle files
│   │    ├── model_accidents.pkl      # Trained Model (Brain)
│   │    ├── model_columns.pkl        # Data Structure (Skeleton)
│   │    ├── model_predictions.pkl    # Predition Model (Skeleton)
│   ├── notebooks/
│   │   ├── 1_exploration.ipynb       # Visual Analysis (EDA)
│   │   ├── 2_cleaning.ipynb          # ETL & Cleaning
│   │   └── 3_training.ipynb          # Model Training
│   ├── src/
│   │   └── app/
│   │       ├── main.py               # Main File
│   │       ├── tree_count.py         # Count all tree trained 
│   │       ├── utils.py              # Reusable functions
│   ├── requirements.txt              # Project dependencies
└──–––– .gitignore                
```

## Datasets

Due to the dataset size (3.06 GB), it is not included in the repository.

   [Download US_Accidents_Dec21.csv](https://www.kaggle.com/datasets/sobhanmoosavi/us-accidents)

   Place it inside data-engine/datasets/raw/.

## Roadmap

[x] Phase 1: ETL, EDA, and ML Model Training

Cleaning and preprocessing the 7 million historical records, conducting Exploratory Data Analysis, performing feature engineering (including One-Hot Encoding for weather conditions), training the Scikit-Learn Random Forest model to achieve a 74.14% accuracy, and exporting the trained model and feature structure into .pkl (Pickle) files.

[x] Phase 2: Data & AI Microservice with FastAPI

Building a high-performance Python server that loads the serialized .pkl files into memory on startup. It will expose a GET /data endpoint to serve the optimized sample of 4,000 records (accidentes_muestra.json), a GET /columns endpoint to share the model's feature architecture, and a POST /predict endpoint to run live inference on new accident data using Scikit-Learn.

[ ] Phase 3: BFF (Backend for Frontend) Orchestrator with Node.js + TypeScript

Developing a lightweight, type-safe API Gateway layer using Node.js and TypeScript (via Express). This service acts as the strict "gatekeeper"—validating incoming payloads from the UI using schemas (e.g., Zod), handling data shaping, grouping, or pagination to protect client-side performance, and acts as a reverse proxy to forward clean requests to the FastAPI microservice, entirely eliminating browser CORS conflicts.

[ ] Phase 4: Interactive Dashboard & Simulator with React & Mapbox

Designing a premium Modern Dark Mode user interface that consumes the structured data from the Node.js BFF. This frontend will feature an analytical dashboard with interactive charts and geospatial heatmaps powered by Mapbox to visualize historical accidents, alongside a dedicated "Risk Simulator" form allowing users to input live variables and dynamically display prediction risk alerts returned by the machine learning pipeline.

Developed by SergioMadrid522 - Software Developer specializing in Full Stack, Big Data and QA manual & automation.
[LinkedIn](https://www.linkedin.com/in/sergio-acu%C3%B1a-59735336b) [Portfolio](https://fabianmadrid.dev)
