import {useState} from "react";
import HotelData from "../Data/HotelData";
import HotelCard from "../cards/hotelsCards.jsx";
import Explorez from "../button/Explorez.jsx";

function HotelSection() {
    const [showMore, setShowMore] = useState(false);

  const visibleHotels = showMore
    ? HotelData
    : HotelData.slice(0, 3);

  return (
    <section className="bg-blue-200 py-10 px-6 text-center relative">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        Hotels populaires
      </h2>
      <p class="p-4">Découvrez les sélections de nos hôtels les plus luxueux</p>

      <div className="grid md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
        {visibleHotels.map((item) => (
          <HotelCard
            key={item.id}
            nom={item.nom}
            image={item.image}
            prix={item.prix}
            desc={item.desc}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center gap-6">
        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-3 
            bg-blue-500 text-white font-semibold 
            rounded-full shadow-md 
            hover:bg-blue-600 hover:shadow-xl hover:scale-105 
            transition-all duration-300 ease-in-out"
          >
            Voir plus
          </button>
        ) : (
          <button
            onClick={() => setShowMore(false)}
            className="bg-gray-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-gray-600 transition duration-300"
          >
            Voir moins
          </button>
        )}
      </div>

      {showMore && (
       <Explorez to="/hotels"/>
      )}
    </section>
  );
}
export default HotelSection;