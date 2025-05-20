## Initializes firebase in the backend API

from dotenv import load_dotenv
import os
import firebase_admin
from firebase_admin import credentials, auth, firestore

# Load environment variables
load_dotenv()

class Config:
    FIREBASE_CREDENTIALS = os.getenv("FIREBASE_CREDENTIALS")  

# Initialize Firebase Admin SDK
cred = credentials.Certificate(Config.FIREBASE_CREDENTIALS)
firebase_admin.initialize_app(cred)

# Firebase Services
firebase_auth = auth
firebase_db = firestore.client()

config = Config()
