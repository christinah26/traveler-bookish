import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Award, Shield, Plane, Hotel, Compass, Users } from 'lucide-react';

function PagePublic() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">
                        Bienvenue chez Traveler
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        Votre partenaire de confiance pour des voyages inoubliables
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button
                            onClick={() => navigate('/home')}
                            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            Commencez l'exploration
                        </button>
                    </div>
                    <p className="mt-6 text-sm text-gray-200">
                        Déjà membre ? Connectez-vous pour accéder à tous nos services
                    </p>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Pourquoi Traveler */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">
                        Pourquoi choisir Traveler ?
                    </h2>
                    <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
                        Une expérience de voyage exceptionnelle avec des services sur mesure
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                            <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="text-white" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                150+ Destinations
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Explorez le monde avec nos destinations soigneusement sélectionnées
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                            <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star className="text-white" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                Service 5 Étoiles
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Un service client exceptionnel disponible 24/7 pour vous
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="text-white" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                Meilleur Prix Garanti
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Des tarifs compétitifs et transparents sans frais cachés
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                            <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="text-white" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                Paiement Sécurisé
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Vos transactions sont protégées et 100% sécurisées
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos Services */}
            <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
                        Nos Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Plane className="text-blue-600 mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Vols & Compagnies Aériennes
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">
                                Réservez vos vols avec nos partenaires de confiance. 
                                Des prix compétitifs et un large choix de destinations.
                            </p>
                            <ul className="text-gray-600 space-y-2">
                                <li>✈️ Vols internationaux et domestiques</li>
                                <li>✈️ Compagnies aériennes premium</li>
                                <li>✈️ Réservation instantanée</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Hotel className="text-purple-600 mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Hôtels & Hébergements
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">
                                Trouvez l'hébergement parfait pour votre séjour. 
                                Du luxe à l'économique, nous avons tout ce qu'il vous faut.
                            </p>
                            <ul className="text-gray-600 space-y-2">
                                <li>🏨 Hôtels de luxe et économiques</li>
                                <li>🏨 Chambres confortables et modernes</li>
                                <li>🏨 Meilleurs emplacements</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Compass className="text-green-600 mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Destinations Exclusives
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">
                                Découvrez des destinations uniques sélectionnées 
                                spécialement pour vous offrir des expériences mémorables.
                            </p>
                            <ul className="text-gray-600 space-y-2">
                                <li>🌍 Plus de 150 destinations</li>
                                <li>🌍 Circuits personnalisés</li>
                                <li>🌍 Guides locaux experts</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Users className="text-orange-600 mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Service Personnalisé
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">
                                Notre équipe d'experts est à votre disposition pour 
                                créer le voyage parfait adapté à vos besoins.
                            </p>
                            <ul className="text-gray-600 space-y-2">
                                <li>👥 Conseillers dédiés</li>
                                <li>👥 Support 24/7</li>
                                <li>👥 Assistance en voyage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-5xl font-bold mb-6">
                        Prêt à commencer votre aventure ?
                    </h2>
                    <p className="text-xl mb-10 text-gray-100">
                        Créez votre compte dès maintenant et accédez à toutes nos offres exclusives
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button
                            onClick={() => navigate('/signin')}
                            className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            Créer un compte gratuitement
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
                            J'ai déjà un compte
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="bg-gray-900 text-white py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2024 Traveler - Votre partenaire voyage de confiance
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default PagePublic;