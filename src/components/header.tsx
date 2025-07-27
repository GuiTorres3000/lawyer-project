"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "@/assets/logo.png";

const NAV_ITEMS = [
  { label: "Início", href: "", delay: "100" },
  { label: "Sobre mim", href: "", delay: "150" },
  { label: "Serviços", href: "", delay: "200" },
  { label: "Casos", href: "", delay: "250" },
  { label: "Blog", href: "", delay: "300" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all
        ${open ? "duration-0" : "duration-300"} 
        ${scrolled && !open 
          ? "bg-gradient-to-l from-primary/30 to-white backdrop-blur-md shadow-md py-2"
          : "bg-transparent"}
      `}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/">
          <Image
            data-aos="fade-right"
            src={logo}
            width={90}
            height={48}
            alt="Logo"
            priority
            className="h-auto w-auto"
          />
        </Link>

        <nav className="hidden md:flex justify-center gap-10 bg-white/90 backdrop-blur-md rounded-lg px-12 py-4 shadow-lg text-heading text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <a
              data-aos="fade-down"
              data-aos-delay={item.delay}
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            data-aos="fade-left"
            href="/contato"
            className="inline-block font-semibold underline decoration-2 underline-offset-4 hover:text-secondary transition-colors"
          >
            Fale conosco
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((p) => !p)}
          className="md:hidden p-3 rounded-md bg-white/90 backdrop-blur shadow-lg active:scale-95 transition flex items-center justify-center z-60 relative"
        >
          {open ? (
            <FiX className="w-6 h-6 text-heading" />
          ) : (
            <FiMenu className="w-6 h-6 text-heading" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-72 max-w-[80%] z-50 bg-white shadow-xl flex flex-col pt-24 pb-8 px-8 gap-8 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium text-heading">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <a
            href="/contato"
            onClick={() => setOpen(false)}
            className="block w-full text-center font-semibold bg-secondary text-white rounded-lg py-3 hover:opacity-90 active:scale-[0.98] transition"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </header>
  );
}
