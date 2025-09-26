"use client";

import { useGlobalStore } from "@/app/State/GlobalContext";
import { styled } from "@mui/material";

type ProjectCardProps = {
  title: string;
  desc: string;
  link?: string;
};

const ProjectCard = styled("div")<{ hovered?: boolean }>(({ hovered }) => ({
  background: "linear-gradient(135deg, #3A3F68, #292B4A)",
  padding: "15px",
  borderRadius: "8px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.4)" : "0 4px 16px rgba(0,0,0,0.3)",
  transform: hovered ? "translateY(-5px) scale(1.05)" : "none",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
}));

const CardTitle = styled("h3")({
  fontWeight: "bold",
  marginBottom: "8px",
  fontSize: "1rem",
  color: "#FFD166",
});

const CardDesc = styled("p")({
  fontSize: "0.85rem",
  color: "#DADADA",
  marginBottom: "12px",
  flexGrow: 1,
});

const CardLink = styled("div")({
  textDecoration: "none",
  color: "#fff",
  fontWeight: "bold",
  padding: "6px 10px",
  borderRadius: "8px",
  background: "linear-gradient(90deg, #6A82FB, #FC5C7D)",
  textAlign: "center",
  fontSize: "0.8rem",
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 0.85,
  },
});

const Card = ({ title, desc, link }: ProjectCardProps) => {
  const { state, dispatch } = useGlobalStore();
  const isHovered = state.hoveredId === title;
  const cursor = state.cursor;

  const handleClick = () => {
    if (link && link !== "#") {
      window.open(link, "_blank");
    } else {
      alert("PDF non disponibile");
    }
  };

  return (
    <ProjectCard
      hovered={isHovered}
      style={{ cursor: cursor ?? "default" }}
      onMouseEnter={() => {
        dispatch({ type: "SET_HOVER", payload: title });
        dispatch({ type: "SET_CURSOR", payload: "pointer" });
      }}
      onMouseLeave={() => {
        dispatch({ type: "CLEAR_HOVER" });
        dispatch({ type: "SET_CURSOR", payload: "default" });
      }}
      onClick={handleClick}
    >
      <CardTitle>{title}</CardTitle>
      <CardDesc>{desc}</CardDesc>
      {link && <CardLink>Visualizza</CardLink>}
    </ProjectCard>
  );
};

export default Card;
