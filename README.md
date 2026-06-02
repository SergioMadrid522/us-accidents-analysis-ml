# US Accident Analysis: AI-Powered Analysis Engine

> **Project Status:** Phase 3: BFF (Backend for Frontend) Orchestrator with Spring Boot <br/>
> **Next Steps:** Phase 4: Interactive Dashboard & Simulator with React & leaflet

## Project Overview

This project is an Artificial Intelligence engine designed to analyze and predict the severity of traffic accidents in the US using a massive dataset of **over 7.7 million historical records** collected from February 2016 to March 2023.

The goal is to transform raw big data into a predictive model capable of estimating road risk based on variables such as weather conditions, time of day, geographic location, and road infrastructure (traffic signals, stop signs, etc.).

## Tech Stack

- **Language:** Python 3.10+, Java, TypeScript
- **Data Processing:** Pandas, NumPy (Big Data handling).
- **Machine Learning:** Scikit-Learn (Random Forest Classifier).
- **Tools:** Jupyter Notebooks, React.js, Leaflet & Spring Boot.
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
Analysis reveals that the majority of accidents occur during **Fair** conditions, likely due to higher traffic volume. 

<img width="844" height="722" alt="Screenshot 2026-06-02 at 11 30 52 a m" src="https://github.com/user-attachments/assets/e99c18f0-13a5-4315-9ea1-5210d38b17bd" />

### Geographic Hotspots
Using Pandas grouping aggregation, I identified high-risk urban areas. **Miami** presents an outlier behavior with the highest accident density, followed by Houston and Los Angeles.

<img width="870" height="666" alt="Screenshot 2026-06-02 at 11 31 43 a m" src="https://github.com/user-attachments/assets/e6b8c407-04bb-49ef-ba50-6400342286bf" />

### Model Performance Evaluation
The Random Forest model achieved a solid **83.61% Accuracy** on the test set with 50 trees trained. 

The classification report below details the Precision and Recall metrics, showing strong predictive capability for the most common accident severities (Class 2 and 3), which constitute the majority of the dataset.

<img width="387" height="404" alt="Screenshot 2026-06-02 at 11 33 52 a m" src="https://github.com/user-attachments/assets/7425960e-0f73-40dc-a816-b7ce19b39a42" />

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

Cleaning and preprocessing approximately 7.7 million historical records, conducting Exploratory Data Analysis, performing feature engineering (including One-Hot Encoding for weather conditions), training the Scikit-Learn Random Forest model to achieve a **83.61%** accuracy with 50 trees trained, and exporting the trained model and feature structure into .pkl (Pickle) files.

[x] Phase 2: Data & AI Microservice with FastAPI

Building a high-performance Python server that loads the serialized .pkl files into memory on startup. It will expose a GET /data endpoint to serve the optimized sample of 4,000 records (accidentes_muestra.json), a GET /columns endpoint to share the model's feature architecture, and a POST /predict endpoint to run live inference on new accident data using Scikit-Learn.

[ ] Phase 3: BFF (Backend for Frontend) Orchestrator with Spring Boot

Developing a strongly-typed API Gateway layer using Java and Spring Boot. This service serves as the core orchestrator: validating incoming UI requests with strict Jakarta schemas, handling data grouping and pagination to protect frontend rendering, and acting as a secure reverse proxy that forwards clean payloads to the Python microservice, eliminating browser CORS conflicts.

[ ] Phase 4: Interactive Dashboard & Simulator with React & leaflet

Designing a premium Modern Dark Mode user interface that consumes the structured data from the Node.js BFF. This frontend will feature an analytical dashboard with interactive charts and geospatial heatmaps powered by Mapbox to visualize historical accidents, alongside a dedicated "Risk Simulator" form allowing users to input live variables and dynamically display prediction risk alerts returned by the machine learning pipeline.

Developed by SergioMadrid522 - Software Developer with specialization in Big Data.
[LinkedIn](https://www.linkedin.com/in/sergio-acu%C3%B1a-59735336b) [Portfolio](https://fabianmadrid.dev)
