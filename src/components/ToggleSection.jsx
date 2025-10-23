export default function ToggleSection({ sections, onToggle }) {
    return (
      <div className="flex gap-4">
        {Object.keys(sections).map((key) => (
          <label key={key} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={sections[key]}
              onChange={() => onToggle(key)}
            />
            Évaluer {key === "hotel" ? "l'Hôtel" : "la Compagnie"}
          </label>
        ))}
      </div>
    );
  }
  