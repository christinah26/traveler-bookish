// import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/traveler-nobg.png";
import DateComponent from '../components/date';
import NameComponent from '../components/name';
import TravelComponent from '../components/travel';
import Retour from '../components/retour';
import Send from '../components/send';
import EmailComponent from "../components/email";
import TelephoneComponent from "../components/telephone";

function Formulaire() {
  const navigate = useNavigate();

  
  const storedData = JSON.parse(localStorage.getItem("formData")) || {};
  const [destination, setDestination] = useState(storedData.destination || '');
  const [budget, setBudget] = useState(storedData.budget || '');
  const [hotel, setHotel] = useState(storedData.hotel || '');
  const [compagnie, setCompagnie] = useState(storedData.compagnie || '');


  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify({ destination, budget, hotel, compagnie }));
  }, [destination, budget, hotel, compagnie]);

  const handleHotelSelect = () => {
    if (!destination || !budget) {
      alert("Veuillez d'abord choisir une destination et un budget.");
      return;
    }
    navigate("/pages/hotels");
  };

  const handleCompagnieSelect = () => {
    if (!destination || !budget) {
      alert("Veuillez d'abord choisir une destination et un budget.");
      return;
    }
    navigate("/pages/compagnies");
  };

  const resetHotel = () => setHotel('');
  const resetCompagnie = () => setCompagnie('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-50 bg-white rounded-full shadow-lg mb-4">
            <img src={Logo} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Réservez Votre Voyage</h1>
          <p className="text-blue-50 text-lg">Remplissez le formulaire pour démarrer votre aventure</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <NameComponent />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EmailComponent />
            <TelephoneComponent />
          </div>

          <TravelComponent
            destination={destination}
            setDestination={setDestination}
            budget={budget}
            setBudget={setBudget}
          />

          {/* Choix hôtel et compagnie */}
          {budget && (
            <div className="mt-6 space-y-4">
              {hotel ? (
                <div className="flex items-center gap-3">
                  <input type="text" value={hotel} readOnly className="flex-grow px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50"/>
                  <button onClick={resetHotel} className="text-red-500 font-bold">✕</button>
                </div>
              ) : (
                <button
                  onClick={handleHotelSelect}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Choisir un hôtel
                </button>
              )}

              {compagnie ? (
                <div className="flex items-center gap-3">
                  <input type="text" value={compagnie} readOnly className="flex-grow px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50"/>
                  <button onClick={resetCompagnie} className="text-red-500 font-bold">✕</button>
                </div>
              ) : (
                <button
                  onClick={handleCompagnieSelect}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Choisir une compagnie aérienne
                </button>
              )}
            </div>
          )}

          <DateComponent />

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Retour />
            <Send />
          </div>
        </div>

        <p className="text-center text-white text-sm mt-6">
          * Tous les champs sont obligatoires
        </p>
      </div>
    </div>
  );
}

export default Formulaire;

