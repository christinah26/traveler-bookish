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
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui, me déconnecter",
      cancelButtonText: "Annuler",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Supprime les données de session
        localStorage.removeItem("formData");
        // Les trucs à supprimer à mettre ici 


        // Popup de confirmation
        Swal.fire({
          title: "Déconnecté !",
          text: "Vous avez été déconnecté avec succès.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
        //   page d'accueil 
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