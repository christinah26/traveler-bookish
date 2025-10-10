import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Formulaire from "./pages/Formulaire.tsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/formulaire" element={<Formulaire />} />
        </Routes>
    </Router>
  );
}

