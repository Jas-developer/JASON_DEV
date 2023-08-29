import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-black
      dark:bg-[#9090B] dark:text-white h-full selection:bg-gray-50 
      dark:selection:bg-gray-800`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
