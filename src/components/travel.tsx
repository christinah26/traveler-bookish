import React from 'react';
import { MapPin } from 'lucide-react';
import DestinationData from '../Data/DestinationData';

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
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.value);
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
            <option key={d.id} value={d.nom}>
              {d.nom}
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
    </div>
  );
};

export default TravelComponent;
