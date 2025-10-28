
// import Navbar from '../Top/navbar.jsx';
// import Footer from '../Top/footer';
// import Header from '../Top/header.jsx';
// import SectionList from '../Section/SectionList.jsx';
// import destinationsData from '../Data/DestinationData.jsx';
// import aeroData from '../Data/aeroData.jsx';
// import hotelsData from '../Data/HotelData.jsx';
// import ChambreData from '../Data/ChambreData.jsx';
// import Contact from '../Section/contact.jsx';
// import FadeIn from '../components/fadeIn.jsx';
// import AvisSection from '../Section/AvisSection.jsx';

// function Accueil() {
//   return (
//     <>
//     <Navbar />
//     <div className=" flex flex-col min-h-screen bg-gray-400">
      
//       <FadeIn>
//       <Header />
//       </FadeIn>

      
      
//       <main className="flex-grow">
//         <FadeIn>
//         {/* Destinations */}
//         <SectionList 
//         id= "destinations-section"
//         title="Destinations Populaires"
//         sousTitre="Découvrez nos destinations les plus prisées"
//         data={destinationsData}
//         buttonLink="/pages/destinations"
//         buttonText="Explorer les destinations"
//         options={{ showImage: true, showPrice: true, showReserve: true }}
//         />  
//         </FadeIn>

//         <FadeIn>
//         {/* Hotels */}
//         <SectionList
//         title="Hôtels Recommandés"
//         sousTitre="Trouvez les meilleurs hébergements pour votre séjour"
//         data={hotelsData}
//         buttonLink="/pages/hotels"
//         buttonText="Explorer les hôtels"
//         options={{ showStars:true, showImage: true, showPrice: true, showReserve: true }}
        
//         />
//         </FadeIn>

//         {/* Chambres */}
//         <FadeIn>
//         <SectionList
//         title="Nos Chambres"
//         sousTitre="Découvrez nos chambres selon vos envies"
//         data={ChambreData}
//         buttonLink="/pages/chambres"
//         buttonText="Voir toutes les chambres"
//         options={{ showPrice: true, showImage : true , showReserve: true }}
//       />
//         </FadeIn>

//         <FadeIn> 
//         {/* Compagnies aériennes */}
//         <SectionList
//         title="Nos compagnies aériennes"
//         sousTitre="Voyagez avec les meilleures compagnies aériennes"
//         data={aeroData}
//         buttonLink="/pages/compagnies"
//         buttonText="Explorer les compagnies aériennes"
//         options={{ showStars:true, showImage: true, showPrice: false , showReserve: true }}
//         />
//         </FadeIn>

        
      
//       <FadeIn>
//       {/* Avis Section */}
//       <AvisSection/>
//       </FadeIn>

//       <FadeIn>

//       <Contact/>
      

//       </FadeIn>
//       </main>

//       <Footer />
//     </div>
//     </>

//   );
// }

// export default Accueil;

import Navbar from '../Top/navbar.jsx';
import Footer from '../Top/footer';
import Header from '../Top/header.jsx';
import SectionList from '../Section/SectionList.jsx';
import destinationsData from '../Data/DestinationData.jsx';
import aeroData from '../Data/aeroData.jsx';
import hotelsData from '../Data/HotelData.jsx';
import ChambreData from '../Data/ChambreData.jsx';
import Contact from '../Section/contact.jsx';
import FadeIn from '../components/fadeIn.jsx';
import AvisSection from '../Section/AvisSection.jsx';
import { MapPin, Star, Award, Shield } from 'lucide-react';

function Accueil() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
        
        <FadeIn>
          <Header />
        </FadeIn>

        {/* Section Pourquoi nous choisir */}
        <FadeIn>
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Pourquoi choisir Traveler ?
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Une expérience de voyage exceptionnelle avec des services sur mesure
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">150+ Destinations</h3>
                  <p className="text-gray-600">Explorez le monde avec nos destinations soigneusement sélectionnées</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Service 5 Étoiles</h3>
                  <p className="text-gray-600">Un service client exceptionnel disponible 24/7 pour vous</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Meilleur Prix Garanti</h3>
                  <p className="text-gray-600">Des tarifs compétitifs et transparents sans frais cachés</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Paiement Sécurisé</h3>
                  <p className="text-gray-600">Vos transactions sont protégées et 100% sécurisées</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <main className="flex-grow">
          <FadeIn>
            {/* Destinations */}
            <SectionList 
              id="destinations-section"
              title="Destinations Populaires"
              sousTitre="Découvrez nos destinations les plus prisées à travers le monde"
              data={destinationsData}
              buttonLink="/pages/destinations"
              buttonText="Explorer toutes les destinations"
              options={{ showImage: true, showPrice: true, showReserve: true }}
            />  
          </FadeIn>

          <FadeIn>
            {/* Hotels */}
            <SectionList
              title="Hôtels Recommandés"
              sousTitre="Trouvez les meilleurs hébergements pour un séjour inoubliable"
              data={hotelsData}
              buttonLink="/pages/hotels"
              buttonText="Découvrir tous nos hôtels"
              options={{ showStars: true, showImage: true, showPrice: true, showReserve: true }}
            />
          </FadeIn>

          {/* Chambres */}
          <FadeIn>
            <SectionList
              title="Nos Chambres"
              sousTitre="Des chambres confortables adaptées à tous vos besoins"
              data={ChambreData}
              buttonLink="/pages/chambres"
              buttonText="Voir toutes les chambres"
              options={{ showPrice: true, showImage: true, showReserve: true }}
            />
          </FadeIn>

          <FadeIn> 
            {/* Compagnies aériennes */}
            <SectionList
              title="Nos Compagnies Aériennes"
              sousTitre="Voyagez en toute sérénité avec nos partenaires de confiance"
              data={aeroData}
              buttonLink="/pages/compagnies"
              buttonText="Voir toutes les compagnies"
              options={{ showStars: true, showImage: true, showPrice: false, showReserve: true }}
            />
          </FadeIn>

          <FadeIn>
            {/* Avis Section */}
            <AvisSection />
          </FadeIn>

          <FadeIn>
            <Contact />
          </FadeIn>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Accueil;