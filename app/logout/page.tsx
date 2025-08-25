"use client";

import { useState } from "react";

export default function LogoutButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleLogout = () => {
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "/";
  };

  return (
    <button
      onClick={handleLogout}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={{
        padding: "10px 20px",
        fontSize: 16,
        background: isHovered
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(255, 255, 255, 0.08)",
        borderRadius: "20px",
        backdropFilter: "blur(15px)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        color: "white",
        transform: isActive
          ? "scale(0.95)"
          : isHovered
          ? "scale(1.05)"
          : "scale(1)",
      }}
    >
      🔒
    </button>
  );
}
