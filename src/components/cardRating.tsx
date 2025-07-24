import rateStarts from "@/assets/rate-stars.svg";
import profileIcons from "@/assets/profileIcons.svg";
import Image from "next/image";

interface CardRatingProps {
  className: string;
}

export default function CardRating({ className }: CardRatingProps) {
  return (
    <div
      data-aos='zoom-in'
      data-aos-delay='200'
      className={`flex flex-col gap-10 h-36 px-4 py-2 rounded-2xl text-accent border-2 border-accent bg-background ${className}`}
    >
      <div className="flex gap-2 justify-start items-center">
        <Image src={profileIcons} alt="Icones de perfil de clientes" />
        <h1 className="font-bold text-xl">+ 1000 clientes</h1>
      </div>

      <div className="flex flex-col gap-2">
        <Image src={rateStarts} alt="5 estrelas de avaliação" className="animate-pulse" />
        <p>Aprovado por nossos clientes com nota 4.9!</p>
      </div>
    </div>
  );
}
