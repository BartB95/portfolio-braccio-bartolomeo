"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { styled } from "@mui/system";
import { useGlobalStore } from "@/app/State/GlobalContext";
import Avatar, { avatarList } from "../Avatar";
import Link from "next/link";
import LogoutButton from "@/app/logout/page";

const Container = styled("div")({
  position: "fixed",
  top: "2%",
  right: "50px",
  transform: "none",
  zIndex: 1000,
  touchAction: "none",
  transition: "all 0.4s ease",
});

const ProfileImageWrapper = styled("div")({
  borderRadius: "50%",
  border: "3px solid #FFD166",
  width: 60,
  height: 60,
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 20px rgba(255,255,255,0.6), 0 6px 12px rgba(0,0,0,0.3)",
  },
});

const Menu = styled("div")({
  position: "absolute",
  top: 70,
  left: "50%",
  transform: "translateX(-50%)",
  background: "#1f2f3a",
  borderRadius: 8,
  boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
  overflowY: "auto", // serve per lo scroll
  maxHeight: 350,
  minWidth: 150,
  zIndex: 1001,

  // 🔹 Scroll invisibile
  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },
  scrollbarWidth: "none", // per Firefox
  msOverflowStyle: "none", // per IE/Edge
});


const MenuItemDiv = styled("div")({
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "0.85rem",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#3e98a2",
  },
});

const SubMenu = styled("div")({
  background: "#176f9eff",
});

// Types
type SubRoute = {
  name: string;
  path: string;
  onClick?: () => void;
};

type MenuItem = {
  title: string;
  subRoutes?: SubRoute[];
};

type MiniWidgetProps = {
  token: string;
};

const MiniWidget: React.FC<MiniWidgetProps> = ({ token }) => {
  const { state, dispatch } = useGlobalStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [showAvatarPopup, setShowAvatarPopup] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [containerPosition, setContainerPosition] = useState<"right" | "left">(
    "left"
  );

  if (!token) return null;

  const isOwner = token === process.env.NEXT_PUBLIC_OWNER_TOKEN;

  const moveLeft = () => setContainerPosition("left");
  const moveRight = () => setContainerPosition("right");

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
    {
      title: "🏢 Carriera",
      subRoutes: [{ name: "🏆 Progressi", path: "/flowChart" }],
    },
    {
      title: "📝 Quiz (facoltativo)",
      subRoutes: [{ name: "🖋️ Fai il Quiz", path: "/quiz" }],
    },
    {
      title: "🔀 Sposta Widget",
      subRoutes: [
        { name: "👈 Sinistra", path: "#left", onClick: moveLeft },
        { name: "👉 Destra", path: "#right", onClick: moveRight },
      ],
    },
  ];

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  const handleSelectAvatar = (src: string) => {
    setAvatar(src);
    localStorage.setItem("avatar", src);
  };

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSubMenu = (title: string) =>
    setOpenSubMenu(openSubMenu === title ? null : title);

  const isHovered = state.hoveredId === "profile";

  return (
    <Container
      style={{
        right: containerPosition === "right" ? "50px" : "auto",
        left: containerPosition === "left" ? "50px" : "auto",
      }}
    >
      <div
        style={{
          position: "relative",
          cursor: state.cursor, // <-- usa lo stato globale
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.3s ease, boxShadow 0.3s ease",
        }}
        onClick={handleToggleMenu}
        onMouseEnter={() => dispatch({ type: "SET_HOVER", payload: "profile" })}
        onMouseLeave={() => dispatch({ type: "CLEAR_HOVER" })}
      >
        <ProfileImageWrapper>
          <Image
            src={avatar || (isOwner ? "/bart.webp" : "/bart.jpg")}
            alt="Avatar"
            width={60}
            height={60}
          />
        </ProfileImageWrapper>

        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: 75,
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
            }}
          >
            Token: {token}
          </div>
        )}
      </div>

      {menuOpen && (
        <Menu>
          {menuItems.map((item) => (
            <div key={item.title}>
              <MenuItemDiv
                onClick={() =>
                  item.subRoutes ? toggleSubMenu(item.title) : null
                }
              >
                {item.title}
              </MenuItemDiv>
              {item.subRoutes && openSubMenu === item.title && (
                <SubMenu>
                  {item.subRoutes.map((sub) =>
                    sub.onClick ? (
                      // Bottone che esegue funzione
                      <MenuItemDiv key={sub.name} onClick={sub.onClick}>
                        {sub.name}
                      </MenuItemDiv>
                    ) : (
                      // Link per navigazione normale
                      <Link
                        key={sub.path}
                        href={sub.path || "#"}
                        style={{ textDecoration: "none", display: "block" }}
                      >
                        <MenuItemDiv>{sub.name}</MenuItemDiv>
                      </Link>
                    )
                  )}
                </SubMenu>
              )}
            </div>
          ))}

          <MenuItemDiv onClick={() => setShowAvatarPopup(true)}>
            👤 Cambia Avatar
          </MenuItemDiv>
          <MenuItemDiv>
            <LogoutButton />
          </MenuItemDiv>
        </Menu>
      )}

      {showAvatarPopup && (
        <Avatar
          avatarList={avatarList}
          onSelect={handleSelectAvatar}
          onClose={() => setShowAvatarPopup(false)}
        />
      )}
    </Container>
  );
};

export default MiniWidget;
