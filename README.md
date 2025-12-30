# US Traffic Risk Predictor: AI-Powered Analysis Engine

> **Project Status:** Phase 1 Completed (Data Engineering & ML Modeling).
> **Next Steps:** Backend API (FastAPI) and Frontend Dashboard (React) development.

## Project Overview

This project is an Artificial Intelligence engine designed to analyze and predict the severity of traffic accidents in the US using a massive dataset of **over 7 million historical records**.

The goal is to transform raw big data into a predictive model capable of estimating road risk based on variables such as weather conditions, time of day, geographic location, and road infrastructure (traffic signals, stop signs, etc.).

## Tech Stack

- **Language:** Python 3.10+
- **Data Processing:** Pandas, NumPy (Big Data handling).
- **Machine Learning:** Scikit-Learn (Random Forest Classifier).
- **Tools:** Jupyter Notebooks.
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

## Project Structure

```text
├── data-engine/
│   ├── datasets/           # (Ignored by git due to size)
│   ├── notebooks/
│   │   ├── 1_exploration.ipynb  # Visual Analysis (EDA)
│   │   ├── 2_cleaning.ipynb     # ETL & Cleaning
│   │   └── 3_training.ipynb     # Model Training
│   └── app/
│       ├── model_accidents.pkl  # Trained Model (Brain)
│       ├── model_columns.pkl    # Data Structure (Skeleton)
└── requirements.txt        # Project dependencies
```

## Installation and Usage

1. Clone the repository

```bash
git clone https://github.com/SergioMadrid522/us-accidents-ml-analysis.git
```

and go into the folder: 

```bash
cd us-accidents-ml-analysis
```

2. Install dependencies

```bash
pip install -r requirements.txt
```

3. Get the Data: Due to the dataset size (>1GB), it is not included in the repository.

   [Download US_Accidents_Dec21.csv](https://www.kaggle.com/datasets/sobhanmoosavi/us-accidents)

   Place it inside data-engine/datasets/raw/.

4. Run the Notebooks

Open and execute the files in numerical order (1 -> 2 -> 3).

## Roadmap

[x] Phase 1: ETL, EDA, and ML Model Training.

[ ] Phase 2: REST API development with FastAPI to expose the model.

[ ] Phase 3: Interactive Dashboard development with React & Mapbox.

Developed by SergioMadrid522 - Software Engineer specializing in Full Stack & Big Data.
[LinkedIn](https://www.linkedin.com/in/sergio-acu%C3%B1a-59735336b) [Portfolio](https://fabianmadrid.dev)
