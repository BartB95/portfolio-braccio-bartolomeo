import { cookies } from "next/headers";
import Image from "next/image";
import { Providers } from "./State/Providers";
import ModalProvider from "./Shared/components/Modal";
import WidgetWrapper from "./Shared/components/Widget/widgetWrapper";

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
          <Image src="/sfondo_studio.jpg" alt="Sfondo" fill style={{ objectFit: "cover" }} priority />
        </div>

        <Providers>
          <ModalProvider>
            {/* Client component che gestisce token e pathname */}
            {token && <WidgetWrapper token={token} />}

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
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
