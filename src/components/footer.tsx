import Image from "next/image";
import FacebookDoubleIcon from "@/assets/facebook-double-icon.png";
import InstagramDoubleIcon from "@/assets/instagram-double-icon.png";
import LinkedinDoubleIcon from "@/assets/linkedin-double-icon.png";
import YoutubeDoubleIcon from "@/assets/youtube-double-icon.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-muted text-sm">
      <section className="grid grid-cols-2 py-14 gap-20 justify-items-center lg:grid-cols-3">
        <div className="flex flex-col justify-start gap-2 lg:flex-row">
          <h1 className="text-nowrap font-bold text-heading">Links Úteis</h1>
          <div className="flex flex-col gap-4 text-nowrap">
            <a>Sobre</a>
            <a>Contato</a>
            <a>FAQs</a>
            <a>Termos de Serviço</a>
            <a>Política de Privacidade</a>
          </div>
        </div>

        <div className="flex flex-col justify-start gap-2 lg:flex-row">
          <h1 className="text-nowrap font-bold text-heading">Carreira</h1>
          <div className="flex flex-col gap-4 text-nowrap">
            <a>Sobre</a>
            <a>Contato</a>
            <a>FAQs</a>
            <a>Termos de Serviço</a>
            <a>Política de Privacidade</a>
          </div>
        </div>

        <div className="flex flex-col justify-start gap-2 lg:flex-row">
          <h1 className="text-nowrap font-bold text-heading">Recursos</h1>
          <div className="flex flex-col gap-4 text-nowrap">
            <a>Sobre</a>
            <a>Contato</a>
            <a>FAQs</a>
            <a>Termos de Serviço</a>
            <a>Política de Privacidade</a>
          </div>
        </div>

      </section>

      <section className="flex flex-col justify-center items-center py-6 border-t-1 border-muted/40 lg:flex-row lg:justify-between">
        <div className="">logo</div>
        <div className="flex gap-4 items-center justify-center">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-12 w-12 overflow-hidden">
              <Image
                src={FacebookDoubleIcon}
                alt="social-media facebook icon"
                className="absolute top-1 left-0 transition-all duration-300 ease-in-out hover:-top-11"
                width={42}
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-12 w-12 overflow-hidden">
              <Image
                src={LinkedinDoubleIcon}
                alt="social-media linkedin icon"
                className="absolute top-1 left-0 transition-all duration-300 ease-in-out hover:-top-11"
                width={42}
              />
            </div>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-12 w-12 overflow-hidden">
              <Image
                src={YoutubeDoubleIcon}
                alt="youtube icon"
                className="absolute top-1 left-0 transition-all duration-300 ease-in-out hover:-top-11"
                width={42}
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-12 w-12 overflow-hidden">
              <Image
                src={InstagramDoubleIcon}
                alt="social-media instagram icon"
                className="absolute top-1 left-0 transition-all duration-300 ease-in-out hover:-top-11"
                width={44}
              />
            </div>
          </a>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4  border-muted/45 border-t-1 pt-6">
        <nav className="flex gap-4">
          <a href="/politica-de-privacidade" className="hover:underline">
            Política de Privacidade
          </a>
          <a href="/termos-de-servico" className="hover:underline">
            Termos de Serviço
          </a>
          <a href="/politica-de-cookies" className="hover:underline">
            Política de Cookies
          </a>
        </nav>

        <p>&copy; {year} — Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
