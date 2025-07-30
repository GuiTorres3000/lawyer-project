import Image from "next/image";

interface InfoCardProps {
    title: string,
    text: string,
    imageUrl: string,
}

export default function InfoCard({ text, imageUrl,title }: InfoCardProps) {
    return (
        <div className="flex  gap-4  items-center md:odd:border-r-2 border-primary" > 
            <Image src={imageUrl} alt="icone" width={40} height={40}/>
            <div className="flex flex-col w-70 md:w-80 lg:w-100 md:pr-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="truncate text-justify text-l ">{text}</p>
            </div>
            
        </div>
    )
}