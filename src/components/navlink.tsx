import type { ReactNode } from 'react';
import logoInfovest from '../assets/LOGO FULL.png'

// ==========================================
// 1. KOMPONEN NAVLINK (Kode asli milikmu)
// ==========================================
interface NavLinkProps {
  label: string;
  href: string;
  icon?: ReactNode;
  isActive?: boolean;
}

export const NavLink = ({ label, href, icon, isActive = false }: NavLinkProps) => {
  const activeStyle = "text-red-600 bg-red-50 border-b-2 border-red-600";
  const defaultStyle = "text-slate-600 hover:text-red-600 hover:bg-slate-50 border-b-2 border-transparent";

  return (
    <a
      href={href}
      className={`flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${isActive ? activeStyle : defaultStyle}`}
    >
      {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      <span>{label}</span>
    </a>
  );
};

// ==========================================
// 2. TAMBAHAN KOMPONEN NAVBAR
// ==========================================
interface MenuItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

interface NavbarProps {
  items: MenuItem[];
  activeHref: string;
  onNavigate: (href: string) => void;
}

export const Navbar = ({ items, activeHref, onNavigate }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center md:justify-between items-center py-3">
          
          {/* Logo Brand (Tampil di layar medium ke atas) */}
          <div className="flex items-center">
            <img
              src={logoInfovest}
              alt='Logo INVOFEST'
              className='h-10 1-auto object-contain'
            />
          </div>

          {/* Navigasi Menu */}
          <ul className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {items.map((item) => (
              <li 
                key={item.href} 
                onClick={(e) => {
                  e.preventDefault(); // Mencegah default jump link HTML
                  onNavigate(item.href);
                }}
              >
                <NavLink
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  isActive={activeHref === item.href} // Logika penentu status aktif
                />
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </nav>
  );
};