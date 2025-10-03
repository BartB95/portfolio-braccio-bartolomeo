import { cookies } from "next/headers";
import { Providers } from "./State/Providers";
import ModalProvider from "./Shared/components/Modal";
import ClientAppWrapper from "./ClientAppWrapper";

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
        <Providers>
          <ModalProvider>
            {/* Client wrapper gestisce montaggio e loader */}
            <ClientAppWrapper token={token}>
              <main
                style={{
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {children}
              </main>
            </ClientAppWrapper>
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
