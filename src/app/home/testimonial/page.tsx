import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { ReviewCard } from "@/components/reviewCard";
import profile1 from "@/assets/profile1.svg";
import profile2 from "@/assets/profile2.svg";
import profile3 from "@/assets/profile3.svg";
import rectangle from "@/assets/rectangle.svg";
import { Counter } from "@/components/Counter";

export default function TestimonialsPage() {
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

  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: "trimSnaps" },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="relative text-accent overflow-y-clip mb-20">
      <div className="mx-auto flex flex-col items-center gap-4 max-w-6xl px-4">
        <h1 data-aos="fade-in" className="font-bold text-center text-3xl">
          Comprovado por clientes que confiam e se satisfazem com nossos
          serviços jurídicos
        </h1>

        <p data-aos="fade-in" className="max-w-xl text-center text-sm">
          Nossos clientes destacam a excelência e dedicação em cada atendimento,
          reforçando nosso compromisso com a justiça e a confiança.
        </p>

        <div className="flex flex-col gap-20 mt-16 w-full">
          <div className="max-3xl lg:overflow-x-clip" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="flex justify-center flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_55%] lg:flex-[0_0_40%]"
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mt-6 flex items-center justify-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    selected === i ? "bg-accent" : "bg-primary"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={scrollPrev}
                className="cursor-pointer rounded-full border border-accent px-4 py-2 text-sm font-medium hover:bg-secondary"
              >
                Anterior
              </button>
              <button
                onClick={scrollNext}
                className="cursor-pointer rounded-full border border-accent px-4 py-2 text-sm font-medium hover:bg-secondary"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10 py-2 text-center md:justify-around w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl font-bold">
              <Counter end={70} suffix=" +" />
            </h1>
            <p className="font-semibold">Recomendações no brasil</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl font-bold">
              <Counter end={25} suffix=" +" />
            </h1>
            <p className="font-semibold">Anos de experiência</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl font-bold">
              <Counter end={8000} formatK suffix=" +" />
            </h1>
            <p className="font-semibold">Casos Concluídos</p>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="300"
        className="absolute opacity-70 lg:opacity-100 -right-80 md:scale-125 lg:scale-100 lg:-right-125 top-1/2 lg:top-1/3 w-100 lg:w-180 -translate-y-1/3 -rotate-115 pointer-events-none"
      >
        <Image src={rectangle} alt="ellipse background" />
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        className="absolute opacity-70 lg:opacity-100 -right-75 md:scale-125 lg:scale-100 lg:-right-125 top-1/2 lg:top-1/4 w-100 lg:w-180 -rotate-110 pointer-events-none"
      >
        <Image src={rectangle} alt="ellipse background" />
      </div>
    </section>
  );
}
