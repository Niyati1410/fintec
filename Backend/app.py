from flask import Flask, jsonify
from routes import auth_bp 
from visualizations import vis_bp
from dotenv import load_dotenv
from config import Config  
import os
from flask_cors import CORS

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "http://localhost:3000/home", "https://fintellect.vercel.app"]}})
app.config.from_object(Config)

# Register Blueprints with URL Prefix
app.register_blueprint(auth_bp)
app.register_blueprint(vis_bp, url_prefix="/visuals") 

# Default route
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Fintellect Backend Flask API"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000, debug=True)
