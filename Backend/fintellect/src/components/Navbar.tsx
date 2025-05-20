import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">M</div>
                    <span className="ml-2 text-xl font-bold text-gray-800">Fintellect</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {user ? (
                        <>
                            <Link to="/home" className="text-gray-700 hover:text-blue-600 font-medium">Sentiment</Link>
                            <Link to="/analytics" className="text-gray-700 hover:text-blue-600 font-medium">Analytics</Link>
                            <Link to="/correlation" className="text-gray-700 hover:text-blue-600 font-medium">Correlation</Link>
                            <Link to="/risks" className="text-gray-700 hover:text-blue-600 font-medium">Risks</Link>
                            <Link to="/predictions" className="text-gray-700 hover:text-blue-600 font-medium">Predictions</Link>
                            <span className="text-gray-700">Hello, {user}</span>
                            <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
                            <a href="#methodology" className="text-gray-700 hover:text-blue-600 font-medium">Methodology</a>
                            <Link to="/login" className="text-blue-600 font-medium hover:underline">Sign In</Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-700 focus:outline-none" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 p-4">
                    <div className="flex flex-col space-y-4">
                        {user ? (
                            <>
                                <Link to="/home" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Sentiment</Link>
                                <Link to="/analytics" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Analytics</Link>
                                <Link to="/correlation" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Correlation</Link>
                                <Link to="/risks" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Risks</Link>
                                <Link to="/predictions" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Predictions</Link>
                                <span className="text-gray-700 text-center">Hello, {user}</span>
                                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Features</a>
                                <a href="#methodology" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Methodology</a>
                                <Link to="/login" className="text-blue-600 font-medium hover:underline" onClick={() => setIsOpen(false)}>Sign In</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
