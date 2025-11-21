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

_(Insert screenshots of your charts from notebook 1_exploration here. E.g., "Heatmap of accidents" or "Accidents by Hour")_

- **Insight 1:** The majority of accidents occur between [X] PM and [X] PM.
- **Insight 2:** Contrary to intuition, [Weather Condition A] shows a higher frequency of severe accidents than [Weather Condition B].
- **Model Accuracy:** The current model achieved an accuracy of **[INSERT YOUR % HERE]%** on the test set.

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
git clone [https://github.com/SergioMadrid522/us-accidents-ml-analysis.git](https://github.com/SergioMadrid522/us-accidents-ml-analysis.git)

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

```bash
jupyter notebook
```

Open and execute the files in numerical order (1 -> 2 -> 3).

## Roadmap

[x] Phase 1: ETL, EDA, and ML Model Training.

[ ] Phase 2: REST API development with FastAPI to expose the model.

[ ] Phase 3: Interactive Dashboard development with React & Mapbox.

Developed by SergioMadrid522 - Software Engineer specializing in Big Data.
[LinkedIn](https://www.linkedin.com/in/sergio-acu%C3%B1a-59735336b) [Portfolio](https://fabianmadrid.dev)
