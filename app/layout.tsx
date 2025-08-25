import { cookies } from "next/headers";
import Image from "next/image";
import NavbarClient from "./navbar";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <html lang="it">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Poppins', sans-serif",
          color: "white",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Immagine di sfondo */}
        <Image src="/sfondo.png" alt="Sfondo" fill style={{ objectFit: "cover", zIndex: -1 }} priority />

        {token ? <NavbarClient /> : null}

        <main
          style={{
            padding: 20,
            minHeight: "calc(100vh - 72px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
