import React, { useState } from 'react';
import { Plane, User, Lock, Eye, EyeOff, LogIn, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Retour from '../components/retour';
import Logo from "../assets/traveler-nobg.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '', // Peut être email ou username
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.identifier || !formData.password) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    console.log('Connexion:', formData);
    
    // futur API ici maybe, idk

    alert('Connexion réussie !');
    
    // Redirection après connexion
    // window.location.href = '/dashboard';
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Fonctionnalité de récupération de mot de passe à implémenter');
    // Redirection vers page de récupération
    // window.location.href = '/forgot-password';
  };

  const handleRetour = () => {
    if (confirm('Voulez-vous vraiment quitter la page de connexion ?')) {
      window.history.back();

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-50 bg-white rounded-full shadow-lg mb-4">
                      <img src={Logo}  />
                    </div>
          <h1 className="text-4xl font-bold text-white mb-2">Connexion</h1>
          <p className="text-blue-50 text-lg">Connectez-vous à votre compte</p>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="space-y-5">
            {/* Nom d'utilisateur ou Email */}
            <div>
              <label htmlFor="identifier" className="block text-sm font-semibold text-gray-700 mb-2">
                <User className="inline w-4 h-4 mr-1" />
                Nom d'utilisateur ou E-mail *
              </label>
              <input
                type="text"
                id="identifier"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="jean_dupont123 ou exemple@email.com"
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                <Lock className="inline w-4 h-4 mr-1" />
                Mot de passe *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Lien mot de passe oublié */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Bouton de connexion */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Retour />

              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
              >
                <LogIn className="w-5 h-5" />
                Se connecter
              </button>

            </div>
          </div>
        </div>

        {/* Lien vers la page d'inscription */}
        <div className="text-center mt-6">
          <p className="text-white">
            Vous n'avez pas de compte ?{' '}
            <a
              href="/signin"
              className="font-bold text-white hover:text-blue-100 underline"
            >
              S'inscrire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}