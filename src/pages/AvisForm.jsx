import React, { useState } from "react";
import { X } from "lucide-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ReviewSection from "../components/review";
import ToggleSection from "../components/ToggleSection";

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

  const [sections, setSections] = useState({ hotel: true, airline: true });

  const handleSectionToggle = (type) =>
    setSections((prev) => ({ ...prev, [type]: !prev[type] }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewData.user) 
      { Swal.fire(
        "Erreur",
        "Merci d’indiquer votre nom ou e-mail", "warning"); 
        return; } 
      
    if ( (sections.hotel && (!reviewData.hotel || reviewData.hotelRating === 0)) || (sections.airline && (!reviewData.airline || reviewData.airlineRating === 0)) ) 
        { Swal.fire( 
          "Erreur",
          "Merci de remplir tous les champs et de donner une note", "warning" ); 
          return; } 

          console.log("Avis soumis :", reviewData);
          Swal.fire( "Merci !", "Votre avis a été publié avec succès", "success" ); 
        
          // Reset
        setReviewData({ 
          user: "",
          hotel: "", 
          hotelRating: 0,
          hotelComment: "",
          airline: "",
          airlineRating: 0,
          airlineComment: "", });
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

          <ToggleSection sections={sections} onToggle={handleSectionToggle} />

          {sections.hotel && (
            <ReviewSection
              label="l'Hôtel"
              nameValue={reviewData.hotel}
              onNameChange={(v) => setReviewData({ ...reviewData, hotel: v })}
              ratingValue={reviewData.hotelRating}
              onRatingChange={(v) =>
                setReviewData({ ...reviewData, hotelRating: v })
              }
              commentValue={reviewData.hotelComment}
              onCommentChange={(v) =>
                setReviewData({ ...reviewData, hotelComment: v })
              }
              required
            />
          )}

          {sections.airline && (
            <ReviewSection
              label="la Compagnie aérienne"
              nameValue={reviewData.airline}
              onNameChange={(v) => setReviewData({ ...reviewData, airline: v })}
              ratingValue={reviewData.airlineRating}
              onRatingChange={(v) =>
                setReviewData({ ...reviewData, airlineRating: v })
              }
              commentValue={reviewData.airlineComment}
              onCommentChange={(v) =>
                setReviewData({ ...reviewData, airlineComment: v })
              }
              required
            />
          )}

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


