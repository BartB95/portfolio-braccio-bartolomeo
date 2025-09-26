"use client";

import { makeStyles } from "@mui/styles";
import { useGlobalStore } from "../State/GlobalContext";


const useStyles = makeStyles({
  button: {
    flex: "1 1 calc(33% - 20px)",
    background: "linear-gradient(135deg, rgba(91, 91, 203, 0.85), rgba(36, 145, 89, 0.85))",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
    padding: "15px",
    borderRadius: "8px",
    color: "white",
    minWidth: "250px",
    "&:active": {
      transform: "scale(0.95)",
    },
    animation: "fadeIn 1s ease-in-out",
  },
  hovered: {
    background: "rgba(255, 255, 255, 0.2)",
    transform: "scale(1.05)",
  },
  title: {
    marginBottom: 20,
    background: "linear-gradient(135deg, rgba(149, 146, 62, 0.85), rgba(36, 145, 89, 0.85))",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
    padding: "15px",
    borderRadius: "8px",
    color: "white",
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
});

type IProps = {
  people: Person[];
};

const PeopleList = ({ people }: IProps) => {
  const classes = useStyles();
  const { state, dispatch } = useGlobalStore();

  return (
    <>
      <h1>👤 Lista Persone (SSG)</h1>
      <section className={classes.title}>
        <h2>📖 Cos'è SSG + ISR?</h2>
        <p>
          Questa pagina utilizza <strong>Static Site Generation (SSG)</strong>. In pratica, l'HTML viene generato una sola volta al momento della build del progetto e salvato come file statico.
        </p>
        <p>
          Grazie a <code>next: {"{ revalidate: 60 }"}</code>, stiamo usando l'<strong>Incremental Static Regeneration (ISR)</strong>: la pagina viene rigenerata **automaticamente ogni 60 secondi**
          senza dover rifare la build. Quindi, in pratica, stiamo già combinando SSG con ISR.
        </p>
        <p>Non serve fare un esempio separato di ISR, perché qualsiasi pagina SSG con `revalidate` diventa di fatto ISR.</p>
      </section>

      {/* Lista persone */}
      <div className={classes.section}>
        {people.map((person) => {
          const isHovered = state.hoveredId === person.email;
          return (
            <section
              key={person.email}
              className={`${classes.button} ${isHovered ? classes.hovered : ""}`}
              onMouseEnter={() => dispatch({ type: "SET_HOVER", payload: person.email })}
              onMouseLeave={() => dispatch({ type: "CLEAR_HOVER" })}
            >
              <h3>
                {person.firstname} {person.lastname} ({person.gender})
              </h3>
              <p>📅 {person.birthday}</p>
              <p>📧 {person.email}</p>
              <p>📱 {person.phone}</p>
              <p>
                🏠 {person.address.street}, {person.address.city} ({person.address.country})
              </p>
              <p>
                🌐{" "}
                <a href={person.website} style={{ color: "#ffdf80" }}>
                  {person.website}
                </a>
              </p>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default PeopleList;
