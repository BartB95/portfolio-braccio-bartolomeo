"use client";

import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

// Nodi desktop (layout orizzontale)
const desktopNodes = [
  {
    id: "1",
    position: { x: 0, y: 250 },
    data: { label: "🎓 Accademy Betacom\n500 ore Java\n(Maggio 2022)" },
  },
  {
    id: "2",
    position: { x: 300, y: 250 },
    data: { label: "💼 Enel Grid in Betacom\nPrimo progetto" },
  },
  {
    id: "3",
    position: { x: 600, y: 150 },
    data: { label: "🗺️ GISWrapper (Angular)\nTesting rete elettrica Enel" },
  },
  {
    id: "4",
    position: { x: 900, y: 150 },
    data: { label: "🌐 GISViewer (React)\nMicrofrontend per dati geospaziali" },
  },
  {
    id: "5",
    position: { x: 1200, y: 250 },
    data: {
      label:
        "🏨 Blastness (2025)\nSiti hotel di lusso\nUI curata e performante",
    },
  },
  {
    id: "6",
    position: { x: 1500, y: 250 },
    data: {
      label:
        "🚀 Portfolio personale\nNext.js + React\nGrafici, API, autenticazione",
    },
  },
  {
    id: "7",
    position: { x: 600, y: 400 },
    data: { label: "📚 Corsi\nJavaScript & React\nApprofondimenti front-end" },
  },
];

// Nodi mobile (layout verticale logico)
const mobileNodes = [
  {
    id: "1",
    position: { x: 50, y: 0 },
    data: { label: "🎓 Accademy Betacom\n500 ore Java\n(Maggio 2022)" },
  },
  {
    id: "2",
    position: { x: 50, y: 120 },
    data: { label: "💼 Enel Grid in Betacom\nPrimo progetto" },
  },
  {
    id: "7",
    position: { x: 50, y: 240 },
    data: { label: "📚 Corsi\nJavaScript & React\nApprofondimenti front-end" },
  },
  {
    id: "3",
    position: { x: 50, y: 360 },
    data: { label: "🗺️ GISWrapper (Angular)\nTesting rete elettrica Enel" },
  },
  {
    id: "4",
    position: { x: 50, y: 480 },
    data: { label: "🌐 GISViewer (React)\nMicrofrontend per dati geospaziali" },
  },
  {
    id: "5",
    position: { x: 50, y: 600 },
    data: {
      label:
        "🏨 Blastness (2025)\nSiti hotel di lusso\nUI curata e performante",
    },
  },
  {
    id: "6",
    position: { x: 50, y: 720 },
    data: {
      label:
        "🚀 Portfolio personale\nNext.js + React\nGrafici, API, autenticazione",
    },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e2-7",
    source: "2",
    target: "7",
    animated: true,
    style: { stroke: "#FFA500" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFA500" },
  },
  {
    id: "e7-4",
    source: "7",
    target: "4",
    animated: true,
    style: { stroke: "#FFA500" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFA500" },
  },
];

export default function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(desktopNodes);
  const [edgesState, setEdges, onEdgesChange] = useEdgesState(edges);
  const [isMobile, setIsMobile] = useState(false);

  const onConnect = useCallback(
    (params: any) =>
      setEdges(
        addEdge(
          {
            ...params,
            style: { stroke: "#FFD700" },
            markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
          },
          edgesState
        )
      ),
    [setEdges, edgesState]
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setNodes(isMobile ? mobileNodes : desktopNodes);
  }, [isMobile, setNodes]);

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
        background: "linear-gradient(135deg, rgba(15,32,39,0.7), rgba(32,58,67,0.7), rgba(44,83,100,0.7))",
        minHeight: "100vh",
        borderRadius: "16px",
      }}
    >
      <h2
        style={{
          textAlign: "left",
          color: "#FFD700", // testo dorato più visibile
          marginBottom: "20px",
          fontSize: "2.2rem",
          textShadow: "0 4px 16px rgba(0,0,0,0.4)",
          
        }}
      >
        Percorso conseguito in Betacom! 💼
      </h2>
  
      <div
        style={{
          height: "75vh",
          minHeight: "500px",
          maxHeight: "900px",
          background: "rgba(255,255,255,0.05)", // vetro semi-trasparente
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <ReactFlow
          nodes={nodes.map((n) => ({
            ...n,
            style: {
              background: "rgba(255, 255, 255, 0.08)",
              border: "2px solid #FFD700",
              borderRadius: 12,
              padding: "10px 14px",
              color: "#f0e6d2",
              fontWeight: 500,
              fontSize: "0.9rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              transition: "all 0.3s ease",
            },
          }))}
          edges={edgesState.map((e) => ({
            ...e,
            style: { stroke: e.source === "2" && e.target === "7" ? "#FFA500" : "#FFD700", strokeWidth: 2 },
            animated: true,
          }))}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          minZoom={0.2}
          maxZoom={2}
        >
          <Controls />
          <Background gap={20} color="#444" />
        </ReactFlow>
      </div>
    </div>
  );
  
}
