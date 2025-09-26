import { cookies } from "next/headers";
import Image from "next/image";
import NavbarClient from "./navbar";
import { Providers } from "./State/Providers";
import LogoutButton from "./logout/page";

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
        {/* Sfondo fisso */}
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
          />
        </div>

        <Providers>
          {token ? <NavbarClient /> : null}
          {token ? <LogoutButton /> : null}

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
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
