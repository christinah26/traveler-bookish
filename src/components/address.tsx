import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

function AddressComponent () {
    const [formData, setFormData] = useState({
        adresse: '',
        
      });
      
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    return (
        <div>
            <label htmlFor="adresse" className="block text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                Adresse *
            </label>
            <input
                type="text"
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="123 Rue de la Paix, Paris"
            />
        </div>
    );
}

export default AddressComponent;