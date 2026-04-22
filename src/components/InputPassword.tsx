import { useState } from "react";


interface InputPasswordProps{

    label: string;
    nama: string;
    error: string;
    register: any;
}

export const InputPassword: React.FC<InputPasswordProps> =({
    label,
    nama,
    error,
    register,
}) => {

    const [show,setShow] = useState<boolean>(false);
    return(
        <div className="flex flex-col gap-1 mb-4">
        <label htmlFor={nama}>{label}</label>
        <div className="relative flex items-center">
            <input 
                type={show ? "text" : "password"} 
                {...register(nama)} 
                placeholder={label}
                className="w-full border p-2 pr-10" 
            />
            
            {/* Tambahkan button */}
            <button 
                type="button"
                onClick={() => setShow(!show)} 
                className="absolute right-2 text-sm text-gray-500"
            >
                {show ? "Hide" : "Show"}
            </button>
        </div>
        
        {error && <p className="text-red-500">{error}</p>}
    </div>
    )
}