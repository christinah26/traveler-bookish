import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Déconnexion",
      text: "Voulez-vous vraiment vous déconnecter ?",
      icon: "warning",
      iconColor:"#fff",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui, me déconnecter",
      cancelButtonText: "Annuler",
      reverseButtons: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      customClass: {
       popup: "custom-popup",
       confirmButton: "custom-confirm-button",
       cancelButton: "custom-cancel-button",
     }

    }).then((result) => {
      if (result.isConfirmed) {
        // Supprime les données de session
        localStorage.removeItem("formData");
        // Les trucs à supprimer à mettre ici du genre :
        // localStorage.removeItem("otherData");
        // localStorage.clear(); // Pour supprimer toutes les données de localStorage
         

        // Popup de confirmation
        Swal.fire({
          title: "Déconnecté avec succès!",
          icon: "success",
          iconColor: "#ffff",
          confirmButtonText: "OK",
          allowOutsideClick: false,
          allowEscapeKey: false,
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            confirmButton: "custom-confirm-button",
          }
        }).then((result) => {
          navigate("/");
        });
      }
    });
  };

  return (
    <button
      onClick={handleLogout}
    >
      Déconnexion
    </button>
  );
}