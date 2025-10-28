import React, { useState } from "react";
import Logo from "../assets/traveler-nobg.png";
import Field from "../components/champ";
import { Eye, EyeOff, Lock, Mail, MapPin, Phone, User, UserPen, UserPlus } from "lucide-react";
import Retour from "../components/retour";
import Swal from "sweetalert2";

function Signin () {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({nom:'', prenom: '', telephone: '', adresse: '', email: '', username: '', password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const {nom, prenom, telephone, adresse, email, username, password} = formData;
    if (!nom || !prenom || !telephone || !adresse || !email || !username || !password) {
        return alert("Veuillez remplir les champs obligatoires");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return alert("Veuillez entrer une adresse valide");
    }
    if (!/^\+?[0-9\s\-]{7,15}$/.test(telephone)) {
        return alert("Veuillez entrer un numéro de téléphone valide");
    }
    if (!/^[a-zA-ZÀ-ÿ '-]+$/.test(nom) || !/^[a-zA-ZÀ-ÿ '-]+$/.test(prenom)) {
        return alert("Le nom et le prénom ne doivent contenir que des lettres");
    }
    if (password.length < 6) {
        return alert("Le mot de passe doit contenie au moins 6 caractères");
    }
    console.log("Données d\'inscription:", formData);
    Swal.fire({
      title: "Inscription réussie !",
      icon: "success",
      iconColor: "#ffff",
      confirmButtonText: "OK",
      allowEscapeKey: false,
      allowOutsideClick: false,
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        confirmButton: "custom-confirm-button",
      }
    }).then((result) => {
      if (result.isConfirmed) {
        window.history.back();
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-50 bg-white rounded-full shadow-lg mb-4">
            <img src={Logo} alt="Logo" />
          </div>       
        <h1 className="text-4xl font-bold text-white mb-2">Créer un compte</h1>
        <p className="text-blue-50 text-lg">Rejoignez-nous pour des des voyages inoubliables</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field
            label="Nom"
            icon={UserPen}
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom"
            />
            <Field
            label="Prénom"
            icon={UserPen}
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Votre prénom"
             />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field
            label="Téléphone"
            icon={Phone}
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="+261 XX XXX XX"
            />
            <Field
            label="Adresse"
            icon={MapPin}
            id="adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            placeholder="123 Rue de la Paix"
            />
          </div>
          <Field
          label="Email"
          icon={Mail}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="exemple@gmail.com"
          />
          <Field
          label="Nom d'utilisateur"
          icon={User}
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="jean_dupont123"
          />
        </div>
        <div>
          <label htmlFor="password"
          className="block text-sm font-semibold text-gray-700 mb-2"
          >
            <Lock className="inline w-4 h-4 mr-1" /> Mot de passe *
          </label>
          <div className="relative">
            <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Minimum 6 caractères"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-12"
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
            { showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <div>
            <p className="text-xs text-gray-500 mt-1">Le mot de passe doit contenir au moins 6 caractères</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Retour />
            <button
            type="button"
            onClick={handleSubmit}
             className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
            >
              <UserPlus className="w-5 h-5"/> S'inscrire
            </button>
          </div>
          <div className="text-center mt-6">
            <p className="text-white">
              Vous avez déjà un compte ? {' '}
              <a href="/login" className="font-bold text-white hover:text-blue-100 underline">Se connecter</a>
            </p>
          </div>
        </div>        
      </div>
      <div className="text-center mt-6">
        <p className="text-white">
          Vous avez déjà un compte ?{' '}
          <a
            href="/login"
            className="font-bold text-white hover:text-blue-100 underline"
          >
            Se connecter
          </a>
        </p>
      </div>
      <p className="text-center text-white text-sm mt-6">
        * Tous les champs son obligatoires
      </p>
    </div>
  );
}

export default Signin;