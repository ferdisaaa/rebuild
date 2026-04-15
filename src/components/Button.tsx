interface ButtonProps { 
  label: string; 
  variant?: 'primary' | 'outline'; 
  className?: string; 
} 
 
export const Button = ({ label, variant = 'primary', className }: 
ButtonProps) => { 
  const baseStyle = "px-6 py-3 rounded-full font-bold transition-all duration-300"; 
  const variants = { 
    primary: "bg-#8B2132 text-white hover:bg-#8B2132 shadow-lg", 
    outline: "border-2 border-#8B2132 text-#8B2132 hover:bg-#8B2132" 
  }; 
 
  return ( 
    <button className={`${baseStyle} ${variants[variant]} 
${className}`}> 
      {label} 
    </button> 
  ); 
}; 