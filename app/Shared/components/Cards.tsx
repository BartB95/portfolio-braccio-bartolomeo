"use client";
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
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
    },
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

const handleClick = () => {
    if (link && link !== "#") {
      window.open(link, "_blank"); 
    } else {
      alert("PDF non disponibile"); 
    }
  };

  return (
    <div className={classes.projectCard} onClick={handleClick}>
      <h3 className={classes.cardTitle}>{title}</h3>
      <p className={classes.cardDesc}>{desc}</p>
      {link && <div className={classes.cardLink}>Visualizza</div>}
    </div>
  );
};

export default Card;
