"use client";

import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import WidgetWrapper from "./Shared/components/Widget/widgetWrapper";
import Loader from "./Shared/components/Loader";


type ClientAppWrapperProps = {
  token?: string | null;
  children: React.ReactNode;
};

export default function ClientAppWrapper({ token, children }: ClientAppWrapperProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {/* Background image full-screen */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <Image
          src="/sfondo_studio.jpg"
          alt="Sfondo"
          fill
          style={{ objectFit: "cover" }}
          priority
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>

      {/* Loader overlay sopra tutto */}
      {!imageLoaded && <Loader dotColor="#ff1493" />}

      {/* Widget lato client */}
      {token && <WidgetWrapper token={token} />}

      {/* Contenuto principale */}
      {children}
    </>
  );
}
