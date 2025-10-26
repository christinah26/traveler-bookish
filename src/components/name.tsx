import React, { useState } from 'react';

function NameComponent () {
    const [formData, setFormData] = useState<{ nom: string; prenom: string }>({
            nom: '',
            prenom: '',
        
          });
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
        
            });
          };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Votre prénom"
                />
            </div>
        </div>
    );
}

export default NameComponent;