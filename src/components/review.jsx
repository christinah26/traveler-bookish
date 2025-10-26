
import Stars from "./stars";

export default function ReviewSection({
  label,
  nameValue,
  onNameChange,
  ratingValue,
  onRatingChange,
  commentValue,
  onCommentChange,
  required,
}) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Évaluation de {label}
      </h3>

      <input
        type="text"
        value={nameValue}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder={`Nom de ${label.toLowerCase()}`}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        required={required}
      />

      <Stars rating={ratingValue} onChange={onRatingChange} />

      <textarea
        rows="3"
        value={commentValue}
        onChange={(e) => onCommentChange(e.target.value)}
        placeholder={`Commentaire sur ${label.toLowerCase()}...`}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
      />
    </div>
  );
}
