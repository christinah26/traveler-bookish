import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({
  type,  
  nom,
  image,
  desc,
  prix,
  etoiles,
  date,
  showImage = false,
  showPrice = false,
  showReserve = false,
  showStars = false,
  showDate = false,
}) {

    const navigate = useNavigate();

    const handleReserve = () => {
      const stateData = {};
  
      if (type === "destination") {
        stateData.destination = nom;
      } else if (type === "hotel") {
        stateData.hotel = nom;
      } else if (type === "compagnie") {
        stateData.compagnie = nom;
      }
  
      navigate("/formulaire", { state: stateData });
    };
  

  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 p-4 ">
      {/* Image (si dispo) */}
      {showImage && image && (
        <img src={image} alt={nom} className="h-48 w-full object-cover rounded-lg mb-4" />
      )}

      {/* Nom */}
      <h3 className="text-xl font-bold text-blue-900 mb-2">{nom}</h3>

      {/* Étoiles */}
      {showStars && (
        <div className="flex justify-center mb-2">
          {Array.from({ length: etoiles }).map((_, i) => (
            <span key={i} className="text-yellow-500">★</span>
          ))}
        </div>
      )}

      {/* Description */}
      {desc && <p className="text-gray-600 text-sm flex-grow">{desc}</p>}

      {/* Date */}
      {showDate && date && (
        <p className="text-gray-500 text-xs mt-2">{date}</p>
      )}

      {/* Prix */}
      {showPrice && prix && (
        <p className="text-blue-900 font-semibold mt-2">{prix} $</p>
      )}



      {/* Bouton Réserver */}
      {showReserve && (
      <button
      onClick={handleReserve}
      className="m-4  px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Réserver
    </button>
      )}

    <p className="text-xs italic text-gray-400 mt-3 self-start">{type}</p>
    </div>
  );
}
