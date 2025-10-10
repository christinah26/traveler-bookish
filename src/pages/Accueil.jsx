
import Navbar from '../Top/navbar.jsx';
import Footer from '../Top/footer';
import Header from '../header.jsx';
import Destination from '../cards/destinations.jsx';
import DestinationData from '../Data/DestinationData.jsx';
import Hotel from '../cards/hotels.jsx';
import HotelData from '../Data/HotelData.jsx';
import Avis from '../cards/avis.jsx';
import AvisData from '../Data/AvisData.jsx';
import Contact from '../contact.jsx';

function Accueil() {
  return (
    <>
    <Navbar />
    <div className=" flex flex-col min-h-screen bg-gray-400">
      
      <Header />
      <main className="flex-grow">
        {/* Destinations */}
      <section className="bg-gray-200 p-8 md:p-20 flex-row text-center" id="destinations">
            <h2 className="text-center text-4xl font-bold text-blue-900">Nos destinations populaires</h2>
            <p className="p-4">Explorez nos destinations les plus populaires</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="dest-grid">
              {DestinationData.map ((d,index) =>(
                <Destination
                key={index}
                nom={d.nom}
                image={d.image}
                desc={d.desc}
                prix={d.prix}                
                
                />))}
            </div>
            
      </section>

      {/* Hôtels */}
      <section className="bg-blue-400 p-8 md:p-20 flex-row text-center" id="hotels">
            <h2 className="text-center text-4xl font-bold text-blue-900">Nos hotels les plus populaires</h2>
            <p className="p-4">Découvrez les sélections de nos hôtels les plus luxueux</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="dest-grid">
              {HotelData.map((d,index) =>(
                <Hotel
                key={index}
                nom={d.nom}
                image={d.image}
                desc={d.desc}
                prix={d.prix}                
                
                />))}
            </div>
            
      </section>

      {/* Avis */}
      <section className="bg-white-9 p-8 md:p-20 flex-row text-center" id="avis">
            <h2 className="text-center text-4xl font-bold text-blue-900">Ce que disent nos clients</h2>
            <p className="p-4">Découvrez les témoignages de nos clients satisfaits</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="dest-grid">
              {AvisData.map((d,index) =>(
              <Avis
              key={index}
              nom={d.nom}
              etoiles={d.etoiles}
              commentaire={d.commentaire}
              
              
              />))}
            </div>
      </section>


      <Contact/>
      


      </main>

      <Footer />
    </div>
    </>

  );
}

export default Accueil;