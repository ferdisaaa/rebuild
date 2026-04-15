import { Button } from "./Button";

interface SpeakerProps { 
name: string; 
role: string; 
imageUrl: string; 
} 

export const SpeakerCard = ({ name, role, imageUrl }: SpeakerProps) => { 
return ( 
    <div className="bg-white p-6 rounded-2xl border border-gray-100 
    shadow-[0_10px_30px_-15px_rgba(139,33,50,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(139,33,50,0.4)] transition-all duration-300">
    <img  
        src={imageUrl}  
        alt={name}  
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover 
border-4 border-blue-50" 
    /> 
    <h3 className="text-xl font-bold text-[#8B2132]">{name}</h3> 
    <p className="text-grey-600 font-medium text-sm mb-4">{role}</p> 
    <Button label="Lihat Profil" variant="outline" className="text-xs py-2"/> 
    </div> 
); 
}; 