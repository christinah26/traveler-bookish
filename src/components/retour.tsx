import React from "react";
import Swal from 'sweetalert2';
import {ArrowLeft } from 'lucide-react';
import "../components/popup.css"

function Retour() {

const handleRetour = () => {
   Swal.fire({
      text: "Voulez-vous vraiment quiiter cette page ?",
      icon: "question",
      iconColor: "#ffff",
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
      reverseButtons: true,
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      }
    }).then((result) =>{
      if (result.isConfirmed) {
        window.history.back();
      } else if (result.dismiss === "cancel") {
        window.close();
      }
    });
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