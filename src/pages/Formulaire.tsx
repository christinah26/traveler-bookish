import React, { useState } from 'react';
import { MapPin, Calendar, Send, ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Logo from "../assets/traveler-nobg.png";

function Formulaire () {
  const location = useLocation();
  const state = location.state || {};


  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    destination: state?.destination ||'',
    hotel: state?.hotel ||'',
    compagnie: state?.compagnie || '',
    dateDebut: '',
    dateFin: ''

  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value

    });
  };

  const handleSubmit = () => {
    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone || 
        !formData.destination || !formData.hotel || !formData.dateDebut || !formData.dateFin) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;

    }

    console.log('Données du formulaire:', formData);
    alert('Votre demande de réservation a été envoyée avec succès !');
  };

  const handleRetour = () => {
    if (confirm('Voulez-vous vraiment quitter ce formulaire ?')) {
      window.history.back();

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-50 bg-white rounded-full shadow-lg mb-4">
            <img src={Logo}  />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Réservez Votre Voyage</h1>
          <p className="text-blue-50 text-lg">Remplissez le formulaire pour démarrer votre aventure</p>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="space-y-6">
            {/* Nom et Prénom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Votre prénom"
                />
              </div>

            </div>

            {/* Email et Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="exemple@email.com"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+261 XX XX XXX XX"
                />
              </div>

            </div>

            {/* Destination et Hôtel et Compagnie*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Destination *
                </label>
                 <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Destination choisie"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />

              </div>

              <div>
                <label htmlFor="hotel" className="block text-sm font-semibold text-gray-700 mb-2">
                  Hôtel *
                </label>
                  <input
                type="text"
                id="hotel"
                name="hotel"
                value={formData.hotel}
                onChange={handleChange}
                placeholder="Hôtel choisi"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
              </div>

              <div>
                <label htmlFor="compagnie" className="block text-sm font-semibold text-gray-700 mb-2">
                Compagnie aérienne *
                </label>
                <input
              type="text"
              id="compagnie"
              name="compagnie"
              value={formData.compagnie}
              onChange={handleChange}
              placeholder="Compagnie choisie"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
              </div>


            </div>

            {/* Dates de séjour */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                Période de séjour
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dateDebut" className="block text-sm font-semibold text-gray-700 mb-2">
                    Date de début *
                  </label>
                  <input
                    type="date"
                    id="dateDebut"
                    name="dateDebut"
                    value={formData.dateDebut}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white"
                  />

                </div>

                <div>

                  <label htmlFor="dateFin" className="block text-sm font-semibold text-gray-700 mb-2">
                    Date de fin *
                  </label>
                  <input
                    type="date"
                    id="dateFin"
                    name="dateFin"
                    value={formData.dateFin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white"
                  />

                </div>

              </div>

            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={handleRetour}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour
              </button>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Envoyer
              </button>

            </div>

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-white text-sm mt-6">
          * Tous les champs sont obligatoires
        </p>
      </div>
    </div>
  );
}

export default Formulaire;