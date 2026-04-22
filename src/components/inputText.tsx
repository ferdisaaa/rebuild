import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputTextProps{

    label: string;
    nama: string;
    placeholder? : string;
    type? : string;
    error?: string;
    register: UseFormRegisterReturn;
}

export const InputText: React.FC<InputTextProps> =({
    label,
    placeholder,
    type,
    error,
    register,
}) => {
    return(
<div className="flex flex-col gap-1 mb-4">
    <label className="text-sm font-medium ml-2 text-gray-700">{label}</label>
    <input
        type={type} 
        placeholder={placeholder}
        {...register}
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
    />
    {error && <p className="text-red-500 text-xs ml-2 mt-1">{error}</p>}
</div>

        
    )
}