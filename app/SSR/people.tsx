"use client";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    flex: "1 1 calc(33% - 20px)",
    background: "linear-gradient(135deg, rgba(91, 91, 203, 0.85), rgba(36, 145, 89, 0.85))",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
    padding: "15px",
    borderRadius: "8px",
    color: "white",
    minWidth: "250px",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.2)",
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
    animation: "fadeIn 1s ease-in-out",
  },
  title: {
    marginBottom: 20,
    background: "linear-gradient(135deg, rgba(200, 80, 80, 0.85), rgba(180, 60, 60, 0.85))",
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

const PeopleSSR = ({ people }: IProps) => {
  const classes = useStyles();
  return (
    <>
        <h1>👤 Lista Persone (SSR)</h1>

      <section className={classes.title}>
        <h2>📖 Cos'è SSR?</h2>
        <p>
          Questa pagina utilizza <strong>Server-Side Rendering</strong> di Next.js. Significa che <strong>ogni volta</strong> che un utente la richiede, il server recupera i dati in tempo reale e
          genera la pagina.
        </p>
        <p>
          <strong>Vantaggio:</strong> i dati sono sempre aggiornati.
          <br />
          <strong>Svantaggio:</strong> tempi di risposta leggermente più lenti rispetto a SSG, perché la pagina deve essere generata per ogni richiesta.
        </p>
      </section>
      <div className={classes.section}>
        {people.map((person) => (
          <section key={person.email} className={classes.button}>
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
        ))}
      </div>
    </>
  );
};
export default PeopleSSR;
