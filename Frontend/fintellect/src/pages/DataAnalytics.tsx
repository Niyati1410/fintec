import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const DataAnalytics: React.FC = () => {
  const [sentimentImages, setSentimentImages] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fintellectapi.onrender.com/visuals/financial_trends"); 
        if (!response.ok) {
          throw new Error("Failed to load images");
        }

        const data = await response.json();
        setSentimentImages(data.plots || {}); 
      } catch (err) {
        setError("Error fetching images. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const formatTitle = (filename: string) => {
    return filename
      .replace(".png", "")
      .replace(/_/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Data Analytics From yFinance</h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(sentimentImages).map(([filename, url]) => (
              url && (
                <div key={filename} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      {formatTitle(filename)}
                    </h2>
                    <div className="flex justify-center bg-gray-50 p-4 rounded-lg">
                      <img
                        src={`https://fintellectapi.onrender.com${url}`}
                        alt={filename}
                         className="rounded-lg w-full h-auto object-cover"
                      />
                    </div>
                    
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DataAnalytics;