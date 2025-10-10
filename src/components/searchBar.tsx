import { useState } from 'react';
import { Search, X, MapPin, Calendar, Hotel } from 'lucide-react';
import React from 'react';

interface Travel {
  id: number;
  destination: string;
  country: string;
  hotel: string;
  dateDebut: string;
  dateFin: string;
  price: number;
  image: string;
}

const mockTravels: Travel[] = [
  {
    id: 1,
    destination: 'Paris',
    country: 'France',
    hotel: 'Le Royal Meridien',
    dateDebut: '2025-11-15',
    dateFin: '2025-11-22',
    price: 1500,
    image: '🗼'
  },
  {
    id: 2,
    destination: 'Tokyo',
    country: 'Japon',
    hotel: 'Shangri-La Hotel',
    dateDebut: '2025-12-01',
    dateFin: '2025-12-10',
    price: 2200,
    image: '🗾'
  },
  {
    id: 3,
    destination: 'Bali',
    country: 'Indonésie',
    hotel: 'Hilton Paradise Resort',
    dateDebut: '2025-11-20',
    dateFin: '2025-11-27',
    price: 1200,
    image: '🏝️'
  },
  {
    id: 4,
    destination: 'New York',
    country: 'USA',
    hotel: 'Waldorf Astoria',
    dateDebut: '2025-12-15',
    dateFin: '2025-12-22',
    price: 1800,
    image: '🗽'
  },
  {
    id: 5,
    destination: 'Dubai',
    country: 'EAU',
    hotel: 'Ritz Carlton Oceanview',
    dateDebut: '2025-11-10',
    dateFin: '2025-11-17',
    price: 2500,
    image: '🏙️'
  },
  {
    id: 6,
    destination: 'Rome',
    country: 'Italie',
    hotel: 'InterContinental Palace',
    dateDebut: '2025-12-05',
    dateFin: '2025-12-12',
    price: 1400,
    image: '🏛️'
  },
  {
    id: 7,
    destination: 'Maldives',
    country: 'Maldives',
    hotel: 'Four Seasons Resort',
    dateDebut: '2025-11-25',
    dateFin: '2025-12-02',
    price: 3000,
    image: '🏖️'
  },
  {
    id: 8,
    destination: 'Barcelone',
    country: 'Espagne',
    hotel: 'Sofitel Luxury Suites',
    dateDebut: '2025-12-10',
    dateFin: '2025-12-17',
    price: 1300,
    image: '🏰'
  },
  {
    id: 9,
    destination: 'Kyoto',
    country: 'Japon',
    hotel: 'Hyatt Regency Downtown',
    dateDebut: '2025-11-28',
    dateFin: '2025-12-05',
    price: 2000,
    image: '⛩️'
  },
  {
    id: 10,
    destination: 'Londres',
    country: 'UK',
    hotel: 'Marriott Grand Hotel',
    dateDebut: '2025-12-20',
    dateFin: '2025-12-27',
    price: 1600,
    image: '🎡'
  }
];

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [filteredTravels, setFilteredTravels] = useState<Travel[]>(mockTravels);

  const handleSearch = () => {
    let results = mockTravels;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(travel => 
        travel.destination.toLowerCase().includes(term) ||
        travel.country.toLowerCase().includes(term) ||
        travel.hotel.toLowerCase().includes(term)
      );
    }

    if (searchDate) {
      results = results.filter(travel => {
        const searchDateObj = new Date(searchDate);
        const startDate = new Date(travel.dateDebut);
        const endDate = new Date(travel.dateFin);
        return searchDateObj >= startDate && searchDateObj <= endDate;
      });
    }

    setFilteredTravels(results);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSearchDate('');
    setFilteredTravels(mockTravels);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      handleReset();
    }
  };

  return (
    <>
      {/* Bouton icône pour ouvrir le modal */}
      <button
        onClick={toggleSearch}
        className="p-2 rounded-full hover:bg-blue-100 transition-colors"
        aria-label="Rechercher un voyage"
      >
        <Search className="w-6 h-6 text-blue-600" />
      </button>

      {/* Modal de recherche */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSearch}
          ></div>

          {/* Modal */}
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

              {/* Formulaire de recherche */}
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
                    placeholder="Paris, Japon, Hilton..."
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Date de voyage
                  </label>
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
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
                  {filteredTravels.length} résultat{filteredTravels.length > 1 ? 's' : ''}
                </h3>

                {filteredTravels.length === 0 ? (
                  <div className="text-center py-8">
                    {/* <div className="text-4xl mb-2">😢</div> */}
                    <p className="text-gray-500">Aucun voyage trouvé</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredTravels.map((travel) => (
                      <div 
                        key={travel.id} 
                        className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-3xl">{travel.image}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-800">
                              {travel.destination}, {travel.country}
                            </h4>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Hotel className="w-3 h-3 mr-1" />
                              <span>{travel.hotel}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>
                                {formatDate(travel.dateDebut)} - {formatDate(travel.dateFin)}
                              </span>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-lg font-bold text-blue-600">
                                {travel.price}€
                              </span>
                              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                                Voir
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SearchBar;