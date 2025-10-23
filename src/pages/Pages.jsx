import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Top/navbar.jsx';
import Footer from '../Top/footer.jsx';
import Card from '../cards/Card.jsx';
import HotelsData from '../Data/HotelData.jsx';
import DestinationData from '../Data/DestinationData.jsx';
import AeroData from '../Data/aeroData.jsx';
import ChambreData from '../Data/ChambreData.jsx';
import Contact from '../Section/contact.jsx';

export default function Pages() {
  const { pageType } = useParams();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  useEffect(() => {
    if (pageType === "destinations") setData(DestinationData);
    else if (pageType === "hotels") setData(HotelsData);
    else if (pageType === "compagnies") setData(AeroData);
    else if (pageType === "chambres") setData(ChambreData);
    else setData([]);
    setVisible(3);
    setSelectedCategory("Toutes");
  }, [pageType]);

  const titles = {
    destinations: "Nos Destinations",
    hotels: "Nos Hôtels",
    compagnies: "Nos Compagnies Aériennes",
    chambres: "Nos Chambres Disponibles",
  };

  const categories = [
    "Toutes",
    "Standard",
    "Deluxe",
    "Familiale",
    "Suite ",
    "Supérieure",
    "Présidentielle",
    "Simple",
    "Double",
    "Triple"
  ];

  const filteredData =
    pageType === "chambres" && selectedCategory !== "Toutes"
      ? data.filter((item) => item.categorie === selectedCategory)
      : data;

  return (
    <div>
      <Navbar />
      <section className="px-8 py-20 mt-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          {titles[pageType] || "Liste"}
        </h1>

        {/* Filtres pour les chambres */}
        {pageType === "chambres" && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.slice(0, visible).map((item) => (
            <Card
              key={item.id}
              {...item}
              showImage={!!item.image}
              showPrice={!!item.prix}
              showReserve={true}
              showStars={!!item.etoiles}
              showDate={!!item.date}
            />
          ))}
        </div>

        {/* Bouton voir plus/moins */}
        <div className="flex justify-center">
          {visible < filteredData.length ? (
            <button
              onClick={() => setVisible(visible + 3)}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir plus
            </button>
          ) : (
            <button
              onClick={() => setVisible(3)}
              className="mt-6 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
            >
              Voir moins
            </button>
          )}
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

