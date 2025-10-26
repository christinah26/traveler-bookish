import React, { useState } from 'react';

function EmailComponent () {
    const [formData, setFormData] = useState<{ email: string; }>({
                email: '',
            
              });
        
            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            
                });
              };

    return (
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="exemple@email.com"
        />
      </div>
    );
}
 
export default EmailComponent;