import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const Login: React.FC = () => {
    const { login } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const response = await fetch("https://fintellectapi.onrender.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();
            if (response.ok) {
                login(result.token, result.name);
                navigate("/home");
            } else {
                setError(result.error || "Authentication failed.");
            }
        } catch (err) {
            console.error("Login Error:", err);
            setError("Failed to connect to the server.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h2>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
                        </div>
                        <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200" disabled={loading}>
                            {loading ? "Loading..." : "Login"}
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Login;
