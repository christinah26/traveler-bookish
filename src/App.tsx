import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Formulaire from "./pages/Formulaire.tsx";
import Pages from "./pages/Pages.jsx";
import Login from "./pages/Login.js";
import Signin from "./pages/Signin.js";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import AvisForm from "./pages/AvisForm.jsx";
import { useAuth } from "./contexts/AuthContext.tsx";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Popup from "./components/popup.tsx";

export default function App() {
    const { token, refreshToken } = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            if (!token) {
                const newToken = await refreshToken();
                setIsAuthenticated(!!newToken);
            } else {
                setIsAuthenticated(true);
            }
            setLoading(false);
        })();
    }, [token]);

    if (loading)
        return (
            <div className="flex h-screen justify-center items-center">
                <FaSpinner size={56} className="animate-spin" />
            </div>
        );

    return (
        <Router>
            <Popup token={token || ""} />
            <Routes>
                <Route
                    path="/"
                    element={
                        isAuthenticated ? <Accueil /> : <Navigate to="login" />
                    }
                />
                <Route path="/formulaire" element={<Formulaire />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/pages/:pageType" element={<Pages />} />
                <Route path="/avis" element={<AvisForm />} />
            </Routes>
        </Router>
    );
}
