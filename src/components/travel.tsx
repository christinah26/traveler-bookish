import React from 'react';
import { MapPin } from 'lucide-react';
import pays from "../Data/pays.json";
const DestinationData = pays;

interface TravelProps {
  destination: string;
  setDestination: (val: string) => void;
  budget: string;
  setBudget: (val: string) => void;
}

const TravelComponent: React.FC<TravelProps> = ({
  destination,
  setDestination,
  budget,
  setBudget,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDestination(e.target.value);
    localStorage.setItem("destination", e.target.value);
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.value);
    localStorage.setItem("budget", e.target.value);
  };

  return (
    <div className="space-y-6">
      {/* Sélection destination */}
      <div>
        <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
          <MapPin className="inline w-4 h-4 mr-1" /> Destination *
        </label>
        <select
          id="destination"
          value={destination}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
        >
          <option value="">-- Sélectionnez une destination --</option>
          {DestinationData.map((d) => (
            <option key={d.CODE} value={d.VILLE}>
              {d.NOM} - {d.VILLE}
            </option>
          ))}
        </select>
      </div>

      {/* Budget */}
      {destination && (
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
            Votre budget estimé ($) *
          </label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={handleBudgetChange}
            placeholder="Ex : 2000"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
      )}
      
      {/* Type de chambre */}
{destination && (
  <div>
    <label
      htmlFor="chambre"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Type de chambre *
    </label>
    <select
      id="chambre"
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
    >
      <option value="">-- Sélectionnez une chambre --</option>
      <option value="standard">Standard</option>
      <option value="superieur">Supérieur</option>
      <option value="deluxe">Deluxe</option>
      <option value="suite">Suite</option>
      <option value="presidentielle">Présidentielle</option>
      <option value="simple">Simple</option>
      <option value="double">Double</option>
      <option value="triple">Triple</option>
      <option value="familial">Familiale</option>
    </select>
  </div>
)}

    </div>
  );
};

export default TravelComponent;
