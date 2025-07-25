import Image from "next/image";
import justiceStatue from "@/assets/3d-justice-scales.png";
import legalExcellence from "@/assets/circle-legal-excellence.png";
import rectangle from "@/assets/rectangle.svg";
import CardRating from "@/components/cardRating";
import woodenGavel from "@/assets/wooden-gavel.svg";

export default function HeroPage() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 pt-40 text-heading text-center">
        <h1 className="font-bold text-4xl w-[350px] md:w-[600px]">
          Soluções Jurídicas de Excelência para Você ou Seu Negócio
        </h1>
        <div className="flex relative">
          <Image
            src={legalExcellence}
            alt="Circulo girando texto excelência jurídica"
            className="animate-spin spin-slower w-[150px] h-[150px] absolute bottom-1/4 -left-20"
          />
          <Image src={justiceStatue} alt="Estatua da justiça" className="ani" />
          <CardRating className="hidden md:flex absolute  scale-75 md:-right-30 lg:-right-40 xl:-right-80 lg:scale-100 top-2" />
        </div>
        <Image
          src={woodenGavel}
          alt="Martelo de madeira"
          className="hidden md:block w-[300px] h-[300px] absolute bottom-26 right-0"
        />
        <p>
          Prestamos assessoria jurídica personalizada com foco na solução
          estratégica de conflitos e na prevenção de riscos.
        </p>
      </div>

      <div className="flex absolute -top-50 -right-50 rotate-180 -z-90">
        <Image src={rectangle} alt="rectangle background" />
        <Image
          src={rectangle}
          alt="rectangle background"
          className="scale-200"
        />
      </div>
    </div>
  );
}
