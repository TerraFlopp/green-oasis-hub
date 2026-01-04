{ useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
const Index = () => {
  // Cette partie change le nom de l'onglet dès que la page s'affiche
  useEffect(() => {
    document.title = "AgroTech — Cultivons l'avenir ensemble";
  }, []);
  return (
    <div className="min-h-screen bg-[
#F5F0E8] flex flex-col items-center p-6 font-sans">
      <header className="py-10 flex flex-col items-center space-y-3">
        {/* J'ai augmenté la taille du logo ici aussi (w-32 h-32) */}
        <Logo className="w-32 h-32" />
        <h1 className="text-4xl font-bold text-[
#2D5016]">AgroTech</h1>
      </header>
      <main className="w-full max-w-5xl">
        <div className="bg-[
#E2E8D4] rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-sm border border-white/20">
          <Link 
            to="/login" 
            className="absolute top-8 left-8 bg-[
#2D5016] text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition z-20"
          >
            Connexion
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-5xl font-bold leading-tight text-[
#2D5016]">
                Ensemble, <span className="text-[
#D97706]">faisons pousser</span> le futur 🌱
              </h2>
              <p className="text-[
#4A5D44] text-lg max-w-sm mx-auto md:mx-0">
                AgroTech réinvente l'agriculture urbaine communautaire avec des solutions hydroponiques intelligentes.
              </p>
              <button className="bg-[
#86C494] text-[
#2D5016] px-8 py-4 rounded-full font-bold hover:scale-105 transition shadow-md">
                Découvrir nos solutions
              </button>
            </div>
            <div className="flex-1 w-full h-64 md:h-96 rounded-[30px] overflow-hidden shadow-xl border-4 border-white/50">
              <img 
                src="/serre.jpg" 
                className="w-full h-full object-cover" 
                alt="Serre" 
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto py-8 text-[
#4A5D44]/60 text-sm">© 2026 AgroTech — Cultivons l'avenir ensemble.</footer>
    </div>
  );
};
export default Index;
