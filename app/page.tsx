"use client";

export default function LoginPage() {
  function handleLogin() {
    document.cookie = "token=abc123; path=/";
    window.location.href = "/secret";
  }

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
        <p style={{ fontSize: "1rem", marginBottom: 30, opacity: 0.8 }}>
          Accedi per entrare nell'app sviluppata con Next JS!
        </p>

        <button
          onClick={handleLogin}
          style={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            border: "none",
            padding: "12px 25px",
            fontSize: "1rem",
            color: "white",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(229, 46, 113, 0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 15px rgba(0, 0, 0, 0.2)";
          }}
        >
          🚀 Effettua Login
        </button>
      </div>
    </div>
  );
}
