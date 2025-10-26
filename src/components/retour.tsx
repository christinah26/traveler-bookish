import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ArrowLeft } from 'lucide-react';

function Retour() {
const navigate = useNavigate();
const handleRetour = () => {
    if (confirm('Voulez-vous vraiment quitter  ?')) {
      navigate(-1);

    }
  };

    return (
            <button
                type="button"
                onClick={handleRetour}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour
              </button>
    );
}
export default Retour;