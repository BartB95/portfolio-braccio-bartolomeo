"use client";

import { useGlobalStore } from "../State/GlobalContext";

export default function LogoutButton() {
  const { state, dispatch } = useGlobalStore();

  const isHovered = state.hoveredId === "logout";
  const cursor = state.cursor;

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.removeItem("avatar");
    window.location.href = "/";
  };

  return (
    <div
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
        cursor: cursor ?? "default",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      🚪 Esci
    </div>
  );
}
