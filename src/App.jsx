import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Formulaire from "./pages/Formulaire.tsx";
import Pages from "./pages/Pages.jsx";
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import AvisForm from "./pages/AvisForm.jsx";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
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

