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
        padding: "10px 20px",
        fontSize: 16,
        background: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.08)",
        borderRadius: "20px",
        backdropFilter: "blur(15px)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
        cursor: cursor ?? "default",
        transition: "all 0.3s ease",
        color: "white",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      🔒
    </button>
  );
}
