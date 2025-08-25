"use client";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  textAlign: "center",
  padding: "0 20px",
  fontFamily: "'Poppins', sans-serif",
  color: "white",
});

const Box = styled("div")({
  background: "rgba(255, 255, 255, 0.08)",
  padding: "20px 25px",
  borderRadius: "20px",
  backdropFilter: "blur(5px)",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
  maxWidth: "400px",
  animation: "fadeIn 0.8s ease-in-out",
});

const HeaderText = styled("h1")({
  fontSize: "1.5rem",
  marginBottom: 15,
  background: "linear-gradient(90deg, #ff8a00, #e52e71)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
});

const Paragraph = styled("p")({
  fontSize: "1rem",
  marginBottom: 20,
  opacity: 0.85,
});

const ProfileImageWrapper = styled(Link)({
  display: "inline-block",
  borderRadius: "50%",
  border: "6px solid #FFD166",
  overflow: "hidden",
  width: "250px",
  height: "250px",
  marginBottom: "20px",
  cursor: "pointer",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 50px rgba(255,255,255,0.6), 0 12px 30px rgba(0,0,0,0.3)",
  },
});

const Title = styled("h1")({
  fontSize: "1.5rem",
  color: "#FFD166",
  fontWeight: "bold",
  textShadow: "0 0 20px rgba(255,255,255,0.8), 3px 3px 15px rgba(0,0,0,0.6)",
  margin: 0,
  transition: "color 0.3s ease, text-shadow 0.3s ease",
});

const SecretPortfolioPage = () => {
  return (
    <Container>
      <Box>
        <HeaderText>🔒 Area Protetta</HeaderText>
        <Paragraph>Benvenuto! Sei autenticato e puoi esplorare l'app! ✨</Paragraph>

        <ProfileImageWrapper href="/home" title="Vai alla home">
          <Image src="/bart.webp" alt="Foto Profilo" width={250} height={250} />
        </ProfileImageWrapper>

        <Title>Portfolio Personale Braccio Bartolomeo</Title>
      </Box>
    </Container>
  );
};

export default SecretPortfolioPage;
