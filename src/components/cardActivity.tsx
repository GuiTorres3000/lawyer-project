import { ReactNode } from "react";


interface activityProps {
      icon: ReactNode,
      title: string,
      description: string,
}


export default function CardActivity({ icon, title, description }: activityProps) {
      return (
            <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center h-28 w-28 rounded-3xl bg-secondary">
                        <div className="text-white">{icon}</div>
                  </div>
                  <div className="text-center w-[25rem]">
                        <p className="font-semibold text-xl mb-4">{title}</p>
                        <p className="font-normal">{description}</p>
                  </div>
            </div>
      )
}