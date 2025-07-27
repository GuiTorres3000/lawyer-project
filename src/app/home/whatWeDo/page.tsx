import { LiaBusinessTimeSolid } from "react-icons/lia";
import { PiMaskHappy } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import CardActivity from "@/components/cardActivity";


export default function Whatwedo() {

      const items = [
            {icon: <LiaBusinessTimeSolid size={64} />, title: "Direito Empresarial", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", delay:'100'},
            {icon: <PiMaskHappy size={64} />, title: "Direito do Consumidor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", delay:'200'},
            {icon: <MdFamilyRestroom size={64} />, title: "Direito da Família", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", delay:'300'}
      ];

      return (
      <section className="pt-20">

            <div data-aos='fade-up' className="text-center mb-12">
                  <h2 className="text-3xl font-thin font-serif text-accent">ONDE ATUAMOS?</h2>
            </div>
            <div className="flex justify-center items-center text-accent
                  flex-col gap-10 lg:flex-row lg:gap-16">
                  {items.map((item) => (
                        <CardActivity 
                        key={item.title} 
                        delay={item.delay}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        />
                  ))}
            </div>
      </section>

);
}