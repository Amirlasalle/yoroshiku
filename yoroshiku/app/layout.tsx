import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "宜しく",
  description: "An Airbnb clone with a Japanese twist!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const content = (
    <p>How are you today?</p>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32 ">
        {children}
        </div>
        </body>
    </html>
  );
}
