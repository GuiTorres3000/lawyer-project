import { LiaBusinessTimeSolid } from "react-icons/lia";
import { PiMaskHappy } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";


export default function Whatwedo() {

      const items = [
            {id: 0, icon: <LiaBusinessTimeSolid size={64} />, title: "Direito Empresarial", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {id: 1, icon: <PiMaskHappy size={64} />, title: "Direito do Consumidor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {id: 2, icon: <MdFamilyRestroom size={64} />, title: "Direito da Família", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
      ];

      return (
      <section className="pt-20">

            <div className="text-center mb-12">
                  <h2 className="text-3xl font-thin font-serif text-accent">ONDE ATUAMOS?</h2>
            </div>
            <div className="flex justify-center items-center gap-40 text-accent">
                  {items.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center">
                              <div className="flex items-center justify-center h-28 w-28 rounded-3xl bg-secondary">
                                    <div className="text-white">{item.icon}</div>
                              </div>
                              <div className="text-center w-[25rem]">
                                    <p className="font-semibold text-xl mb-4">{item.title}</p>
                                    <p className="font-normal">{item.description}</p>
                              </div>
                        </div>
                  ))}
            </div>
      </section>

);
}