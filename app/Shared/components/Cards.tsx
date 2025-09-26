"use client";

import { useGlobalStore } from "@/app/State/GlobalContext";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  projectCard: {
    background: "linear-gradient(135deg, #3A3F68, #292B4A)",
    padding: "15px",
    borderRadius: "8px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  hovered: {
    transform: "translateY(-5px) scale(1.05)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: "8px",
    fontSize: "1rem",
    color: "#FFD166",
  },
  cardDesc: {
    fontSize: "0.85rem",
    color: "#DADADA",
    marginBottom: "12px",
    flexGrow: 1,
  },
  cardLink: {
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
  },
});

type ProjectCardProps = {
  title: string;
  desc: string;
  link?: string;
};

const Card = ({ title, desc, link }: ProjectCardProps) => {
  const classes = useStyles();
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
    <div
      className={`${classes.projectCard} ${isHovered ? classes.hovered : ""}`}
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
      <h3 className={classes.cardTitle}>{title}</h3>
      <p className={classes.cardDesc}>{desc}</p>
      {link && <div className={classes.cardLink}>Visualizza</div>}
    </div>
  );
};

export default Card;
