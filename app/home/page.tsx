"use client";
import { useState } from "react";
import Image from "next/image";
import FilterSearch from "../Shared/components/FilterSearch";
import Card from "../Shared/components/Cards";
import { styled } from "@mui/system";
import HobbySection from "./hobby/hobby";
import { useGlobalStore } from "../State/GlobalContext";
import MiniDraggableWidget from "../Shared/components/DraggableWidget";

const Container = styled("div")({
  fontFamily: "'Poppins', sans-serif",
  padding: "20px",
  maxWidth: "1300px",
  margin: "0 auto",
  background: "linear-gradient(135deg, rgba(1, 6, 33, 0.5), rgba(144,202,249,0.3))",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 1.5)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",

  "@media (max-width: 399px)": {
    padding: "0px",
    gap: "15px",
  },
});
/* HEADER */
const Header = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  background: "rgba(255,255,255,0.05)",
  padding: "18px 28px",
  backdropFilter: "blur(8px)",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 1.5)",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  "@media (min-width: 768px)": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const HeaderLeft = styled("div")({
  color: "#FFD166",
  fontWeight: 700,
  fontSize: "clamp(1rem, 1.6vw, 1.5rem)",
  letterSpacing: "0.5px",
});

const HeaderCenter = styled("div")({
  flex: 1,
  padding: "0 20px",
});

const HeaderRight = styled("div")({
  color: "#E0E0E0",
  fontSize: "clamp(0.8rem, 1vw, 0.95rem)",
  lineHeight: 1.5,
  textAlign: "right",
});

const Main = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  flexWrap: "wrap",
  "@media (min-width: 1024px)": {
    flexDirection: "row",
    gap: "20px",
  },
});

const Hero = styled("div")({
  flex: "1 1 55%", // occupa circa 2/3 dello spazio
  background: "rgba(63, 81, 181, 0.3)",
  backdropFilter: "blur(3px)",
  WebkitBackdropFilter: "blur(12px)",
  padding: "30px",
  color: "white",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 1.5)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.25)",
});

const HeroTitle = styled("h1")({
  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
  marginBottom: "15px",
  fontWeight: "bold",
});

const HeroText = styled("p")({
  fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
  marginBottom: "20px",
  color: "#EAEAEA",
});

const HeroButton = styled("button")<{ hovered: boolean; cursor: "default" | "pointer" | "grab" }>(({ hovered, cursor }) => ({
  display: "block", // forza il bottone a comportarsi come blocco
  margin: "50px auto 15px", // centrato orizzontalmente e spazio sotto
  padding: "12px 24px",
  background: "linear-gradient(90deg, #FF7E5F, #FD3A69)",
  border: "none",
  borderRadius: "30px",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "clamp(0.9rem, 1vw, 1rem)",
  cursor: cursor ?? "default",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  transform: hovered ? "scale(1.05)" : "scale(1)",
  width: "280px",
  textAlign: "center",
  boxShadow: hovered ? "0 8px 24px rgba(0, 0, 0, 1)" : "0 4px 12px rgba(0, 0, 0, 0.25)",
}));

const CvButton = styled("button")<{ hovered: boolean; cursor: "default" | "pointer" | "grab" }>(({ hovered, cursor }) => ({
  display: "block",
  margin: "20px auto 0", // centrato, spazio sopra
  padding: "12px 24px",
  background: "#c2a35cff",
  border: "none",
  borderRadius: "30px",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "clamp(0.9rem, 1vw, 1rem)",
  cursor: cursor ?? "default",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  transform: hovered ? "scale(1.05)" : "scale(1)",
  width: "280px",
  textAlign: "center",
  boxShadow: hovered ? "0 8px 24px rgba(0, 0, 0, 1)" : "0 4px 12px rgba(0, 0, 0, 0.25)",
}));

const Projects = styled("div")({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "15px",
  maxWidth: "100%",
});

const Footer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "@media (min-width: 1024px)": {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "30px",
  },
});

const ProfileCard = styled("div")({
  flexShrink: 0,
  width: "100%",
  maxWidth: "300px",
  background: "rgba(0,0,0,0.3)",
  padding: "20px",
  color: "white",
  textAlign: "center",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 1.5)",
  borderRadius: "10px",
  transition: "all 0.2s ease",
});

const ProfileName = styled("div")({
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginBottom: "5px",
});

const ProfileRole = styled("div")({
  fontSize: "0.95rem",
  color: "#FFD166",
  marginBottom: "15px",
});

const PersonalInfo = styled("div")({
  fontSize: "0.9rem",
  lineHeight: 1.5,
  marginBottom: "15px",
});

const ProfileImage = styled(Image)({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #FFD166",
  marginBottom: "10px",
});

const ProfileLinks = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  flexWrap: "wrap",
});

const LinkButton = styled("a")({
  background: "linear-gradient(90deg, #6A82FB, #FC5C7D)",
  padding: "6px 12px",
  borderRadius: "6px",
  color: "#fff",
  textDecoration: "none",
  fontSize: "0.8rem",
});

const InfoSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  flex: 1,
  "@media (min-width: 768px)": { flexDirection: "row", gap: "20px" },
});

const Description = styled("div")({
  flex: "1 1 300px",
  background: "rgba(0,0,0,0.35)",
  padding: "18px 20px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 1.5)",
  borderRadius: "10px",
  color: "#f5f5f5",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  "&::before": {
    content: '"📜 Descrizione"',
    display: "block",
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#FFD166",
  },
});

const Skills = styled("div")({
  flex: "1 1 300px",
  background: "rgba(0,0,0,0.35)",
  padding: "18px 20px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 1.5)",
  borderRadius: "10px",
  color: "#f5f5f5",
  fontSize: "0.95rem",
  "&::before": {
    content: '"💡 Competenze Tecniche"',
    display: "block",
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#FFD166",
  },
  "& ul": { paddingLeft: "20px", margin: 0 },
  "& li": { marginBottom: "5px" },
});

const HobbyWrapper = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "5px",
  "@media (min-width: 768px)": { flexDirection: "row", gap: "15px" },
});

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const { state, dispatch } = useGlobalStore();

  const cursor = state.cursor;

  const projects = [
    { title: "Portfolio Web", desc: "Sito web personale responsivo in React + Next.js", link: "#" },
    { title: "Dashboard Analytics", desc: "Visualizzazione dati in tempo reale con chart interattivi", link: "#" },
    { title: "Accademy Java", desc: "Academy 500 ore di Java con esercizi e progetti reali", link: "#" },
    { title: "Corso React", desc: "Apprendimento di React, componenti, state management, routing e redux.", link: "/certificato corso react.pdf" },
    { title: "Corso JavaScript", desc: "Corso completo di JavaScript da base a livello avanzato", link: "/certificato corso javaScript.pdf" },
    { title: "Corso MongoDB", desc: "Operazioni CRUD, aggregazioni e design database", link: "/bartolomeo-braccio-certificate.pdf" },
  ];

  const filteredProjects = projects.filter((p) => p.title.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <>
    <Container>
      {/* HEADER */}
      <Header>
        <HeaderLeft>💻 Il Mio Portfolio</HeaderLeft>
        <HeaderCenter>
          <FilterSearch searchInput={searchInput} setSearchInput={setSearchInput} />
        </HeaderCenter>
        <HeaderRight>
          <div>💼 Lavoro in Betacom da 3 anni</div>
          <div>🎓 Laurea Triennale in Ingegneria Informatica</div>
          <div>🌍 Appassionato di tecnologia e innovazione</div>
        </HeaderRight>
      </Header>

      {/* MAIN */}
      <Main>
        <Hero>
          <HeroTitle>Benvenuto nel mio angolo digitale</HeroTitle>
          <HeroText>
            Qui condivido il mio viaggio nel mondo della tecnologia, esplorando nuove frontiere, realizzando progetti stimolanti, affrontando sfide complesse e trasformando idee innovative in
            soluzioni concrete. Ogni progetto rappresenta un’opportunità di crescita, apprendimento e sperimentazione, e spero che il mio percorso possa ispirare chi, come me, ama innovare e costruire
            esperienze digitali di valore.
          </HeroText>
          <HeroButton
            hovered={state.hoveredId === "heroButton"}
            cursor={cursor}
            onClick={() => (window.location.href = "/about")}
            onMouseEnter={() => {
              dispatch({ type: "SET_HOVER", payload: "heroButton" });
              dispatch({ type: "SET_CURSOR", payload: "pointer" });
            }}
            onMouseLeave={() => {
              dispatch({ type: "CLEAR_HOVER" });
              dispatch({ type: "SET_CURSOR", payload: "default" });
            }}
          >
            🔍 Scopri di più
          </HeroButton>

          <CvButton
            hovered={state.hoveredId === "cvButton"}
            cursor={cursor}
            onClick={() => window.open("/BartolomeoBraccio_CV.pdf", "_blank")}
            onMouseEnter={() => {
              dispatch({ type: "SET_HOVER", payload: "cvButton" });
              dispatch({ type: "SET_CURSOR", payload: "pointer" });
            }}
            onMouseLeave={() => {
              dispatch({ type: "CLEAR_HOVER" });
              dispatch({ type: "SET_CURSOR", payload: "default" });
            }}
          >
            📄 Scarica CV
          </CvButton>
        </Hero>
        <ProfileCard>
          <ProfileImage src="/bart.webp" alt="Foto Profilo" width={150} height={150} />
          <ProfileName>Bartolomeo Braccio</ProfileName>
          <ProfileRole>Full Stack Developer</ProfileRole>
          <PersonalInfo>
            📍 Portico di Caserta <br />
            📞 366 409 9541 <br />
            📧 bartolomeobraccio95@live.com <br />
            🎂 08/03/1995
          </PersonalInfo>
          <ProfileLinks>
            <LinkButton href="https://linkedin.com" target="_blank">
              LinkedIn
            </LinkButton>
            <LinkButton href="https://github.com" target="_blank">
              GitHub
            </LinkButton>
          </ProfileLinks>
        </ProfileCard>
        <Projects>
          {filteredProjects.map((p) => (
            <Card key={p.title} title={p.title} desc={p.desc} link={p.link} />
          ))}
        </Projects>
      </Main>

      {/* FOOTER */}
      <Footer>
        <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "15px" }}>
          <InfoSection>
            <Description>
              Costantemente motivato dal desiderio di acquisire nuove competenze e assumere maggiori responsabilità, punto a crescere professionalmente affrontando ogni sfida con impegno e
              determinazione. Il mio contributo è stato riconosciuto dalla mia azienda, avendo vinto un progetto di rilievo e collaborato all’interno di un team di sviluppo altamente competente.
            </Description>
            <Skills>
              <ul>
                <li>
                  <strong>Linguaggi:</strong> JavaScript, TypeScript, HTML5, SCSS/CSS3
                </li>
                <li>
                  <strong>Framework & Librerie:</strong> React, Material UI, deck.gl, Leaflet, Axios
                </li>
                <li>
                  <strong>Database:</strong> MongoDB, Oracle, SQL
                </li>
                <li>
                  <strong>Testing & Debug:</strong> Postman, Chrome DevTools
                </li>
                <li>
                  <strong>Versionamento & DevOps:</strong> Git, GitHub, Bitbucket, Bamboo
                </li>
                <li>
                  <strong>Design & UI/UX:</strong> Figma, Lokalise
                </li>
                <li>
                  <strong>Project Management:</strong> Jira, Confluence
                </li>
                <li>
                  <strong>Dev Tools & IDE:</strong> Visual Studio Code, Lens
                </li>
              </ul>
            </Skills>
          </InfoSection>
          <HobbyWrapper>
            <HobbySection />
          </HobbyWrapper>
        </div>
      </Footer>
    </Container>
    <MiniDraggableWidget/>
    </>
  );
};

export default Home;
