import React, { useState } from 'react';

function Send () {
    const [formData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        destination: '',
        hotel: '',
        room: '',
        dateDebut: '',
        dateFin: '',
    });

    const handleSubmit = () => {
        if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone ||
            !formData.destination || !formData.hotel || !formData.room || !formData.dateDebut || !formData.dateFin) {
          alert('Veuillez remplir tous les champs obligatoires');
          return;
        }

        console.log('Données du formulaire:', formData);
        alert('Votre demande de réservation a été envoyée avec succès !');
    };

    return (
        <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
        >
            Envoyer
        </button>
      

    );
}

export default Send;