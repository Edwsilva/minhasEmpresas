import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "@/components/cookie/Cookies";
import { cookies } from "next/headers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minhas Empresas",
  description: "Carioca digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = cookies().has("minhas_empresas");
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
        {!cookie && (
          <Cookies
            name="minhas_empresas"
            value="Esse é o value do cookie minhas_empresas"
          />
        )}
      </body>
    </html>
  );
}
