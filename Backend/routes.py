## Handles All authentication for login, signup in the whole system

from flask import Blueprint, request, jsonify
from config import firebase_auth  

auth_bp = Blueprint("auth", __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        email = data.get("email")
        password = data.get("password")
        name = data.get("name")

        # Create user in Firebase
        user = firebase_auth.create_user(email=email, password=password, display_name=name)

        # Update user profile with name
        firebase_auth.update_user(user.uid, display_name=name)

        return jsonify({"message": "Signup successful", "user_id": user.uid, "name": name}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        email = data.get("email")
        password = data.get("password")

        # Authenticate the user with Firebase
        user = firebase_auth.get_user_by_email(email)

        # Generate custom token for backend authentication
        custom_token = firebase_auth.create_custom_token(user.uid)

        return jsonify({"message": "Login successful", "token": custom_token.decode('utf-8'), "name": user.display_name}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 401

