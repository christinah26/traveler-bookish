import { useState } from "react";
import { Send } from 'lucide-react';


function Contact() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="bg-green-200 p-8 md:p-20 text-center">
      <h2 className="text-blue-900 mb-4 opacity-90">
        Une question ? Nous sommes là pour vous aider !
      </h2>

      <button
        onClick={toggleForm}
        className="text-2xl font-bold mb-3 text-blue-900 cursor-pointer"
        aria-label="Afficher le formulaire de contact"
        aria-expanded={showForm}
        id="contact-toggle"
      >
        Contactez-nous
      </button>

      {showForm && (
        <form
          className="bg-white rounded-2xl shadow-2xl p-8 mt-6 max-w-lg mx-auto"
          id="contact-form"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Nom complet
            </label>
            <input
              type="text"
              placeholder="Entrez votre nom"
              id="contact-name"
              required
              className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none transition-all duration-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Entrez votre Email"
              id="contact-email"
              required
              className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none transition-all duration-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="contact-message"
              placeholder="Écrivez votre message ici..."
              rows="5"
              required
              className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex flex-1 items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />Envoyer
            
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;