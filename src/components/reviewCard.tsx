import Image, { StaticImageData } from "next/image";
import doubleEllipse from "@/assets/right-quote 1.svg";
interface ReviewCardProps {
  text: string;
  image: StaticImageData;
  name: string;
  role: string;
}

export function ReviewCard({ text, image, name, role }: ReviewCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center max-w-xs text-accent">
      <div className="flex flex-col items-center gap-4 bg-background p-8 rounded-2xl shadow-md">
        <Image src={doubleEllipse} alt="Icone Aspas" width={50} height={50} />
        <p className="text-sm">{text}</p>
      </div>

      <div className="absolute flex flex-col items-center -bottom-23 w-20">
        <Image
          src={image}
          alt={`Foto de ${name}`}
          width={56}
          height={56}
          className="rounded-full object-cover border-2"
        />

        <div>
          <h3 className="font-semibold text-nowrap">{name}</h3>
          <span className="text-xs text-heading">{role}</span>
        </div>
      </div>
    </div>
  );
}
