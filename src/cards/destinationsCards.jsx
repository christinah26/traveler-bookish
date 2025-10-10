import { useNavigate } from 'react-router-dom';

function DestinationCard({nom , image, desc , prix}){
  const navigate = useNavigate();

  const handleReserver = () => {
    navigate('/formulaire', { state: { destination: nom } });
  };

    return(
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 max-w-sm mx-auto h-[420px]">
      <img src={image} alt={nom} className="w-full h-56 object-cover" />
      <div className=" flex flex-col justify-between flex-grow p-4 text-center">
        <div className="flex-grow overflow-hidden">
          <h2 className="text-xl font-bold text-blue-900 mb-2">{nom}</h2>
          <p className="text-gray-600 text-sm mb-4">{desc}</p>
        </div>
        
        <div className="mt-auto">
          <p className="text-yellow-400 font-semibold">{prix}$</p>
          <button onClick={handleReserver} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
            Réserver
          </button>
        </div>
      </div>
    </div>
    )
}

export default DestinationCard;