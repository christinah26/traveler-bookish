function avis({nom, commentaire , etoiles}) {
    return (
        <div class="bg-white rounded-2xl shadow-lg p-8 card-hover">
            <h3 class="text-xl font-bold mb-2 text-blue-900">{nom}</h3>
            <div class="flex gap-1 text-yellow-400 mb-4 justify-center">{etoiles}</div>
            <p class="text-gray-600 italic">{commentaire}</p>
        </div>

    )
}

export default avis;