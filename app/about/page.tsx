"use client";

import { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabContent = [
    {
      label: "Chi sono",
      content: (
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          Ciao! Mi chiamo <strong>Bartolomeo</strong>, ho 30 anni e sono un <strong>ingegnere informatico</strong> appassionato di tecnologia. Lavoro in <strong>Betacom</strong> da oltre 3 anni, dove
          ho maturato esperienza su progetti complessi che mi hanno reso completamente autonomo nello sviluppo. Ho frequentato un’accademia di <strong>500 ore su Java</strong> nel maggio 2022, oltre a
          corsi su <strong>JavaScript, React e Redux</strong>. Attualmente sto realizzando in autonomia un progetto personale con <strong>Next.js</strong>. Sto sviluppando un progetto personale con{" "}
          <strong>Next.js</strong> che racconta la mia carriera e le mie competenze. Utilizza API interne, rendering ibrido e ottimizzazioni come <code>next/image</code> e prefetch automatico. Ho
          realizzato anche mappe interattive, dashboard e applicazioni per la gestione dati in real-time.
        </Typography>
      ),
    },
    {
      label: "Next Js",
      content: (
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          Next.js è un framework full-stack basato su React che offre routing, API interne e varie modalità di rendering in un unico ambiente. Usa il file-based routing: la struttura delle cartelle
          definisce le pagine, con supporto a rotte dinamiche, parametri e API routes per gestire logica backend direttamente nell’app. Il rendering è flessibile: possiamo fare SSR per contenuti
          aggiornati ad ogni richiesta, SSG per pagine statiche veloci, ISR per rigenerazione programmata e CSR per interazioni lato client. Con l’App Router introdotto in Next 13 arrivano i Server
          Components, layout annidati, streaming e gestione avanzata di loading ed errori.
          <br />
          <br />
          Next.js integra ottimizzazioni pronte: next/image per immagini responsive e lazy loading, next/script per caricamento intelligente degli script, prefetch automatico dei link, e supporto
          immediato per CSS Modules, Styled JSX, CSS-in-JS o framework come Tailwind. I Middleware permettono di intercettare richieste per autenticazione, redirect o localizzazione.
          <br />
          <br />
          Si sviluppa facilmente in locale con <code>npm run dev</code> e si distribuisce ovunque, con integrazione nativa su Vercel per build e deploy ottimizzati. In sintesi, Next.js unisce
          semplicità e potenza: interfaccia React, logica server, ottimizzazione e SEO in un unico flusso, senza configurazioni complesse.
        </Typography>
      ),
    },
    {
      label: "Il mio progetto",
      content: (
        <Box sx={{ lineHeight: 1.8 }}>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Ho realizzato un portfolio con <b>React</b> e <b>Next.js</b> per mettere in pratica e dimostrare le mie competenze. Ho sfruttato i <b>middleware</b> di Next.js per proteggere le rotte
            sensibili, come l’autenticazione: una volta ottenuto il token, l’utente può accedere alla sezione <i>secret</i> e navigare nelle aree riservate.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            Struttura del portfolio
          </Typography>

          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>
              <Typography variant="body1">
                <b>Home</b> – Presentazione personale.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Certificati</b> – Componente riutilizzabile di card.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Grafico personale</b> – Distribuzione del tempo tra lavoro, sport e hobby.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Scopri di più</b> – Sezione in cui racconto chi sono e descrivo il progetto.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Skill</b> – Mostra le mie competenze in modo interattivo. Ho realizzato un grafico circolare riutilizzabile con <b>React</b> e <b>Next.js</b> per visualizzare il livello di
                conoscenza di ciascuna skill. Ho integrato un campo di ricerca per filtrare facilmente le competenze e un sistema per aggiungere o rimuovere skill dinamicamente, sfruttando le{" "}
                <b>API Routes</b> di Next.js per gestire i dati lato server.
              </Typography>

              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Funzionalità principali
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <li>
                  <Typography variant="body1">
                    <b>Grafico Circolare</b> – Mostra visivamente il livello di ogni competenza.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <b>Filtri e ricerca</b> – Permette di trovare velocemente le skill desiderate.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <b>Gestione dinamica</b> – Possibilità di aggiungere o rimuovere skill tramite API lato server.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <b>Integrazione SSR/CSR</b> – Le skill iniziali vengono caricate lato server per un rendering veloce, mentre l’interattività (aggiunta, rimozione, filtri) avviene lato client.
                  </Typography>
                </li>
              </Box>
            </li>
            <li>
              <Typography variant="body1">
                <b>Progetti personali</b> – Descrizione dei progetti e dimostrazione pratica di <b>SSG</b> e <b>SSR</b>. Ho implementato rotte statiche con <code>page.tsx</code> e usato il componente{" "}
                <code>Image</code> per ottimizzare le immagini.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Logout e Contatti</b> – Gestione autenticazione e sezione per contattarmi facilmente.
              </Typography>
            </li>
          </Box>
        </Box>
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 0,
        m: 0,
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
          height: "100%",
          background: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(8px)",

          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",

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
            "& .MuiTab-root": { color: "white", fontWeight: "bold" },
          }}
        >
          {tabContent.map((tab, index) => (
            <Tab key={index} label={tab.label} />
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

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
}
