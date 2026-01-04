import { useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    document.title = "AgroTech — Cultivons l'avenir ensemble";
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center px-4 sm:px-6 font-sans">
      
      {/* HEADER (logo retiré) */}
      <header className="py-8 sm:py-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2D5016]">
          AgroTech
        </h1>
      </header>

      {/* MAIN */}
      <main className="w-full max-w-6xl">
        <div className="bg-[#E2E8D4] rounded-3xl sm:rounded-[40px] p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-sm border border-white/20">
          
          {/* LOGIN */}
          <Link
            to="/login"
            className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-[#2D5016] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition z-20"
          >
            Connexion
          </Link>

          {/* CONTENT */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 mt-12 md:mt-10">
            
            {/* TEXT */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#2D5016]">
                Ensemble,{" "}
                <span className="text-[#D97706]">faisons pousser</span>{" "}
                le futur 🌱
              </h2>

              <p className="text-[#4A5D44] text-base sm:text-lg max-w-md mx-auto md:mx-0">
                AgroTech réinvente l'agriculture urbaine communautaire avec des solutions hydroponiques intelligentes.
              </p>

              <button className="bg-[#86C494] text-[#2D5016] px-7 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:scale-105 transition shadow-md">
                Découvrir nos solutions
              </button>
            </div>

            {/* IMAGE */}
            <div className="flex-1 w-full h-56 sm:h-72 md:h-96 rounded-2xl sm:rounded-[30px] overflow-hidden shadow-xl border-4 border-white/50">
              <img
                src="/serre.ppg"
                className="w-full h-full object-cover"
                alt="Serre hydroponique"
              />
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-auto py-6 text-[#4A5D44]/60 text-xs sm:text-sm text-center">
        © 2026 AgroTech — Cultivons l'avenir ensemble.
      </footer>
    </div>
  );
};

export default Index;
