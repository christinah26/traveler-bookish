import { Star } from "lucide-react";

export default function Stars({ rating, onChange }) {
  return (
    <div className="flex space-x-2 mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} type="button" onClick={() => onChange(star)}>
          <Star
            className={`w-8 h-8 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
