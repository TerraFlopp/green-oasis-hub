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
