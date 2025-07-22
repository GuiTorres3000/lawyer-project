import { LiaBusinessTimeSolid } from "react-icons/lia";
import { PiMaskHappy } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import CardActivity from "@/components/cardActivity";


export default function Whatwedo() {

      const items = [
            {icon: <LiaBusinessTimeSolid size={64} />, title: "Direito Empresarial", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {icon: <PiMaskHappy size={64} />, title: "Direito do Consumidor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {icon: <MdFamilyRestroom size={64} />, title: "Direito da Família", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
      ];

      return (
      <section className="pt-20">

            <div className="text-center mb-12">
                  <h2 className="text-3xl font-thin font-serif text-accent">ONDE ATUAMOS?</h2>
            </div>
            <div className="flex justify-center items-center gap-40 text-accent">
                  {items.map((item) => (
                        <CardActivity 
                        key={item.title} 
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        />
                  ))}
            </div>
      </section>

);
}