import {useState} from "react";
import DestinationData from "../Data/DestinationData";
import DestinationCard from "../cards/destinationsCards.jsx";
import Explorez from "../button/Explorez.jsx";
function DestSection() {
    const [showMore, setShowMore] = useState(false);

  const visibleDestinations = showMore
    ? DestinationData
    : DestinationData.slice(0, 3);

  return (
    <section className=" bg-grey-500 py-10 px-6 text-center relative">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        Destinations populaires
      </h2>
      <p class="p-4">Explorez nos destinations les plus populaires</p>

      <div className="grid md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
        {visibleDestinations.map((item) => (
          <DestinationCard
            key={item.id}
            nom={item.nom}
            image={item.image}
            desc={item.desc}
            prix={item.prix}
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
        <Explorez to="/destinations"/>
      )}
    </section>
  );
}
export default DestSection;