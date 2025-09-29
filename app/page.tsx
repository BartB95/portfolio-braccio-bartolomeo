"use client";
import React, { useState } from "react";
import { useGlobalStore } from "./State/GlobalContext";
import { styled } from "@mui/material";
import Rocket from "./Shared/components/Rocket";

const PageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "92vh",
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
  fontFamily: "'Poppins', sans-serif",
  color: "white",
});

export default function LoginPage() {
  const { state, dispatch } = useGlobalStore();
  const [isLaunching, setIsLaunching] = useState(false);

  async function handleLogin() {
    if (isLaunching) return;

    dispatch({
      type: "SHOW_MODAL",
      payload: {
        title: "Inserisci il token!",
        message: "Inserisci o genera un token di accesso.",
        showInput: true,
        showGenerate: true,
        confirmText: "Conferma",
        cancelText: "Annulla",
        onConfirm: (inputToken?: string) => {
          if (isLaunching) return;

          // ❌ blocco se non c’è nessun token
          if (!inputToken || inputToken.trim() === "") {
            alert("⚠️ Devi inserire un token o generarne uno!");
            return;
          }

          setIsLaunching(true); // parte il razzo

          const ANIMATION_DURATION = 800;

          setTimeout(() => {
            document.cookie = `token=${inputToken}; path=/`;
            window.location.href = "/secret"; // redirect finale
          }, ANIMATION_DURATION);
        },
        onCancel: () => {
          setIsLaunching(false);
        },
      },
    });
  }

  const isHovered = state.hoveredId === "authentication";
  const cursor = state.cursor;

  return (
    <PageWrapper>
      <Container>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(15,32,39,0.5), rgba(32,58,67,0.5), rgba(44,83,100,0.5))",
            borderRadius: "25px",
            padding: "30px 15px",
            maxWidth: 400,
            width: "100%",
            textAlign: "center",
            color: "white",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 1.5)",
            backdropFilter: "blur(3px) saturate(180%)",
            transform: "translateY(0px)",
            animation: "slideUpFade 1s ease forwards",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", marginBottom: 10 }}>✨ Benvenuto ✨</h1>
          <p style={{ fontSize: "1rem", marginBottom: 15, opacity: 0.8 }}>
            Accedi per ottenere un token di sicurezza che ti permetterà di accedere alle pagine protette dell’app.
          </p>
          <p style={{ fontSize: "0.85rem", marginBottom: 30, opacity: 0.6 }}>
            🔒 Il token viene salvato come cookie e garantisce accesso sicuro e autenticato alle funzionalità riservate.
          </p>

          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              onClick={handleLogin}
              onMouseEnter={() => {
                dispatch({ type: "SET_HOVER", payload: "authentication" });
                dispatch({ type: "SET_CURSOR", payload: "pointer" });
              }}
              onMouseLeave={() => {
                dispatch({ type: "CLEAR_HOVER" });
                dispatch({ type: "SET_CURSOR", payload: "default" });
              }}
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                border: "none",
                padding: "12px 25px",
                fontSize: "1rem",
                color: "white",
                borderRadius: "30px",
                cursor: cursor ?? "default",
                boxShadow: isHovered
                  ? "0 6px 20px rgba(229, 46, 113, 1.5)"
                  : "0 4px 15px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                overflow: "visible",
              }}
              aria-disabled={isLaunching}
            >
              <span
                style={{
                  fontSize: "12px",
                  marginRight: isLaunching ? "0px" : "30px",
                  display: "inline-block",
                  transition: "margin 0.2s ease",
                }}
              >
                {isLaunching ? "Caricamento..." : "Accedi in sicurezza"}
              </span>
            </button>

            <Rocket isLaunching={isLaunching} />
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
}
