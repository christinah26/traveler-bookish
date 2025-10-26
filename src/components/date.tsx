import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

function DateComponent() {

    const [formData, setFormData] = useState<{ dateDebut: string; dateFin: string }>({
        dateDebut: '',
        dateFin: ''
    
      });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
    
        });
      };

    return (
        <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                Période de séjour
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dateDebut" className="block text-sm font-semibold text-gray-700 mb-2">
                    Date de début *
                  </label>
                  <input
                    type="date"
                    id="dateDebut"
                    name="dateDebut"
                    value={formData.dateDebut}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white"
                  />

                </div>

                <div>

                  <label htmlFor="dateFin" className="block text-sm font-semibold text-gray-700 mb-2">
                    Date de fin *
                  </label>
                  <input
                    type="date"
                    id="dateFin"
                    name="dateFin"
                    value={formData.dateFin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white"
                  />

                </div>

              </div>

            </div>

    );

}
export default DateComponent;