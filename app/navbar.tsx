"use client";

import Link from "next/link";
import LogoutButton from "./logout/page";
import { useGlobalStore } from "./State/GlobalContext";
import { useMemo } from "react";

const NavbarClient = () => {
  const { state, dispatch } = useGlobalStore();
  const cursor = state.cursor;

  const linkStyle = (isHovered: boolean) => ({
    marginRight: "20px",
    color: isHovered ? "#ffcc66" : "white",
    textDecoration: "none",
    cursor: cursor ?? "default",
    transition: "color 0.3s ease",
  });
  
const links = useMemo(
  () => [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contatti" },
    { href: "/SSG"},
    { href: "/SSR"},
  ],
  [] // ← vuoto = calcolato solo al primo render e poi "cachato"
);


  return (
    <nav
      style={{
        padding: "20px",
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {links.map((link) => {
            const isHovered = state.hoveredId === link.href; // ✅ check hover globale

            return (
              <Link
                key={link.href}
                href={link.href}
                style={linkStyle(isHovered)}
                onMouseEnter={() => {
                  dispatch({ type: "SET_HOVER", payload: link.href });
                  dispatch({ type: "SET_CURSOR", payload: "pointer" });
                }}
                onMouseLeave={() => {
                  dispatch({ type: "CLEAR_HOVER" });
                  dispatch({ type: "SET_CURSOR", payload: "default" });
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default NavbarClient;
