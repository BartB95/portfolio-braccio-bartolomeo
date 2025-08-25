"use client";

import { ISkill } from "../skills/ISkill";
import CircularSkillChart from "../Shared/components/CircularSkillChart";

const Projects = () => {
  const skills: ISkill[] = [
    { name: "GisWrapper", percent: 85 },
    { name: "GisViewer", percent: 75 },
    { name: "Blastness", percent: 65 },
  ];

  return (
    <>
      <section
        style={{
          padding: "20px",
          maxWidth: "900px",
          margin: "auto",
          fontFamily: "'Poppins', sans-serif",
          minHeight: "100vh",
          color: "white",         
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
        
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#ff8a00" }}>I miei progetti</h1>

        <article style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "10px", color: "#ffb347" }}>GISWrapper - Applicativo di testing per rete elettrica Enel</h2>
          <p>
            Ho lavorato su un progetto chiamato <strong>GISWrapper</strong>, un’applicazione web dedicata al testing degli elementi di rete elettrica di Enel. Questo strumento era fondamentale per la
            verifica e il monitoraggio dei componenti di rete, permettendo agli ingegneri e tecnici di eseguire test accurati e tempestivi.
          </p>
          <p>
            Una delle funzionalità principali di GISWrapper era la visualizzazione tramite una mappa interattiva, che mostrava diversi layer geografici e dati in tempo reale relativi agli elementi di
            rete. I dati venivano archiviati su MongoDB e venivano estratti tramite API, consentendo una gestione efficiente e scalabile delle informazioni.
          </p>
          <p>
            Il mio ruolo nel progetto includeva la risoluzione di bug critici per migliorare la stabilità dell’applicazione, così come la progettazione e lo sviluppo di nuove funzionalità per
            arricchire l’esperienza utente e aumentare la produttività del team.
          </p>
          <p>
            Lavorare su GISWrapper mi ha permesso di mettere in pratica le mie competenze sia sul fronte front-end con Angular, sia sul back-end con la gestione di database NoSQL e sviluppo di API.
            Questo progetto rappresenta un ottimo esempio di come le tecnologie moderne possano integrarsi per risolvere problemi complessi in ambito industriale.
          </p>
        </article>

        <article>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "10px", color: "#ffb347" }}>Microfrontend GIS - Visualizzazione dati geospaziali (GisViewer)</h2>
          <p>
            Da gennaio 2024 sono stato responsabile di un componente chiave, un microfrontend nato agli albori della room GIS con l’obiettivo di visualizzare in modo efficiente e intuitivo i dati
            disponibili, offrendo una soluzione performante per la rappresentazione grafica di informazioni geospaziali.
          </p>
          <p>
            Il componente è stato sviluppato in React, utilizzando librerie avanzate come <strong>Deck.gl</strong> e <strong>Leaflet</strong>. Deck.gl è una libreria potente per la visualizzazione di
            grandi dataset geospaziali con WebGL, ideale per creare mappe interattive ad alte prestazioni. Leaflet è una libreria leggera e flessibile per mappe interattive, molto apprezzata per la
            sua semplicità e l’estensibilità.
          </p>
          <p>Grazie a queste tecnologie, ho implementato numerose funzionalità, tra cui:</p>
          <ul style={{ marginLeft: "20px", color: "#ffd580" }}>
            <li>Gestione e visualizzazione di coordinate geografiche personalizzate.</li>
            <li>Personalizzazione avanzata del GeoViewer per una maggiore flessibilità.</li>
            <li>Inserimento e disegno di geometrie direttamente sulla mappa.</li>
            <li>Funzionalità di centratura della mappa per facilitare la navigazione.</li>
            <li>Componenti con transizioni fluide per una migliore resa visiva.</li>
            <li>Implementazione di componenti RGBA, permettendo di cambiare dinamicamente il colore dei layer in base alle esigenze visive.</li>
          </ul>
        </article>

        <article>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "10px", color: "#ffb347" }}>Blastness - Sviluppo moduli per siti di hotel di lusso</h2>
          <p>
            Ho lavorato su <strong>Blastness</strong> per 5 mesi, assumendo la responsabilità della creazione di moduli personalizzati per siti web di hotel a 5 stelle. Il progetto era ben
            strutturato, stimolante ed emozionante, permettendomi di unire competenze tecniche avanzate a un forte senso estetico e attenzione all’esperienza utente.
          </p>
          <p>
            Il mio ruolo includeva la progettazione e lo sviluppo di componenti interattivi e performanti, garantendo coerenza visiva e funzionale tra i diversi moduli. Questo lavoro mi ha permesso di
            affrontare sfide complesse e di contribuire significativamente alla qualità complessiva del progetto.
          </p>
        </article>
      </section>
      <div
        style={{
          display: "flex",
              flexWrap: "wrap", 
          padding: "20px",
          gap: "20px", // <-- distanza tra le skill
          justifyContent: "center",
          alignItems: "center",
        
          marginTop: "30px", // <-- distanza dalla section
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
         
        }}
      >
        
        {skills.map((skill) => (
          <CircularSkillChart key={skill.name} skill={skill} animated={true} />
        ))}
      </div>
    </>
  );
};

export default Projects;
