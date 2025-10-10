
import Navbar from '../Top/navbar.jsx';
import Footer from '../Top/footer';
import Header from '../Top/header.jsx';
import SectionList from '../Section/SectionList.jsx';
import destinationsData from '../Data/DestinationData.jsx';
import aeroData from '../Data/aeroData.jsx';
import hotelsData from '../Data/HotelData.jsx';
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
        <SectionList 
        title="Destinations Populaires"
        sousTitre="Découvrez nos destinations les plus prisées"
        data={destinationsData}
        buttonLink="/pages/destinations"
        buttonText="Explorer les destinations"
        options={{ showImage: true, showPrice: true, showReserve: true }}
        />  
        </FadeIn>

        <FadeIn>
        {/* Hotels */}
        <SectionList
        title="Hôtels Recommandés"
        sousTitre="Trouvez les meilleurs hébergements pour votre séjour"
        data={hotelsData}
        buttonLink="/pages/hotels"
        buttonText="Explorer les hôtels"
        options={{ showImage: true, showPrice: true, showReserve: true }}
        
        />
        </FadeIn>

        <FadeIn> 
        {/* Compagnies aériennes */}
        <SectionList
        title="Nos compagnies aériennes"
        sousTitre="Voyagez avec les meilleures compagnies aériennes"
        data={aeroData}
        buttonLink="/pages/compagnies"
        buttonText="Explorer les compagnies aériennes"
        options={{ showImage: true, showPrice: true, showReserve: true }}
        />
        </FadeIn>
      
      <FadeIn>
      {/* Avis */}
      <SectionList
        title="Avis de nos clients"
        sousTitre="Ce que nos clients disent de nous"
        data={AvisData}
        buttonLink="/avis"
        buttonText="Voir plus d’avis"
        options={{ showStars: true, showDate: true }}
      />
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