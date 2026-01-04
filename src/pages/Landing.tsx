import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      background: "linear-gradient(180deg, #DCD7C9 0%, #E9E6DF 100%)",
      color: "#2F6D46",
      minHeight: "100vh",
      width: "100%",
      fontFamily: "'Poppins', sans-serif",
      overflowX: "hidden",
      position: "relative",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "25px 80px",
    },
    logo: {
      height: "110px",
    },
    loginBtn: {
      background: "#2F6D46",
      color: "#E9E6DF",
      border: "none",
      padding: "10px 25px",
      borderRadius: "25px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background 0.3s",
    },
    main: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "40px 80px 0",
      height: "calc(100vh - 160px)",
    },
    textContent: {
      maxWidth: "600px",
      marginTop: "60px",
    },
    h1: {
      fontSize: "3rem",
      color: "#2F6D46",
      marginBottom: "20px",
      lineHeight: 1.2,
    },
    span: {
      color: "#E67E22",
    },
    p: {
      fontSize: "1.1rem",
      marginBottom: "30px",
      color: "#3a3a3a",
    },
    ctaBtn: {
      background: "#88C999",
      color: "#E9E6DF",
      padding: "14px 35px",
      border: "none",
      borderRadius: "30px",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "transform 0.2s, background 0.3s",
    },
    imageContent: {
      position: "relative",
      width: "680px",
      height: "470px",
      borderRadius: "40px",
      overflow: "hidden",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      bottom: "20px",
    },
    footer: {
      position: "absolute",
      bottom: "20px",
      width: "100%",
      textAlign: "center",
      color: "#444",
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button 
          style={styles.loginBtn} 
          onClick={() => navigate("/login")}
          onMouseOver={(e) => (e.currentTarget.style.background = "#88C999")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#2F6D46")}
        >
          Connexion
        </button>
        <img src="/placeholder.svg" alt="Logo AgroTech" style={styles.logo} />
      </header>

      <main style={styles.main}>
        <div style={styles.textContent}>
          <h1 style={styles.h1}>
            Ensemble, <span style={styles.span}>faisons pousser</span> le monde de demain 🌱
          </h1>
          <p style={styles.p}>
            AgroTech réinvente l’agriculture urbaine grâce à des serres hydroponiques innovantes installées au cœur de la ville. 
            Rejoignez un mouvement qui fait germer un avenir plus vert, plus sain et plus durable.
          </p>
          <button style={styles.ctaBtn}>Découvrir nos solutions</button>
        </div>

        <div style={styles.imageContent}>
          <img 
            src="/placeholder.svg" 
            alt="Serre hydroponique moderne" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
        </div>
      </main>

      <footer style={styles.footer}>
        © 2025 AgroTech — Cultivons l'avenir ensemble.
      </footer>
    </div>
  );
};

export default Landing;
