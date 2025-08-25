"use client";

import Link from "next/link";
import LogoutButton from "./logout/page";
import { useState } from "react";
import { title } from "process";

const NavbarClient = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const linkStyle = (isHovered: boolean) => ({
    marginRight: "20px",
    color: isHovered ? "#ffcc66" : "white",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
  });

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
          {[
            { href: "/home", label: "Home" },
            { href: "/about", label: "About Me" },
            { href: "/skills", label: "Skills" },
            { href: "/projects", label: "Projects" },
            { href: "/SSG", label: "SSG" },
            { href: "/SSR", label: "SSR" },
            { href: "/contact", label: "Contatti" },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={linkStyle(hovered === link.href)} onMouseEnter={() => setHovered(link.href)} onMouseLeave={() => setHovered(null)}>
              {link.label}
            </Link>
          ))}
        </div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default NavbarClient;
