import { useNavigate } from 'react-router-dom';
function hotel({nom , image, desc , prix}){
  const navigate = useNavigate();

  const handleReserver = () => {
    navigate('/formulaire', { state: { hotel: nom } });
  };

    return(
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 max-w-sm mx-auto">
      <img src={image} alt={nom} className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-blue-900 mb-2">{nom}</h2>
        <p className="text-gray-600 mb-4">{desc}</p>
        <p className="text-yellow-400 font-semibold">{prix}$</p>
        <button onClick={handleReserver} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
          Réserver
        </button>
      </div>
    </div>
    )
}

export default hotel;