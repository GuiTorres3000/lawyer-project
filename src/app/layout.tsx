import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lawyer Project — Escritório de Advocacia",
  description: "Site institucional do escritório ...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-1  py-4 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
