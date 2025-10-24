import { headers } from "next/headers";
import { ISkill } from "./ISkill";
import SkillsClient from "./skillsClient";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiMui,
  SiStyledcomponents,
  SiMongodb,
  SiMysql,
  SiGit,
  SiJest,
} from "react-icons/si";


// 👉 Dati iniziali (fallback): usati come base se l'API non risponde


const initialSkills: ISkill[] = [
  { name: "React", percent: 90, icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", percent: 85, icon: <SiNextdotjs color="#000000" /> },
  { name: "Angular", percent: 75, icon: <SiAngular color="#DD0031" /> },
  { name: "CSS/SCSS", percent: 85, icon: <SiCss3 color="#264de4" /> },
  { name: "HTML5", percent: 85, icon: <SiHtml5 color="#E34F26" /> },
  { name: "JavaScript", percent: 90, icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", percent: 90, icon: <SiTypescript color="#3178C6" /> },
  { name: "MUI", percent: 75, icon: <SiMui color="#007FFF" /> },
  { name: "Styled", percent: 75, icon: <SiStyledcomponents color="#DB7093" /> },
  { name: "MongoDB", percent: 70, icon: <SiMongodb color="#47A248" /> },
  { name: "SQL", percent: 65, icon: <SiMysql color="#4479A1" /> },
  { name: "Git", percent: 90, icon: <SiGit color="#F05032" /> },
  { name: "Jest", percent: 70, icon: <SiJest color="#C21325" /> },
  { name: "React Test", percent: 70, icon: <SiReact color="#61DAFB" /> },
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
      ...data.skills.filter(
        (s: ISkill) => !initialSkills.some((i) => i.name === s.name)
      ),
    ];
  }

  // 👉 Passo i dati già pronti (dal server) al componente client.
  // Qui avviene la separazione: il rendering iniziale è SSR,
  // mentre tutta l’interattività (filtri, aggiunta/rimozione skill)
  // sarà gestita dentro SkillsClient (CSR).
  return <SkillsClient initialSkills={skills} />;
}
