from flask import Flask, request, jsonify
import joblib
import pandas as pd
import json

app = Flask(__name__)

# Load the trained model and binarizers
model = joblib.load('model.joblib')
mlb = joblib.load('mlb.joblib')
locations = joblib.load('locations.joblib')

# Load the projects data
with open('data.json', 'r') as f:
    data = json.load(f)
projects_df = pd.DataFrame(data['projects'])

@app.route('/api/recommend', methods=['POST'])
def recommend():
    # Get worker data from the request
    worker_data = request.get_json()
    worker_skills = worker_data.get('skills', [])
    worker_location = worker_data.get('location', '')

    # Create a DataFrame for the worker
    worker_df = pd.DataFrame([{'skills': worker_skills, 'location': worker_location}])

    # Preprocess the worker data
    skills_encoded = mlb.transform(worker_df['skills'])
    skills_df = pd.DataFrame(skills_encoded, columns=mlb.classes_)

    location_encoded = pd.get_dummies(worker_df['location'], prefix='location')
    location_df = pd.DataFrame(columns=locations)
    for col in location_encoded.columns:
        if col in location_df.columns:
            location_df[col] = 1
    location_df.fillna(0, inplace=True)


    # Combine features
    features = pd.concat([skills_df, location_df], axis=1)

    # Make predictions
    predictions = model.predict(features)

    # Get the recommended project IDs
    labels = projects_df['id']
    recommended_project_ids = [labels[i] for i, pred in enumerate(predictions) if pred == 1]

    # Get the full project details
    recommended_projects = projects_df[projects_df['id'].isin(recommended_project_ids)].to_dict('records')

    return jsonify(recommended_projects)

if __name__ == '__main__':
    app.run(debug=True)
