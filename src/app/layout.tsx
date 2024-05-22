import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

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
  return (
    <html lang="en">
      <body>
        {/* <div className="container"> */}
          {/* <div className="headerbody"> */}

          <Navbar />
          {/* <div className="children"> */}

          {children}
          {/* </div> */}
          {/* </div> */}
          <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
