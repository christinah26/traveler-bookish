import React, { useState } from 'react';

function TelephoneComponent () {
    const [formData, setFormData] = useState<{telephone: string }>({
        telephone: '',

        });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });
    };

    return (
        <div>
            <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                Téléphone *
            </label>
            <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="+261 XX XX XXX XX"
            />
        </div>
    );
}

export default TelephoneComponent;