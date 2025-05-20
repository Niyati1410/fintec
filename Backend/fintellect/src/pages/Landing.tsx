import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Landing: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <Navbar />


      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Social Media Meets <span className="text-blue-300">Market Analysis</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              A research project analyzing X (Twitter) sentiment and Yahoo Finance data to predict stock market movements using AI/ML techniques.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

              {user ? (
                <Link
                  to="/Home"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-md text-lg font-semibold text-center transition"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-semibold text-center transition"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Social media and stock market data visualization"
              className="rounded-lg shadow-2xl max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated Data Sources</h2>
          <p className="text-xl text-gray-600 max-w-3xl text-center">
            Combining real-time social media sentiment with historical market data
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-6 text-blue-600 font-bold text-xl">X</div>
            <div>
              <h3 className="text-xl text-black font-bold mb-3">X (Twitter) API</h3>
              <p className="text-gray-600">
                Real-time collection and analysis of tweets about major stocks and companies using NLP sentiment analysis.
              </p>
            </div>
          </div>

          <div className="flex-1 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition flex items-start">
            <div className="bg-green-100 p-3 rounded-lg mr-6 text-green-600 font-bold text-xl">Y</div>
            <div>
              <h3 className="text-xl text-black font-bold mb-3">Yahoo Finance API</h3>
              <p className="text-gray-600">
                Historical and real-time stock price data for correlation analysis with social media sentiment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl text-center">
              Combining AI/ML techniques for accurate market prediction
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl font-bold mb-2">1</div>
              <h3 className="text-xl text-black font-bold mb-3">Data Collection</h3>
              <p className="text-gray-600">
                Gathering tweets about S&P 500 companies and corresponding stock data from Yahoo Finance.
              </p>
            </div>

            <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl font-bold mb-2">2</div>
              <h3 className="text-xl text-black font-bold mb-3">Sentiment Analysis</h3>
              <p className="text-gray-600">
                Using NLTK (VADER) and TextBlob models to analyze tweet sentiment and emotional tone.
              </p>
            </div>

            <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl font-bold mb-2">3</div>
              <h3 className="text-xl text-black font-bold mb-3">Prediction Models</h3>
              <p className="text-gray-600">
                Applying LSTM neural networks to correlate sentiment with price movements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Project Info Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Research Project</h2>
            <p className="text-xl text-blue-100 max-w-3xl text-center">
              Developed as part of advanced studies in AI/ML applications for financial markets
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-blue-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Research Focus</h3>
              <p className="text-blue-200">
                Correlation between social media sentiment and short-term stock price movements
              </p>
            </div>
            <div className="flex-1 bg-blue-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Technologies Used</h3>
              <p className="text-blue-200">
                Python, TensorFlow, BERT, VADER, LSTM, Twitter API, Yahoo Finance API
              </p>
            </div>
            <div className="flex-1 bg-blue-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Project Goal</h3>
              <p className="text-blue-200">
                Demonstrate the predictive power of social media analysis for financial markets
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;