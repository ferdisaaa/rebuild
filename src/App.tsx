import { useState } from 'react'; 
import { Users, House, Trophy, Book } from 'lucide-react'; // Hapus 'Info'
import {Navbar} from './components/navlink'; // Ubah menjadi default import (tanpa kurung kurawal)
import { SpeakerCard } from './components/SpeakerCard'; 
import { Collapse } from './components/Collapse'; 
import { Button } from './components/Button';
import logoinvovestkecil from './assets/LOGO 1.png';
import logoMaskot from './assets/maskot 1.png'
import imgelonmusk from './assets/elon-musk-.jpg'
import imgdonald from './assets/donald-trump.jpg'
import imglary from './assets/larry-page.jpeg'


// 1. Data Mocking (Simulasi data dari API/Database) 
const menuItems = [ 
  { label: 'Beranda', href: '#home', icon: <House size={18} color='#8B2132' /> }, 
  { label: 'Competition', href: '#schedule', icon: <Trophy size={18} /> }, 
  { label: 'Seminar', href: '#speakers', icon: <Users size={18} /> }, 
  { label: 'Workshop', href: '#faq', icon: <Book size={18} /> }, 
]; 
 
const speakers = [ 
  { id: 1, name: "Donal Trump", role: "President of the United States", img: imgdonald }, 
  { id: 2, name: "Elon musk", role: "Businessman and entrepreneur", img: imgelonmusk }, 
  { id: 3, name: "Larry page", role: "American businessman", img: imglary }, 
]; 
 
export default function InvofestLanding() { 
  const [activeMenu, setActiveMenu] = useState('#home'); 
 
  return ( 
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans"> 
        
      {/* HEADER & NAVIGATION */} 
      <Navbar  
        items={menuItems}  
        activeHref={activeMenu}  
        onNavigate={(href: string) => setActiveMenu(href)} 
      /> 
 
      {/* HERO SECTION */}
<section id="home" className="pt-32 pb-20 bg-white overflow-hidden"> 
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10"> 
    
    {/* KONTEN KIRI */}
    <div className="flex-1 text-left">
      <img
              src={logoinvovestkecil}
              alt='Logo INVOFEST'
              className='h-20 w-auto'
            />
      
      <p className="max-w-xl text-slate-600 text-lg leading-relaxed mb-8"> 
        Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan 
        untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. 
        Dengan mengusung tema <span className="font-bold text-slate-800">"Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow"</span>. 
      </p> 

      <div className="flex gap-4"> 
        {/* Button primer warna Maroon */}
        <Button 
          label="INFO SELENGKAPNYA" 
          className="bg-[#8B2132] hover:bg-[#6d1a27] text-white px-6 py-3 rounded-md font-bold transition-all" 
        /> 
        {/* Button outline */}
        <Button 
          label="HUBUNGI PANITIA" 
          variant="outline" 
          className="border-[#8B2132] text-[#8B2132] hover:bg-pink-50 px-6 py-3 rounded-md font-bold transition-all" 
        /> 
      </div> 
    </div>

    {/* KONTEN KANAN (MASKOT) */}
    <div className="flex-1 flex justify-end relative">
      {/* Efek glow di belakang robot (Opsional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 blur-[100px] opacity-50 rounded-full"></div>
      
      <img 
        src={logoMaskot} 
        alt="Invofest Mascot" 
        className="w-full max-w-[500px] relative z-10 animate-pulse-slow"
        style={{ animation: 'bounce 3s infinite' }}
      />
    </div>

  </div> 
</section> 
 
      {/* SPEAKERS SECTION */} 
      <section id="speakers" className="py-20 container mx-auto px-4"> 
        <div className="flex justify-between items-end mb-12"> 
          <div> 
            <h2 className="text-3xl font-bold">Narasumber Ahli</h2> 
            <p className="text-slate-500">Belajar langsung dari para praktisi industri IT.</p> 
          </div> 
          <Button label="Lihat Semua" variant="outline" className="hidden md:block" /> 
        </div> 
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {speakers.map(s => ( 
            <SpeakerCard  
              key={s.id}  
              name={s.name}  
              role={s.role}  
              imageUrl={s.img}  
            /> 
          ))} 
        </div> 
      </section> 
 
      {/* FAQ SECTION */} 
      <section id="faq" className="py-20 bg-white"> 
        <div className="max-w-3xl mx-auto px-4"> 
          <h2 className="text-3xl font-bold mb-10 text-center">Informasi Penting</h2> 
          <div className="space-y-2"> 
            <Collapse  
              question="Apa itu Invofest?"  
              answer="festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri."  
            /> 
            <Collapse  
              question="Berapa regist ikut Invovest?"  
              answer="100k"  
            /> 
          </div> 
        </div> 
      </section> 
 
      {/* FOOTER */} 
      <footer className="bg-[#8B2132] text-white py-12 text-center"> 
        <p className="opacity-60">(c) 2027 Invovest.com</p> 
      </footer> 
 
    </div> 
  ); 
}