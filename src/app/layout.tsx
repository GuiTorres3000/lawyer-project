import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <body className="min-h-screen flex flex-col px-6 py-4 lg:px-10 lg:py-6">
        <main className="flex-1">{children}</main>

       <Footer/>
      </body>
    </html>
  );
}
