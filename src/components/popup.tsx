import React, { useEffect } from "react";
import Swal from "sweetalert2";
import Logo from "../assets/traveler-nobg.png";
import './popup.css';
// import { Result } from "postcss";

const Popup: React.FC = () => {

    const handleRetour = () => {
        Swal.fire({
            title: "Voulez-vous vraiment quitter cette page ?",
            icon: "question",
            iconColor: "#fff",
            showCancelButton: true,
            confirmButtonText: "Oui",
            cancelButtonText: "Annuler",
            allowOutsideClick: false,
            allowEscapeKey: false,
            customClass: {
                popup: "custom-popup",
                title: "custom-title",
                confirmButton: "custom-confirm-button",
                cancelButton: "custom-cancel-button",         
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.history.back() ;
                
            } else if (result.dismiss === 'cancel') {
                showPopup();
            }
    });
        }

    const showPopup = () => {
        Swal.fire({
            title: "Bienvenu(e) sur Traveler!",
            text: "Veuillez vous connecter pour continuer.",
            imageUrl: Logo,
            imageWidth: 200,
            imageHeight: 60,
            imageAlt: "Logo Traveler",
            showCancelButton: true,
            confirmButtonText: "Se connecter",
            cancelButtonText: "Quitter le site",
            allowOutsideClick: false,
            allowEscapeKey: false,
            reverseButtons: true,
            customClass: {
                popup: "custom-popup",
                title: "custom-title",
                image: "custom-image",
                confirmButton: "custom-confirm-button",
                cancelButton: "custom-cancel-button",
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/login";
            
            } else if (result.dismiss === "cancel") {
                handleRetour();
            }

        });
    }

    // "censer" empêcher le pop up de revenir après connexion
    useEffect (() => {
        const isAuthenticated = !!localStorage.getItem("token");
        const currentPath = window.location.pathname;

        if (!isAuthenticated && currentPath !== "/login" && currentPath !== "/signin") {
            showPopup();
        }
        
    }, []);

    return null;
};

export default Popup;