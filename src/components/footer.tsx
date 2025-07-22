import Image from "next/image";
import FacebookDoubleIcon from "@/assets/facebook-double-icon.png";
import InstagramDoubleIcon from "@/assets/instagram-double-icon.png";
import YoutubeDoubleIcon from "@/assets/youtube-double-icon.png";
import rectangle from "@/assets/rectangle.svg";

import logo from "@/assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-12 pb-8">
      <div className="relative w-full max-w-6xl mx-auto px-4 flex flex-col gap-8 text-center text-heading text-sm border-t border-heading/25 pt-8">
        <div className=" grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-[auto_1px_auto] md:justify-between md:items-start  ">
          <section className=" flex flex-col items-center gap-2 border-b border-heading/25 pb-8 md:items-start md:border-b-0 md:pr-8">
            <Image src={logo} alt="Logo" className="w-[90px] h-[48px] " />

            <p>Atendimento jurídico com ética, confiança e dedicação.</p>

            <div className="flex gap-4 items-center pt-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-[26px] w-[26px] overflow-hidden">
                  <Image
                    src={FacebookDoubleIcon}
                    alt="social-media facebook icon"
                    className="absolute top-0 left-0 transition-all w-[25px] h-[52px] duration-300 ease-in-out hover:-top-[26px]"
                  />
                </div>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-[26px] w-[26px] overflow-hidden">
                  <Image
                    src={YoutubeDoubleIcon}
                    alt="youtube icon"
                    className="absolute top-0 left-0 transition-all  w-[26px] h-[52px] duration-300 ease-in-out hover:-top-[26px]"
                  />
                </div>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-[26px] w-[26px] overflow-hidden">
                  <Image
                    src={InstagramDoubleIcon}
                    alt="social-media instagram icon"
                    className="absolute top-0 left-0 transition-all  w-[26px] h-[52px] duration-300 ease-in-out hover:-top-[26px]"
                  />
                </div>
              </a>
            </div>
          </section>

          <div className="hidden md:block h-full w-[1px] bg-heading/25" />

          <section className=" flex flex-col items-center justify-center gap-2 w-72 md:items-start md:text-start">
            <h1 className="text-lg font-bold">Contato</h1>

            <a href="" className="font-bold underline">
              62 996627460
            </a>

            <p>
              Av. Paulista, 1578, Bela Vista, São Paulo – SP, 01310-200, Brasil.
            </p>
          </section>
        </div>

        <section className="flex flex-col items-center  md:justify-between md:flex-row-reverse gap-2 font-bold">
          <nav className="flex gap-4  ">
            <a href="/politica-de-privacidade" className="hover:underline">
              Política de Privacidade
            </a>
            <a href="/termos-de-servico" className="hover:underline">
              Termos de Serviço
            </a>
          </nav>

          <p>&copy; {year} — Todos os direitos reservados</p>
        </section>
      </div>

      <div className="absolute top-16 -left-80  lg:-left-50 -z-10 pointer-events-none ">
        <Image src={rectangle} alt="rectangle background" />
      </div>
    </footer>
  );
}
