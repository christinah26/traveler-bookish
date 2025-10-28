import React from 'react'

interface FieldProps {
    label: string;
    icon: React.ElementType;
    type?: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string;

}

function Field ({label, icon : Icon, type="text", ...props} : FieldProps) {
    return (
        <div>
            <label
            htmlFor={props.id}
            className="block text-sm font-semibold text-gray-700 mb-2"
            >
                {Icon && <Icon className="inline w-4 h-4 mr-1" />}
                {label} *
            </label>

            <input
            type={type}
            {...props}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />

        </div>
    );
}

export default Field;