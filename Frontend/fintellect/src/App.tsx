import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import DataAnalytics from "./pages/DataAnalytics";
import Correlation from "./pages/Correlation";
import Risks from "./pages/RiskAnalysis";
import Predictions from "./pages/Predictions";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router> 
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/analytics" element={<DataAnalytics />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/correlation" element={<Correlation />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/risks" element={<Risks />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/predictions" element={<Predictions />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
