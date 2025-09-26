"use client";

import { useGlobalStore } from "../State/GlobalContext";

export default function LogoutButton() {
  const { state, dispatch } = useGlobalStore();

  const isHovered = state.hoveredId === "logout";
  const cursor = state.cursor;

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "/";
  };

  return (
    <button
      onClick={handleLogout}
       onMouseEnter={() => {
            dispatch({ type: "SET_HOVER", payload: "logout" });
            dispatch({ type: "SET_CURSOR", payload: "pointer" });
          }}
          onMouseLeave={() => {
            dispatch({ type: "CLEAR_HOVER" });
            dispatch({ type: "SET_CURSOR", payload: "default" });
          }}
   style={{
        position: "fixed",          // posizione fissa
        bottom: "20px",             // distanza dal basso
        right: "20px",              // distanza da destra
        padding: "10px 20px",
        fontSize: 16,
       background: isHovered
  ? "rgba(139, 68, 68, 0.84)" // più scuro quando hover
  : "rgba(209, 32, 32, 0.1)",
        borderRadius: "20px",
        backdropFilter: "blur(15px)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
        cursor: cursor ?? "default",
        transition: "all 0.3s ease",
        color: "white",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        zIndex: 1000,              // per essere sopra altri elementi
      }}
    >
      🔒
    </button>
  );
}
