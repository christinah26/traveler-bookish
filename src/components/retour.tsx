import React from "react";
import {ArrowLeft } from 'lucide-react';
import Swal from "sweetalert2"
function Retour() {
 

const handleRetour = () => {
    Swal.fire({
         text: "Voulez vous vraiment quitter la page ?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Oui",
         cancelButtonText: "Non",
         reverseButtons: true,
       }).then(() => {
         
          window.history.back();
        });

    }
  

    return (
            <button
                onClick={handleRetour}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour
              </button>
    );
  }
export default Retour;