import RegisterForm from "./RegisterForm";
import MaskotImg from "../assets/maskot.png"

export default function RegisterPage() {
return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      {/* Container Putih Besar */}
    <div className="flex flex-col md:flex-row items-center gap-20 bg-white p-10 rounded-2xl shadow-xl max-w-5xl w-full">
        
        {/* Sisi Kiri: Welcome & Maskot */}
        <div className="flex flex-col items-center flex-1">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-6">Selamat Datang</h1>
        <img 
            src={MaskotImg}
            alt="Maskot" 
            className="w-[350px] h-auto object-contain block" 
    style={{ minWidth: '20px', minHeight: '20px' }}/>
        </div>

        {/* Sisi Kanan: */}
        <div className="flex-1 w-full">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <RegisterForm />
        </div>

    </div>
    </div>
);
}