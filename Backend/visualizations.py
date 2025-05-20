### HAndles Responses from the model

from flask import Blueprint, jsonify, send_from_directory
import os

vis_bp = Blueprint("visuals", __name__)

# Define the directory where plots are saved
PLOTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "plots"))

# Ensure directory exists
if not os.path.exists(PLOTS_DIR):
    os.makedirs(PLOTS_DIR)

def get_image_urls(filter_keywords=None):
    """Helper function to get images from plots directory with optional filtering."""
    try:
        image_files = [f for f in os.listdir(PLOTS_DIR) if f.endswith(".png")]
        
        # If filter keywords are provided, filter the images
        if filter_keywords:
            image_files = [f for f in image_files if any(keyword.lower() in f.lower() for keyword in filter_keywords)]
        
        return {img: f"/visuals/plots/{img}" for img in image_files}
    
    except Exception as e:
        return {"error": str(e)}

#  Returns sentiment plots
@vis_bp.route('/sentiment_category', methods=['GET'])
def socialVisuals():
    """Returns all sentiment-related plots"""
    return jsonify({"plots": get_image_urls(["sentiment_distribution", "sentiment_engagement"])})

# Returns daata analytics trends
@vis_bp.route('/financial_trends', methods=['GET'])
def financial_trends():
    """Returns Closing Prices, Sales Volume, and Daily Returns plots"""
    return jsonify({"plots": get_image_urls(["Closing_Prices", "Sales_Volume", "Daily Returns"])})

# Returns correlation trends
@vis_bp.route('/correlation_trends', methods=['GET'])
def correlation_trends():
    """Correlation plots"""
    return jsonify({"plots": get_image_urls(["pairplot", "closing_prices_pairgrid", "returns_pairgrid", "Stock_Correlation"])})


## Defining the risks
@vis_bp.route('/risk_analysis', methods=['GET'])
def risks_analysis():
    """Returns risk analysis plots"""
    return jsonify({"plots": get_image_urls(["Risk_vs_Expected_Return"])})

## Predictions
@vis_bp.route('/predictions', methods=['GET'])
def predictions():
    """Returns risk analysis plots"""
    return jsonify({"plots": get_image_urls(["Close_Price_History", "Model_Predictions"])})




@vis_bp.route('/plots/<filename>')
def get_plot(filename):
    """Serve images from the ../plots directory."""
    return send_from_directory(PLOTS_DIR, filename, mimetype='image/png')
