import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/traveler-nobg.png";
import SearchBar from "../components/searchBar";
import Logout from "../components/logout.tsx"
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* NAVBAR PRINCIPALE */}
      <nav className="flex justify-between items-center p-4 bg-white text-blue-900 font-bold shadow-md fixed w-full top-0 z-50 transition-all duration-300">
        <img src={Logo} alt="logo" className="h-8 w-auto object-contain" />

        {/* Bouton*/}
        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-900 focus:outline-none"
          id="menu-toggle"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 list-none" id="menu">
          <li><SearchBar /></li>
          <li><Link to="/" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Accueil</Link></li>
          <li><Link to="/pages/destinations" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Destinations</Link></li>
          <li><Link to="/pages/hotels" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Hôtels</Link></li>
          <li><Link to="/pages/chambres" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Chambres</Link></li>
          <li><Link to="/pages/compagnies" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Compagnies aériennes</Link></li>
          <li><a href="#contact" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Contact</a></li>
          <li><Link to="/formulaire" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Réservation</Link></li>
          <li><Link to="/avis" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Laisser un avis</Link></li>
          {/* <li><Link to="/login" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Log in</Link></li>
          <li><Link to="/signin" className="hover:text-purple-600 hover:scale-110 transition-all duration-300">Sign in</Link></li> */}
          <li className="hover:text-purple-600 hover:scale-110 transition-all duration-300"><Logout/></li>
        </ul>
      </nav>


      {/* MENU MOBILE */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-blue-900"
        >
          ✕
        </button>

        <div className="flex flex-col items-center mt-10 gap-7 ">

          <SearchBar />
          <Link to="/" onClick={toggleMenu} className="text-lg font-bold text-blue-900 hover:text-purple-600 hover:scale-110 transition-all duration-300">Accueil</Link>
          <Link to="/pages/destinations" onClick={toggleMenu} className="text-lg font-bold text-blue-900 hover:text-purple-600 hover:scale-110 transition-all duration-300">Destinations</Link>
          <Link to="/pages/hotels" onClick={toggleMenu} className="text-lg font-bold text-blue-900 hover:text-purple-600 hover:scale-110 transition-all duration-300">Hôtels</Link>
          <Link to="/pages/chambres" onClick={toggleMenu} className="text-lg font-bold text-blue-900 hover:text-purple-600 hover:scale-110 transition-all duration-300">Chambres</Link>
          <Link to="/pages/compagnies" onClick={toggleMenu} className="text-lg font-bold text-blue-900 hover:text-purple-600 hover:scale-110 transition-all duration-300">Compagnies aériennes</Link>
          <a href="#contact" onClick={toggleMenu} className="text-lg font-bold text-blue-900 hover:text-purple-600 hover:scale-110 transition-all duration-300">Contact</a>
          <Link to="/formulaire" onClick={toggleMenu} className="text-lg font-bold text-blue-900 hover:text-purple-600 hover:scale-110 transition-all duration-300">Réservation</Link>
          <Link to="/avis" onClick={toggleMenu} className="text-lg font-bold text-blue-900 hover:text-purple-600 hover:scale-110 transition-all duration-300">Laisser un avis</Link>
          {/* {/* <Link to="/login" onClick={toggleMenu} className="text-lg font-bold text-blue-900">Log in</Link>
          <Link to="/signin" onClick={toggleMenu} className="text-lg font-bold text-blue-900">Sign in</Link> */}
          <div className="text-lg font-bold text-blue-900 hover:text-purple-600 hover:scale-110 transition-all duration-300">< Logout /></div>
        </div> 
      </div>
    </>
  );
}

export default Header;
