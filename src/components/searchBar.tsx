

import React, { useState } from "react";
import { Search, X, MapPin, DollarSign } from "lucide-react";


import dataDestinations from "../Data/DestinationData";
import dataHotels from "../Data/HotelData";

interface Destination {
  id: number;
  nom: string;
  desc: string;
  prix: number;
  image?: string;
  type: string;
}

interface Hotel {
  id: number;
  nom: string;
  desc: string;
  prix: number;
  image?: string;
  type: string;
}

type ResultItem = Destination | Hotel;

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([20, 5000]);
  const [filteredResults, setFilteredResults] = useState<ResultItem[]>([]);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) {
      setFilteredResults([]);
      return;
    }

    // Recherche dans les destinations
    const destinationResults = dataDestinations.filter(
      (item: Destination) =>
        item.nom.toLowerCase().includes(term) 
    );

    // Recherche dans les hôtels
    const hotelResults = dataHotels.filter(
      (item: Hotel) =>
        item.nom.toLowerCase().includes(term) 
    );

    // Fusion + filtre par prix
    const results = [...destinationResults, ...hotelResults].filter(
      (item) => item.prix >= priceRange[0] && item.prix <= priceRange[1]
    );

    setFilteredResults(results);
  };

  const handleReset = () => {
    setSearchTerm("");
    setPriceRange([0, 5000]);
    setFilteredResults([]);
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) handleReset();
  };

  return (
    <>
      {/* Bouton d'ouverture */}
      <button
        onClick={toggleSearch}
        className="rounded-full hover:bg-blue-100 transition-colors"
        aria-label="Rechercher un voyage"
      >
        <Search className="w-6 h-6 text-blue-600" />
      </button>

      {/* Modal de recherche */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
          <div className="p-6">
            {/* En-tête */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Search className="w-6 h-6 text-blue-600" />
                Rechercher
              </h2>
              <button
                onClick={toggleSearch}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Formulaire */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Destination ou Hôtel
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Paris, Hilton, Bali..."
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Filtre de prix */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  
                  Fourchette de prix (<DollarSign className="inline w-4 h-4 mb-1" />)
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    placeholder="Min"
                    className="w-1/2 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  />
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    placeholder="Max"
                    className="w-1/2 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleSearch}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Rechercher
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                >
                  Réinitialiser
                </button>
              </div>
            </div>

            {/* Résultats */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {filteredResults.length} résultat
                {filteredResults.length > 1 ? "s" : ""}
              </h3>

              {filteredResults.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Aucun résultat trouvé
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredResults.map((item) => (
                    <div
                      key={item.id}
                      className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer flex items-start gap-3"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.nom}
                          className="w-16 h-16 rounded object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded" />
                      )}
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">{item.nom}</h4>
                        <p className="text-blue-600 font-semibold mt-1">
                          {item.prix} $
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
