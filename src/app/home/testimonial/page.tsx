import { ReviewCard } from "@/components/reviewCard";
import profile1 from "@/assets/profile1.svg";
import profile2 from "@/assets/profile2.svg";
import profile3 from "@/assets/profile3.svg";
import rectangle from "@/assets/rectangle.svg";
import Image from "next/image";

export function TestimonialsPage() {
  const reviews = [
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.",
      image: profile1,
      name: "Maria",
      role: "Dona de casa",
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.",
      image: profile2,
      name: "EMTEC Legal",
      role: "EMTEC Group",
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.",
      image: profile3,
      name: "João",
      role: "Influencer",
    },
  ];

  return (
    <section className="relative text-accent overflow-y-clip">
      <div className="mx-auto flex flex-col items-center gap-4 max-w-6xl px-4">
        <h1 className="font-bold text-center text-3xl ">
          Comprovado por clientes que confiam e se satisfazem com nossos
          serviços jurídicos
        </h1>

        <p className="max-w-xl text-center text-sm">
          Nossos clientes destacam a excelência e dedicação em cada atendimento,
          reforçando nosso compromisso com a justiça e a confiança.
        </p>

        <div className="flex flex-col md:gap-16 gap-30 justify-center md:flex-row mt-16">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-40 py-2 text-center md:justify-around w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">70 +</h1>
            <p className="font-semibold">Recomendações no brasil</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">25 +</h1>
            <p className="font-semibold">25 anos de experiência</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">8K +</h1>
            <p className="font-semibold">Casos Concluídos</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row absolute top-12 -left-80  lg:-left-50 -z-10 pointer-events-none ">
        <Image src={rectangle} alt="rectangle background" />
        <Image src={rectangle} alt="rectangle background" />
      </div>
    </section>
  );
}
