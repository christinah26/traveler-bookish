import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Formulaire from "./pages/Formulaire.tsx";
import Destination from "./pages/Destination";
import Hotel from "./pages/Hotel";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/hotels" element={<Hotel />} />
      </Routes>
    </Router>
  );
}

