import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Top/navbar.jsx';
import Footer from '../Top/footer.jsx';
import Card from '../cards/Card.jsx';
import HotelsData from '../Data/HotelData.jsx';
import DestinationData from '../Data/DestinationData.jsx';
import AeroData from '../Data/aeroData.jsx';

export default function Pages() {
  const { pageType } = useParams();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(3);

  // Charger les données selon le type
  useEffect(() => {
    if (pageType === "destinations") setData(DestinationData);
    else if (pageType === "hotels") setData(HotelsData);
    else if (pageType === "compagnies") setData(AeroData);
    else setData([]);
    setVisible(3); // Réinitialiser visible quand on change de page
  }, [pageType])
 ;

  // Titre dynamique
  const titles = {
    destinations: "Nos Destinations",
    hotels: "Nos Hôtels",
    compagnies: "Nos Compagnies Aériennes",
  };

  return (
    <div>
      <Navbar />
      <section className="px-8 py-20 mt-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          {titles[pageType] || "Liste"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.slice(0, visible).map((item) => (
            <Card
              key={item.id}
              {...item}
              showImage={!!item.image}
              showPrice={!!item.prix}
              showReserve={item.type !== "compagnie"} // utilise item.type
              showStars={!!item.etoiles}
              showDate={!!item.date}
            />
          ))}
        </div>

        <div className="flex justify-center">
          {visible < data.length ? (
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
      <Footer />
    </div>
  );
}
