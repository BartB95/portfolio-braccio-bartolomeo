"use client";
import { useState } from "react";
import Image from "next/image";
import FilterSearch from "../Shared/components/FilterSearch";
import Card from "../Shared/components/Cards";
import { styled } from "@mui/system";
import HobbySection from "./hobby/hobby";

const Container = styled("div")({
  fontFamily: "'Poppins', sans-serif",
  padding: "20px",
  background: "linear-gradient(135deg, rgba(1, 6, 33, 0.3), rgba(144,202,249,0.2))",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

const Header = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  background: "rgba(0,0,0,0.4)",
  padding: "15px 25px",
  borderRadius: "8px",
  marginBottom: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  "@media (min-width: 768px)": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const HeaderLeft = styled("div")({
  color: "white",
  fontWeight: "bold",
  fontSize: "1.4rem",
});

const HeaderCenter = styled("div")({
  flex: 1,
  padding: "0 20px",
});

const HeaderRight = styled("div")({
  color: "#EAEAEA",
  fontSize: "0.85rem",
  lineHeight: 1.4,
});

const Main = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  "@media (min-width: 1024px)": {
    flexDirection: "row",
    gap: "20px",
  },
});

const Hero = styled("div")({
  flex: 1,
  background: "rgba(63, 81, 181, 0.3)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderRadius: "12px",
  padding: "30px",
  color: "white",
  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
});

const HeroTitle = styled("h1")({
  fontSize: "2rem",
  marginBottom: "15px",
  fontWeight: "bold",
});

const HeroText = styled("p")({
  fontSize: "1rem",
  marginBottom: "20px",
  color: "#EAEAEA",
});

const HeroButton = styled("button")({
  padding: "12px 25px",
  background: "linear-gradient(90deg, #FF7E5F, #FD3A69)",
  border: "none",
  borderRadius: "30px",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  marginRight: "20px",
  marginTop: "30px",
  transition: "transform 0.2s ease",
  "&:hover": { transform: "scale(1.05)" },
});

const CvButton = styled("button")({
  padding: "10px 20px",
  background: "#FFD166",
  border: "none",
  borderRadius: "30px",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "30px",
  transition: "transform 0.2s ease",
  "&:hover": { transform: "scale(1.05)" },
});


const Projects = styled("div")({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "15px",
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
  borderRadius: "12px",
  color: "white",
  textAlign: "center",
  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
  transition: "all 0.2s ease",
  "&:hover": { transform: "translateY(-3px)", boxShadow: "0 8px 20px rgba(0,0,0,0.35)" },
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
  flex: "1 1 200px",
  background: "rgba(0,0,0,0.35)",
  padding: "18px 20px",
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

  const projects = [
    { title: "Portfolio Web", desc: "Sito web personale responsivo in React + Next.js", link: "#" },
    { title: "Dashboard Analytics", desc: "Visualizzazione dati in tempo reale con chart interattivi", link: "#" },
    { title: "Corso Java", desc: "Academy 500 ore di Java con esercizi e progetti reali", link: "#" },
    { title: "Corso React", desc: "Apprendimento di React, componenti, state management, routing e redux.", link: "/certificato corso react.pdf" },
    { title: "Corso JavaScript", desc: "Corso completo di JavaScript da base a livello avanzato", link: "/certificato corso javaScript.pdf" },
    { title: "Corso MongoDB", desc: "Operazioni CRUD, aggregazioni e design database", link: "/bartolomeo-braccio-certificate.pdf" },
  ];

  const filteredProjects = projects.filter((p) => p.title.toLowerCase().includes(searchInput.toLowerCase()));

  return (
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
          <HeroButton onClick={() => (window.location.href = "/about")}>Scopri di più</HeroButton>
          <CvButton onClick={() => window.open("/BartolomeoBraccio_CV.pdf", "_blank")}>📄 Scarica CV</CvButton>
        </Hero>

        <Projects>
          {filteredProjects.map((p) => (
            <Card key={p.title} title={p.title} desc={p.desc} link={p.link} />
          ))}
        </Projects>
      </Main>

      {/* FOOTER */}
      <Footer>
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
  );
};

export default Home;
