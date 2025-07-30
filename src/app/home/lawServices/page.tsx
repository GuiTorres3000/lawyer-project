import Image from "next/image";
import InfoCard from "../../../components/infoCard";

import doubleEllipse from "@/assets/doubleEllipse.svg";

const SERVICES = [
  {
    title: "Direito Civil e Contratos",
    text: "Elaboração, análise e revisão de contratos, responsabilidade civil e ações de cobrança judicial e extrajudicial.",
    imageUrl: "/infoIcon.svg",
    delay: "100",
  },
  {
    title: "Família e Sucessões",
    text: "Divórcio, guarda e convivência, pensão alimentícia, inventário, partilha de bens e planejamento sucessório.",
    imageUrl: "/infoIcon.svg",
    delay: "150",
  },
  {
    title: "Direito do Consumidor",
    text: "Cobranças indevidas, vícios de produto/serviço, negativação indevida, revisão de contratos e ações contra bancos.",
    imageUrl: "/infoIcon.svg",
    delay: "200",
  },
  {
    title: "Direito Empresarial",
    text: "Consultoria preventiva, constituição e alterações societárias, compliance, contratos comerciais e recuperação de créditos.",
    imageUrl: "/infoIcon.svg",
    delay: "250",
  },
];

export default function Services() {
  return (
    <section className="text-accent mt-2 relative  min-h-120 lg:min-h-90 py-16">
      <main className=" px-4  relative max-w-6xl mx-auto">
        <div data-aos="fade-in" className="mb-20 mx-auto">
          <h2 className=" text-center  font-serif text-3xl font-semibold ">
            Porque nos escolher para resolver seus problemas
          </h2>
        </div>
        <aside className="grid grid-cols-1 justify-items-center gap-8 mt-10 w-full md:grid-cols-2">
          {SERVICES.map((service) => (
            <InfoCard
              key={service.text}
              delay={service.delay}
              title={service.title}
              text={service.text}
              imageUrl={service.imageUrl}
            />
          ))}
        </aside>
      </main>
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        className="absolute opacity-70 lg:opacity-100 -left-70 md:scale-150 lg:scale-100 -bottom-30 w-100 lg:w-160 lg:-bottom-50 rotate-40 pointer-events-none"
      >
        <Image src={doubleEllipse} alt="ellipse background" />
      </div>
    </section>
  );
}
