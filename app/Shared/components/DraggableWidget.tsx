"use client";
import React, { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Draggable from "react-draggable";
import { useGlobalStore } from "@/app/State/GlobalContext";
import Avatar, { avatarList } from "./Avatar";
import Link from "next/link";
import LogoutButton from "@/app/logout/page";

const useStyles = makeStyles(() => ({
  container: {
    position: "fixed",
    top: "40px",
    right: "75px",
    zIndex: 1000,
    touchAction: "none",
  },
  profileImage: {
    borderRadius: "50%",
    border: "3px solid #FFD166",
    width: 60,
    height: 60,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 20px rgba(255,255,255,0.6), 0 6px 12px rgba(0,0,0,0.3)",
    },
    "@media (max-width: 600px)": {
      width: 50,
      height: 50,
    },
  },
  menu: {
    position: "absolute",
    top: "70px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#1f2f3a",
    borderRadius: 8,
    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
    overflowY: "auto",
    maxHeight: "350px",
    minWidth: 180,
    zIndex: 1001,
  },
  menuItem: {
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "0.85rem",
    color: "#fff",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    "&:hover": {
      backgroundColor: "#3e98a2",
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
  subMenu: {
    background: "#176f9eff",
  },
}));

interface MenuItem {
  title: string;
  subRoutes?: { name: string; path: string }[];
}

const menuItems: MenuItem[] = [
  {
    title: "🧭 Navigazione",
    subRoutes: [
      { name: "🏠 Home", path: "/home" },
      { name: "ℹ️ About", path: "/about" },
      { name: "🛠️ Skills", path: "/skills" },
      { name: "📁 Projects", path: "/projects" },
      { name: "✉️ Contact", path: "/contact" },
    ],
  },
];

const MiniDraggableWidget: React.FC = () => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const { state, dispatch } = useGlobalStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [showAvatarPopup, setShowAvatarPopup] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const isHovered = state.hoveredId === "profile";

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
  const isOwner = token === process.env.NEXT_PUBLIC_OWNER_TOKEN;

  React.useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  const handleSelectAvatar = (src: string) => {
    setAvatar(src);
    localStorage.setItem("avatar", src);
  };

  const toggleSubMenu = (title: string) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
  };

  return (
    <>
      <Draggable nodeRef={nodeRef} enableUserSelectHack={false} onStart={() => setIsDragging(true)} onStop={() => setIsDragging(false)}>
        <div ref={nodeRef} className={classes.container}>
          <div
            style={{
              position: "relative",
              cursor: isDragging ? "grabbing" : isHovered ? "pointer" : "grab",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease, boxShadow 0.3s ease",
            }}
            onClick={handleToggleMenu}
            onMouseEnter={() => dispatch({ type: "SET_HOVER", payload: "profile" })}
            onMouseLeave={() => dispatch({ type: "CLEAR_HOVER" })}
          >
            <Image src={avatar || (isOwner ? "/bart.webp" : "/bart.jpg")} alt="Avatar" width={60} height={60} className={classes.profileImage} />

            {isHovered && token && (
              <div
                style={{
                  position: "absolute",
                  top: "75px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#1f2f3a",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                  zIndex: 1002,
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
              >
                Token: {token}
              </div>
            )}
          </div>

          {menuOpen && (
            <div className={classes.menu}>
              {menuItems.map((item) => (
                <div key={item.title}>
                  <div className={classes.menuItem} onClick={() => (item.subRoutes ? toggleSubMenu(item.title) : null)}>
                    {item.title}
                  </div>
                  {item.subRoutes && openSubMenu === item.title && (
                    <div className={classes.subMenu}>
                      {item.subRoutes.map((sub) => (
                        <Link key={sub.path} href={sub.path}>
                          <div className={classes.menuItem}>{sub.name}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Apri popup avatar */}
              <div className={classes.menuItem} onClick={() => setShowAvatarPopup(true)}>
                👤 Cambia Avatar
              </div>
              <div className={classes.menuItem}>
                <LogoutButton />
              </div>
            </div>
          )}
        </div>
      </Draggable>

      {/* Popup Avatar */}
      {showAvatarPopup && <Avatar avatarList={avatarList} onSelect={handleSelectAvatar} onClose={() => setShowAvatarPopup(false)} />}
    </>
  );
};

export default MiniDraggableWidget;
