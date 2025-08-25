import { headers } from "next/headers";
import { ISkill } from "./ISkill";
import SkillsClient from "./skillsClient";

// 👉 Dati iniziali (fallback): usati come base se l'API non risponde
const initialSkills: ISkill[] = [
  { name: "React", percent: 90 },
  { name: "CSS", percent: 75 },
  { name: "Next.js", percent: 60 },
  { name: "JavaScript", percent: 85 },
  { name: "Node.js", percent: 50 },
];

// 👉 Questo è un **Server Component** (async function).
// Viene eseguito sul server ad ogni richiesta → quindi è SSR.
export default async function SkillsPage() {
  // Recupero gli header della richiesta (es. host)
  // Questa chiamata funziona solo lato server.
  const hdrs = await headers();
  const baseUrl = `http://${hdrs.get("host")}`;

  // 👉 Fetch lato server (SSR).
  // Con { cache: "no-store" } forzo il recupero dei dati freschi ad ogni richiesta.
  const res = await fetch(`${baseUrl}/api/skills`, { cache: "no-store" });

  // Parto dai dati di default
  let skills = initialSkills;

  if (res.ok) {
    // Se l’API risponde, unisco le skill recuperate dal server
    const data = await res.json();
    skills = [
      ...initialSkills,
      // Filtro per evitare duplicati tra le skill statiche e quelle dell'API
      ...data.skills.filter((s: ISkill) => !initialSkills.some((i) => i.name === s.name)),
    ];
  }

  // 👉 Passo i dati già pronti (dal server) al componente client.
  // Qui avviene la separazione: il rendering iniziale è SSR,
  // mentre tutta l’interattività (filtri, aggiunta/rimozione skill)
  // sarà gestita dentro SkillsClient (CSR).
  return <SkillsClient initialSkills={skills} />;
}
