import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Index = () => {
  useEffect(() => {
    document.title = "AgroTech — Cultivons l'avenir ensemble";
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 font-sans">
      <header className="py-6 sm:py-8 lg:py-10 flex flex-col items-center space-y-2 sm:space-y-3">
        <Logo className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D5016]">AgroTech</h1>
      </header>

      <main className="w-full max-w-5xl">
        <div className="bg-[#E2E8D4] rounded-3xl sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden shadow-sm border border-white/20">
          <Link 
            to="/login" 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:left-8 md:right-auto bg-[#2D5016] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition z-20"
          >
            Connexion
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-10 md:mt-10">
            <div className="flex-1 space-y-4 sm:space-y-5 lg:space-y-6 text-center md:text-left w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2D5016]">
                Ensemble, <span className="text-[#D97706]">faisons pousser</span> le futur 🌱
              </h2>
              <p className="text-[#4A5D44] text-base sm:text-lg max-w-md mx-auto md:mx-0">
                AgroTech réinvente l'agriculture urbaine communautaire avec des solutions hydroponiques intelligentes.
              </p>
              <button className="bg-[#86C494] text-[#2D5016] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:scale-105 transition shadow-md text-sm sm:text-base">
                Découvrir nos solutions
              </button>
            </div>

            <div className="flex-1 w-full h-56 sm:h-72 md:h-80 lg:h-96 rounded-2xl sm:rounded-[30px] overflow-hidden shadow-xl border-2 sm:border-4 border-white/50">
              <img 
                src="/serre.jpg" 
                className="w-full h-full object-cover" 
                alt="Serre hydroponique moderne" 
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-6 sm:py-8 text-[#4A5D44]/60 text-xs sm:text-sm text-center px-4">
        © 2026 AgroTech — Cultivons l'avenir ensemble.
      </footer>
    </div>
  );
};

export default Index;
