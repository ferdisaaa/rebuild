import { useState } from 'react'; 

export const Collapse = ({ question, answer }: { question: string; 
answer: string }) => { 
const [isOpen, setIsOpen] = useState(false); 
return ( 
    <div className="border-b border-gray-200"> 
    <button  
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-5 flex justify-between items-center 
text-left hover:text-[#8B2132]" 
    > 
        <span className="font-semibold">{question}</span> 
        <span className={`transform transition-transform ${isOpen ? 
'rotate-180' : ''}`}> 
        ▼ 
        </span> 
    </button> 
    {isOpen && ( 
        <div className="pb-5 text-gray-600 animate-fade-in-down"> 
        {answer} 
        </div> 
    )} 
    </div> 
); 
};