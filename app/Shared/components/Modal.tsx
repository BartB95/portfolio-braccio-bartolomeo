"use client";

import React, { ReactNode } from "react";
import { styled } from "@mui/system";
import { useGlobalStore } from "@/app/State/GlobalContext";

const Overlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
});
const ModalBox = styled("div")({
  background: "linear-gradient(135deg, rgba(155, 183, 212, 0.9), rgba(227, 227, 238, 0.85))", 
  backdropFilter: "blur(6px) saturate(180%)",
  WebkitBackdropFilter: "blur(12px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 2)",
  padding: 24,
  borderRadius: 20,
  width: "90%",
  maxWidth: 420,
  textAlign: "center",
  boxShadow: "0 12px 40px rgba(0,0,0,1)", 
  color: "#f5f7fa", 
  fontFamily: "'Poppins', sans-serif",
});

const Title = styled("h3")({
  marginBottom: 16,
  fontSize: "20px",
  color: "#333",
});

const Message = styled("p")({
  marginBottom: 24,
  fontSize: "16px",
  color: "#555",
});

const Actions = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  gap: "12px",
});

const Button = styled("button")<{ variant?: "confirm" | "cancel" }>(({ variant }) => ({
  padding: "10px 18px",
  borderRadius: 8,
  border: "none",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  minWidth: "100px",
  ...(variant === "cancel" && {
    background: "#ccc",
    color: "#333",
    "&:hover": { background: "#bbb" },
  }),
  ...(variant === "confirm" && {
    background: "#e74c3c",
    color: "#fff",
    "&:hover": { background: "#c0392b" },
  }),
}));

export type ModalOptions = {
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
};

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { state, dispatch } = useGlobalStore();

  const showModal = (opts: ModalOptions) => {
    dispatch({ type: "SHOW_MODAL", payload: opts });
    dispatch({ type: "SET_CURSOR", payload: "default" });
  };

  const hideModal = () => {
    dispatch({ type: "HIDE_MODAL" });
    dispatch({ type: "SET_CURSOR", payload: "pointer" });
  };

  const handleConfirm = () => {
    state.modal?.onConfirm();
    hideModal();
  };

  const handleCancel = () => {
    state.modal?.onCancel?.();
    hideModal();
  };

  return (
    <>
      {children}
      {state.modal && (
        <Overlay>
          <ModalBox>
            {state.modal.title && <Title>{state.modal.title}</Title>}
            <Message>{state.modal.message}</Message>
            <Actions>
              <Button variant="cancel" onClick={handleCancel}>
                {state.modal.cancelText || "Annulla"}
              </Button>
              <Button variant="confirm" onClick={handleConfirm}>
                {state.modal.confirmText || "Conferma"}
              </Button>
            </Actions>
          </ModalBox>
        </Overlay>
      )}
    </>
  );
};

export default ModalProvider;
