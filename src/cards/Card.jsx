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
  // localStorage 
      const currentData = JSON.parse(localStorage.getItem("formData")) || {};
    
      if (type === "destination") currentData.destination = nom;
      if (type === "hotel") currentData.hotel = nom;
      if (type === "compagnie") currentData.compagnie = nom;
    
    
      localStorage.setItem("formData", JSON.stringify(currentData));
    
    
      navigate("/formulaire");
    };
    

  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105  ">
      {/* Image  */}
      {showImage && image && (
        <img src={image} alt={nom} className="h-54 w-full object-cover  mb-4 hover:scale-120 transition-transform duration-700" />
      )}

      <div className="p-4 flex flex-col flex-grow items-center">
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
      className="mt-4 px-5  w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-green-600"
    >
      Réserver
    </button>
      )}

    <p className="text-xs italic text-gray-400 mt-4 self-start ">{type}</p>
      </div>
    </div>
  );
}
