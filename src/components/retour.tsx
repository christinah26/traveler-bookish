import {ArrowLeft } from 'lucide-react';

function Retour() {

const handleRetour = () => {
    if (confirm('Voulez-vous vraiment quitter ce formulaire ?')) {
      window.history.back();

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