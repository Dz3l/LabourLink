Project Name
Tier-3-Project

Overview
This project is a web application that connects construction workers with contractors. Workers can create a profile, showcase their skills, and find jobs. Contractors can post projects and hire verified workers. The application uses an AI model to recommend jobs to workers based on their skills and location.

Features
Worker Portal:
Create a verified profile using a National ID.
Showcase skills, experience, and ratings.
Browse and apply for construction jobs.
Receive AI-powered job recommendations.
Contractor Portal:
Post construction projects with detailed requirements.
Search for qualified workers based on skills and location.
Manage projects and rate workers.
Tech Stack
Frontend:
React
TypeScript
Vite
Tailwind CSS
Backend:
Flask
Python
Machine Learning:
scikit-learn
pandas
joblib
Getting Started
Prerequisites
Node.js
npm
Python 3
pip
Installation
Clone the repository:
git clone https://github.com/your-username/your-repo-name.git
Install frontend dependencies:
npm install
Install backend dependencies:
pip install -r requirements.txt
Train the AI model:
python model.py
Running the Application
Start the backend server:
python server.py
Start the frontend development server:
npm run dev
The application will be available at http://localhost:3000.

API Endpoints
POST /api/recommend
Accepts a JSON object with a worker's skills and location.
Returns a list of recommended jobs.
Example Request:
{
  "skills": ["masonry", "carpentry"],
  "location": "Lagos"
}
