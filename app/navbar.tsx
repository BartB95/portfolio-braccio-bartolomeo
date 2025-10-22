"use client";

import Link from "next/link";
import React, { useMemo, useState, useEffect } from "react";
import { useGlobalStore } from "./State/GlobalContext";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavbarProps {
  token?: string;
}

const NavbarClient: React.FC<NavbarProps> = ({ token }) => {
  const { state, dispatch } = useGlobalStore();
  const cursor = state.cursor;
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Controllo visibilità
  if (!token || pathname === "/") return null;

  // 🔹 Detect viewport
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = useMemo(
    () => [
      { href: "/secret", label: "🏠 Home" },
      { href: "/home", label: "💼 Portfolio" },
      { href: "/about", label: "👨‍💻 About" },
      { href: "/skills", label: "🛠️ Skills" },
      { href: "/projects", label: "📁 Projects" },
      { href: "/contact", label: "✉️ Contatti" },
    ],
    []
  );

  const linkStyle = (isHovered: boolean) => ({
    color: isHovered ? "#FFD166" : "#FFFFFF",
    textDecoration: "none",
    fontWeight: 500,
    letterSpacing: "0.5px",
    fontSize: "1rem",
    cursor: cursor ?? "default",
    transition: "color 0.3s ease, transform 0.2s ease",
    padding: "8px 12px",
    borderRadius: "8px",
    ...(isHovered && {
      transform: "translateY(-2px)",
      backgroundColor: "rgba(255, 209, 102, 0.1)",
    }),
  });

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #1d2b36, #2e4a62)",
        padding: "12px 2%",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 999,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {/* LOGO */}
      <Link
        href="/secret"
        style={{
          color: "#FFD166",
          fontSize: "1rem",
          fontWeight: 700,
          textDecoration: "none",
          letterSpacing: "1px",
          display: "flex",
          justifyContent: "space-between",
        }}
        aria-label="Homepage"
      >
        <Image
          src="/icons8-homeadvisor.svg"
          alt="Logo"
          width={40}
          height={40}
        />
      </Link>

      {/* LINKS o HAMBURGER */}
      {isMobile ? (
        <div>
          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#FFFFFF",
              fontSize: "1.5rem",
            }}
            aria-label="Menu"
          >
            ☰
          </button>

          {/* Menu mobile */}
          {menuOpen && (
            <div
              style={{
                position: "absolute",
                top: "60px",
                right: "0px",
                background: "rgba(29,43,54,0.95)",
                padding: "12px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                zIndex: 1000,
              }}
            >
              {links.map((link) => {
                const isHovered = state.hoveredId === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={linkStyle(isHovered)}
                    onClick={() => setMenuOpen(false)}
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
          )}
        </div>
      ) : (
        // Desktop links
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {links.map((link) => {
            const isHovered = state.hoveredId === link.href;
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
      )}
    </nav>
  );
};

export default NavbarClient;
