
import Navbar from '../Top/navbar.jsx';
import Footer from '../Top/footer';
import Header from '../Top/header.jsx';
import DestinationSection from '../Section/DestSection.jsx';
import HotelSection from '../Section/HotelSection.jsx';
import AvisCard from '../cards/avisCards.jsx';
import AvisData from '../Data/AvisData.jsx';
import Contact from '../Section/contact.jsx';
import FadeIn from '../components/fadeIn.jsx';
function Accueil() {
  return (
    <>
    <Navbar />
    <div className=" flex flex-col min-h-screen bg-gray-400">
      
      <FadeIn>
      <Header />
      </FadeIn>

      
      <main className="flex-grow">
        <FadeIn>
        {/* Destinations */}
        <DestinationSection />
        </FadeIn>

        <FadeIn>
        {/* Hotels */}
        <HotelSection />            
        </FadeIn>
      
      <FadeIn>
      {/* Avis */}
      <section className="bg-white-9 p-8 md:p-20 flex-row text-center" id="avis">
            <h2 className="text-center text-4xl font-bold text-blue-900">Ce que disent nos clients</h2>
            <p className="p-4">Découvrez les témoignages de nos clients satisfaits</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="dest-grid">
              {AvisData.map((d,index) =>(
              <AvisCard
              key={index}
              nom={d.nom}
              etoiles={d.etoiles}
              commentaire={d.commentaire}
              
              
              />))}
            </div>
      </section>
      </FadeIn>

      <FadeIn>
      <Contact/>
      

      </FadeIn>
      </main>

      <Footer />
    </div>
    </>

  );
}

export default Accueil;