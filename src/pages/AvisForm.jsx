import React, { useState } from "react";
import { Star, X } from "lucide-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AvisForm() {
  const navigate = useNavigate();

  const [reviewData, setReviewData] = useState({
    user: "",
    hotel: "",
    hotelRating: 0,
    hotelComment: "",
    airline: "",
    airlineRating: 0,
    airlineComment: "",
  });

  const [sections, setSections] = useState({
    hotel: true,
    airline: true,
  });

  const handleSectionToggle = (type) => {
    setSections((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleRatingClick = (type, rating) => {
    setReviewData((prev) => ({ ...prev, [type]: rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification
    if (!reviewData.user) {
      Swal.fire("Erreur", "Merci d’indiquer votre nom ou e-mail", "warning");
      return;
    }

    if (
      (sections.hotel &&
        (!reviewData.hotel || reviewData.hotelRating === 0)) ||
      (sections.airline &&
        (!reviewData.airline || reviewData.airlineRating === 0))
    ) {
      Swal.fire(
        "Erreur",
        "Merci de remplir tous les champs et de donner une note",
        "warning"
      );
      return;
    }

    console.log("Avis soumis :", reviewData);
    Swal.fire(
      "Merci !",
      "Votre avis a été publié avec succès",
      "success"
    );

    // Reset
    setReviewData({
      user: "",
      hotel: "",
      hotelRating: 0,
      hotelComment: "",
      airline: "",
      airlineRating: 0,
      airlineComment: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">Laisser un Avis</h2>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Nom utilisateur */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Votre nom ou e-mail
            </label>
            <input
              type="text"
              value={reviewData.user}
              onChange={(e) =>
                setReviewData({ ...reviewData, user: e.target.value })
              }
              placeholder="Ex : Jean Dupont / jean@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Toggle des sections */}
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={sections.hotel}
                onChange={() => handleSectionToggle("hotel")}
              />
              Évaluer l'Hôtel
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={sections.airline}
                onChange={() => handleSectionToggle("airline")}
              />
              Évaluer la Compagnie
            </label>
          </div>

          {/* Section Hôtel */}
          {sections.hotel && (
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Évaluation de l'Hôtel
              </h3>

              <input
                type="text"
                value={reviewData.hotel}
                onChange={(e) =>
                  setReviewData({ ...reviewData, hotel: e.target.value })
                }
                placeholder="Nom de l'hôtel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                required={sections.hotel}
              />

              <div className="flex space-x-2 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick("hotelRating", star)}
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= reviewData.hotelRating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <textarea
                rows="3"
                value={reviewData.hotelComment}
                onChange={(e) =>
                  setReviewData({ ...reviewData, hotelComment: e.target.value })
                }
                placeholder="Commentaire sur l'hôtel..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
            </div>
          )}

          {/* Section Compagnie */}
          {sections.airline && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Évaluation de la Compagnie
              </h3>

              <input
                type="text"
                value={reviewData.airline}
                onChange={(e) =>
                  setReviewData({ ...reviewData, airline: e.target.value })
                }
                placeholder="Nom de la compagnie aérienne"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                required={sections.airline}
              />

              <div className="flex space-x-2 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick("airlineRating", star)}
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= reviewData.airlineRating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <textarea
                rows="3"
                value={reviewData.airlineComment}
                onChange={(e) =>
                  setReviewData({
                    ...reviewData,
                    airlineComment: e.target.value,
                  })
                }
                placeholder="Commentaire sur la compagnie aérienne..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
            </div>
          )}

          {/* Boutons */}
          <div className="flex gap-3 pt-4">
            <button
              type="reset"
              onClick={() =>
                setReviewData({
                  user: "",
                  hotel: "",
                  hotelRating: 0,
                  hotelComment: "",
                  airline: "",
                  airlineRating: 0,
                  airlineComment: "",
                })
              }
              className="flex-1 bg-gray-200 text-gray-800 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition"
            >
              Publier l'avis
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

