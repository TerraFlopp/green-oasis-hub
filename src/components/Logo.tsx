import React from "react";
import { Leaf } from "lucide-react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo-agrotech.png" 
        alt="AgroTech Logo" 
        className="h-10 w-auto object-contain"
        onError={(e) => {
          // Fallback au cas où l'image ne charge pas
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg></div>');
        }}
      />
      <span className="font-bold text-xl tracking-tight text-primary">AgroTech</span>
    </div>
  );
};

export default Logo;
