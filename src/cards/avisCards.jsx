function avisCard({nom, commentaire , etoiles}) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
            <h3 className="text-xl font-bold mb-2 text-blue-900">{nom}</h3>
            <div className="flex gap-1 text-yellow-400 mb-4 justify-center">{etoiles}</div>
            <p className="text-gray-600 italic">{commentaire}</p>
        </div>

    )
}

export default avisCard;