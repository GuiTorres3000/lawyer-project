import { ReactNode } from "react";


interface activityProps {
      icon: ReactNode,
      title: string,
      description: string,
      delay?: string,
}


export default function CardActivity({ icon, title, description,delay }: activityProps) {
      return (
            <div className="flex flex-col items-center justify-center gap-4">
                  <div 
                  data-aos='zoom-out' 
                  data-aos-delay={delay} className="flex items-center justify-center h-28 w-28 rounded-3xl bg-secondary">
                        <div className="text-white">{icon}</div>
                  </div>
                  <div className="text-center w-[25rem]">
                        <p data-aos='fade-up' data-aos-delay='100' className="font-semibold text-xl mb-4">{title}</p>
                        <p data-aos='fade-up'data-aos-delay='150' className="font-normal">{description}</p>
                  </div>
            </div>
      )
}