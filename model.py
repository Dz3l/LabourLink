import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MultiLabelBinarizer
import joblib
import json

# Load data
with open('data.json', 'r') as f:
    data = json.load(f)

projects_df = pd.DataFrame(data['projects'])

# Preprocess the data
mlb = MultiLabelBinarizer()
skills_encoded = mlb.fit_transform(projects_df['skills'])
skills_df = pd.DataFrame(skills_encoded, columns=mlb.classes_)

location_encoded = pd.get_dummies(projects_df['location'], prefix='location')

features = pd.concat([skills_df, location_encoded], axis=1)
labels = projects_df['id']

# For the sake of this example, we'll create some dummy labels for training.
# In a real-world scenario, these labels would come from user interactions.
y = [1, 0, 1, 0, 1]

# Train the model
X_train, X_test, y_train, y_test = train_test_split(features, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the model and binarizers
joblib.dump(model, 'model.joblib')
joblib.dump(mlb, 'mlb.joblib')
joblib.dump(location_encoded.columns, 'locations.joblib')

print("Model trained and saved successfully.")
