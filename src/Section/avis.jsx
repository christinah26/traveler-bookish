

function Avis() {
    

    return (
        <div>
            {showReviewModal && (
        <div 
          className="fixed inset-0  backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={handleCloseReview}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="p-6 border-b border-gray-200 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Laisser un Avis
                </h2>
                <p className="text-gray-600 mt-1">
                  Partagez votre expérience à {selectedReservation?.hotel}
                </p>
              </div>
              <button
                onClick={handleCloseReview}
                className="text-gray-400 hover:text-gray-600 transition p-1 hover:bg-gray-100 rounded-full"
                type="button"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            
            <form onSubmit={handleSubmitReview} className="flex-1 overflow-y-auto p-6 space-y-5">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hôtel
                </label>
                <input
                  type="text"
                  value={reviewData.hotel}
                  disabled
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm"
                />
              </div>

              
              <div className="border-b border-gray-200 pb-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Évaluation de l'Hôtel</h3>
                
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Note de l'Hôtel
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleHotelRatingClick(star)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= reviewData.hotelRating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {reviewData.hotelRating > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      {reviewData.hotelRating} étoile{reviewData.hotelRating > 1 ? 's' : ''}
                    </p>
                  )}
                </div>

                
                <div>
                  <label
                    htmlFor="hotelComment"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Commentaire sur l'Hôtel
                  </label>
                  <textarea
                    id="hotelComment"
                    rows="3"
                    value={reviewData.hotelComment}
                    onChange={(e) =>
                      setReviewData({ ...reviewData, hotelComment: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-sm"
                    placeholder="Partagez votre expérience avec cet hôtel..."
                  />
                </div>
              </div>

              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Évaluation de la Compagnie Aérienne</h3>
                
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Note de la Compagnie Aérienne
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleAirlineRatingClick(star)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= reviewData.airlineRating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {reviewData.airlineRating > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      {reviewData.airlineRating} étoile{reviewData.airlineRating > 1 ? 's' : ''}
                    </p>
                  )}
                </div>

                
                <div>
                  <label
                    htmlFor="airlineComment"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Commentaire sur la Compagnie Aérienne
                  </label>
                  <textarea
                    id="airlineComment"
                    rows="3"
                    value={reviewData.airlineComment}
                    onChange={(e) =>
                      setReviewData({ ...reviewData, airlineComment: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-sm"
                    placeholder="Partagez votre expérience avec la compagnie aérienne..."
                  />
                </div>
              </div>
            </form>

            
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={handleCloseReview}
                  className="flex-1 bg-white border border-gray-300 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  onClick={handleSubmitReview}
                  disabled={reviewData.hotelRating === 0 || reviewData.airlineRating === 0}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Publier l'Avis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}



        </div>




    );
}

export default Avis;