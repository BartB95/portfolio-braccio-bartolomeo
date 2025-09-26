"use client";

import { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import { useGlobalStore } from "../State/GlobalContext";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);
  const { state, dispatch } = useGlobalStore();
  const cursor = state.cursor;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabContent = [
    {
      label: "Chi sono",
      content: (
        <Box sx={{ lineHeight: 1.8 }}>
          <Typography variant="h5" sx={{ mb: 2, color: "#0b3d91", fontWeight: "bold" }}>
            Chi sono
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Ciao! Mi chiamo <b>Bartolomeo</b>, ho 30 anni e sono un <b>ingegnere informatico</b> appassionato di tecnologia.
          </Typography>

          <Typography variant="h6" sx={{ mb: 1 }}>
            💼 Esperienza professionale
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Lavoro in <b>Betacom</b> da oltre 3 anni, dove ho maturato esperienza su progetti complessi che mi hanno reso completamente autonomo nello sviluppo.
          </Typography>

          <Typography variant="h6" sx={{ mb: 1 }}>
            📚 Formazione
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <li>
              <Typography>
                Accademia intensiva di <b>500 ore su Java</b> (Maggio 2022).
              </Typography>
            </li>
            <li>
              <Typography>
                Corsi di approfondimento su <b>JavaScript, React e Redux</b>.
              </Typography>
            </li>
          </Box>

          <Typography variant="h6" sx={{ mb: 1 }}>
            🚀 Progetti personali
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Attualmente sto sviluppando un <b>progetto personale con Next.js</b> che racconta la mia carriera e le mie competenze. L’app utilizza <b>API interne</b>, <b>rendering ibrido</b> (SSR +
            SSG) e ottimizzazioni come <code>next/image</code> e prefetch automatico.
          </Typography>

          <Typography variant="h6" sx={{ mb: 1 }}>
            🛠️ Altri sviluppi
          </Typography>
          <Typography variant="body1">
            Ho realizzato anche <b>mappe interattive</b>, <b>dashboard</b> e <b>applicazioni real-time</b> per la gestione dei dati.
          </Typography>
        </Box>
      ),
    },
    {
      label: "Next Js",
      content: (
        <Box sx={{ lineHeight: 1.8 }}>
          <Typography variant="h5" sx={{ mb: 2, color: "#0b3d91", fontWeight: "bold" }}>
            Cos’è Next.js
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Next.js è un framework full-stack basato su <b>React</b> che offre routing, API interne e varie modalità di rendering in un unico ambiente.
          </Typography>

          <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
            🔹 Routing
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Usa il <b>file-based routing</b>: la struttura delle cartelle definisce le pagine, con supporto a rotte dinamiche, parametri e API routes per gestire logica backend.
          </Typography>

          <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
            🔹 Rendering
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <li>
              <Typography>SSR – contenuti aggiornati ad ogni richiesta.</Typography>
            </li>
            <li>
              <Typography>SSG – pagine statiche veloci.</Typography>
            </li>
            <li>
              <Typography>ISR – rigenerazione programmata.</Typography>
            </li>
            <li>
              <Typography>CSR – interazioni lato client.</Typography>
            </li>
          </Box>

          <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
            🔹 Ottimizzazioni
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <li>
              <Typography>
                <code>next/image</code> – immagini responsive e lazy loading.
              </Typography>
            </li>
            <li>
              <Typography>
                <code>next/script</code> – caricamento intelligente degli script.
              </Typography>
            </li>
            <li>
              <Typography>Prefetch automatico dei link.</Typography>
            </li>
            <li>
              <Typography>Supporto per CSS Modules, Styled JSX e Tailwind.</Typography>
            </li>
          </Box>

          <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
            🔹 Middleware
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Permettono di intercettare richieste per autenticazione, redirect o localizzazione.
          </Typography>

          <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
            🔹 Deploy
          </Typography>
          <Typography variant="body1">
            Si sviluppa in locale con <code>npm run dev</code> e si distribuisce facilmente, con integrazione nativa su <b>Vercel</b> per build e deploy ottimizzati.
          </Typography>
        </Box>
      ),
    },
    {
      label: "Il mio progetto",
      content: (
        <Box sx={{ lineHeight: 1.8 }}>
          <Typography variant="h5" sx={{ mb: 2, color: "#0b3d91", fontWeight: "bold" }}>
            Il mio Portfolio con React & Next.js
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Ho realizzato un <b>portfolio</b> con <b>React</b> e <b>Next.js</b> per mettere in pratica e dimostrare le mie competenze. Ho sfruttato i <b>middleware</b> di Next.js per proteggere le
            rotte sensibili, come l’autenticazione: una volta ottenuto il token, l’utente può accedere alla sezione <i>secret</i> e navigare nelle aree riservate.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            📌 Struttura del portfolio
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <li>
              <Typography>
                <b>Home</b> – Presentazione personale.
              </Typography>
            </li>
            <li>
              <Typography>
                <b>Certificati</b> – Componente riutilizzabile di card.
              </Typography>
            </li>
            <li>
              <Typography>
                <b>Grafico personale</b> – Distribuzione del tempo tra lavoro, sport e hobby.
              </Typography>
            </li>
            <li>
              <Typography>
                <b>Scopri di più</b> – Sezione in cui racconto chi sono e descrivo il progetto.
              </Typography>
            </li>
            <li>
              <Typography>
                <b>Skill</b> – Mostra le competenze in modo interattivo con un grafico circolare riutilizzabile. Ho aggiunto un campo di ricerca per filtrare le skill, un sistema per aggiungerle o
                rimuoverle dinamicamente tramite <b>API Routes</b>, e un componente di <b>drag & drop</b> per ordinarle a piacimento.
              </Typography>

              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                ⚙️ Funzionalità principali
              </Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                <li>
                  <Typography>
                    <b>Grafico Circolare</b> – Mostra visivamente il livello di ogni competenza.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <b>Filtri e ricerca</b> – Permette di trovare velocemente le skill desiderate.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <b>Gestione dinamica</b> – Aggiunta/rimozione skill lato server.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <b>Drag & Drop</b> – Riordinamento personalizzato delle competenze.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <b>SSR/CSR</b> – Skill iniziali caricate lato server, interattività lato client.
                  </Typography>
                </li>
              </Box>
            </li>
            <li>
              <Typography>
                <b>Progetti personali</b> – Dimostrazione pratica di <b>SSG</b> e<b> SSR</b>. Ho usato <code>page.tsx</code> per rotte statiche e<code> Image</code> per ottimizzare le immagini.
              </Typography>
            </li>
            <li>
              <Typography>
                <b>Logout e Contatti</b> – Gestione autenticazione e sezione per contattarmi facilmente.
              </Typography>
            </li>
          </Box>

          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            🌍 Gestione dello stato globale
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <li>
              <Typography>
                Ho implementato un <b>Global Store</b> con Context API per gestire lo stato comune all’app.
              </Typography>
            </li>
            <li>
              <Typography>
                Ho centralizzato la gestione di <b>hover</b>, <b>cursor</b> e interazioni globali per garantire coerenza nell’esperienza utente.
              </Typography>
            </li>
            <li>
              <Typography>Questo approccio rende l’interfaccia più fluida, migliora l’esperienza dell’utente e mantiene il codice scalabile e pulito.</Typography>
            </li>
          </Box>
        </Box>
      ),
    },
  ];

  return (
<Box
  sx={{
    p: 4,
    cursor: cursor ?? "default",
    backgroundColor: "rgba(212, 185, 185, 0.1)",
    backdropFilter: "blur(3px) saturate(160%)",
    WebkitBackdropFilter: "blur(12px) saturate(160%)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 1.5)",
    borderRadius: "20px",
    animation: "fadeIn 0.6s ease-out forwards",
    "@keyframes fadeIn": {
      "0%": { opacity: 0, transform: "translateY(-20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  }}
>

      <Paper
        elevation={6}
        sx={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Poppins', sans-serif",
          color: "white",
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          background: "rgba(0,0,0,0.1)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 1.5)",
          borderRadius: "12px",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="fullWidth"
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            backgroundColor: "rgba(255,255,255,0.15)",
            "& .MuiTab-root": {
              color: "#F5EEDC",
              fontWeight: "bold",
              fontSize: "1rem", // default
              "@media (max-width:480px)": {
                fontSize: "10px", // ridotto su schermi piccoli
              },
            },
            cursor: cursor ?? "default",
          }}
        >
          {tabContent.map((tab, index) => (
            <Tab key={index} label={tab.label} onMouseEnter={() => dispatch({ type: "SET_CURSOR", payload: "pointer" })} onMouseLeave={() => dispatch({ type: "SET_CURSOR", payload: "default" })} />
          ))}
        </Tabs>

        <Box
          sx={{
            flex: 1,
            p: 4,
            color: "white",
            animation: "fadeIn 0.5s ease",
            overflowY: "auto",
          }}
        >
          {tabContent[activeTab].content}
        </Box>
      </Paper>
    </Box>
  );
}
