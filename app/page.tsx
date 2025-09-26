"use client";

import { useGlobalStore } from "./State/GlobalContext";

export default function LoginPage() {
  const { state, dispatch } = useGlobalStore();

  function handleLogin() {
    document.cookie = "token=abc123; path=/";
    window.location.href = "/secret";
  }

  const isHovered = state.hoveredId === "authentication"; // id univoco per il bottone
  const cursor = state.cursor;
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px)",
          textAlign: "center",
          color: "white",
          maxWidth: 350,
          width: "100%",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: 10 }}>✨ Benvenuto ✨</h1>

        <p style={{ fontSize: "1rem", marginBottom: 15, opacity: 0.8 }}>Accedi per ottenere un token di sicurezza che ti permetterà di accedere alle pagine protette dell’app.</p>

        <p style={{ fontSize: "0.85rem", marginBottom: 30, opacity: 0.6 }}>🔒 Il token viene salvato come cookie e garantisce accesso sicuro e autenticato alle funzionalità riservate.</p>

        <button
          onClick={handleLogin}
          onMouseEnter={() => {
            dispatch({ type: "SET_HOVER", payload: "authentication" });
            dispatch({ type: "SET_CURSOR", payload: "pointer" });
          }}
          onMouseLeave={() => {
            dispatch({ type: "CLEAR_HOVER" });
            dispatch({ type: "SET_CURSOR", payload: "default" });
          }}
          style={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            border: "none",
            padding: "12px 25px",
            fontSize: "1rem",
            color: "white",
            borderRadius: "30px",
            cursor: cursor ?? "default",
            boxShadow: isHovered ? "0 6px 20px rgba(229, 46, 113, 0.5)" : "0 4px 15px rgba(0, 0, 0, 0.2)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
        >
          🚀 Accedi in sicurezza
        </button>
      </div>
    </div>
  );
}
