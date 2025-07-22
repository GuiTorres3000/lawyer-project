import Image from "next/image";
import InfoCard from "../../../components/infoCard";
import rectangle from "@/assets/rectangle.svg";
import doubleEllipse from "@/assets/doubleEllipse.svg";


const SERVICES = [
    {
        title: "Direito Civil",
        text: "Advocacia especializada em direito civil",
        imageUrl: "/infoIcon.svg"
        
    },
    {
        title: "Direito Civil",
        text: "Consultoria jurídica para empresasaaaaaaaaaaaaaaaaaaaaaaaaa",
        imageUrl: "/infoIcon.svg"
    },
    {
        title: "Direito Civil",
        text: "Defesa em processos judiciaisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        imageUrl: "/infoIcon.svg"
    },
    {
        title: "Direito Civil",
        text: "Defesa em processos judiciaissssasdasdasdas",
        imageUrl: "/infoIcon.svg"
    }
]

export default function Services(){
    return (
        <section className="text-accent mt-20 relative overflow-hidden min-h-160 lg:min-h-120 py-20">
            <main className=" px-4  relative max-w-6xl mx-auto">
                <div className="mb-20 mx-auto" >
                    <h2 className=" text-center  font-serif text-3xl font-semibold ">Porque nos escolher para resolver seus problemas</h2>
                </div>
                <aside className="grid grid-cols-1 justify-items-center gap-8 mt-10 w-full md:grid-cols-2">
                    {SERVICES.map((service) => (
                        <InfoCard
                            key={service.text}
                            title={service.title}
                            text={service.text}
                            imageUrl={service.imageUrl}
                        />
                    ))}
                </aside>
            </main>
            <div className="absolute opacity-70 lg:opacity-100 -left-70 md:scale-150 lg:scale-100 -bottom-30 w-100 lg:w-160 lg:-bottom-50 rotate-40 pointer-events-none"><Image src={doubleEllipse} alt="ellipse background" /></div>
            <div className="absolute  opacity-70 lg:opacity-100 -right-80 md:scale-125 lg:scale-100 lg:-right-125 top-1/2 lg:top-1/3 w-100 lg:w-180 -translate-y-1/3 -rotate-115 pointer-events-none"><Image src={rectangle} alt="ellipse background" /></div>
            <div className=" absolute opacity-70 lg:opacity-100 -right-75 md:scale-125 lg:scale-100 lg:-right-125 top-1/2 lg:top-1/4  w-100 lg:w-180 -rotate-110 pointer-events-none"><Image src={rectangle} alt="ellipse background" /></div>
        </section>
    );
}


