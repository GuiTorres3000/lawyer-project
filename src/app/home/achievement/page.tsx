import starsRating from '../../../assets/rate-stars.svg';
import logo1 from '../../../assets/Logo.svg';
import logo2 from '../../../assets/Logo-1.svg';
import logo3 from '../../../assets/Logo-2.svg';
import logo4 from '../../../assets/Logo-3.svg';
import logo5  from '../../../assets/Logo-4.svg';
import Image from "next/image";
export default function AchievementPage() {
    return (
        <section className='relative z-50'>
            <div className=' flex flex-col gap-4 items-center justify-center w-full max-w-6xl mx-auto px-4 pt-20 text-heading text-center'>
                <Image src={starsRating} alt="Achievement Image" width={100}  />  
                <h2 className='text-5xl font-serif text-accent'>CONQUISTAS</h2>
                <h3 className='text-accent opacity-30 font-serif text-2xl max-w-120'>SOME INTERNATIONAL AWARDS THAT WE HAVE RECEIVED</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nuama guzi.</p>
                <div className='flex flex-wrap justify-center items-center gap-4 mt-10 max-w-xl'>
                    <Image src={logo1} alt="Achievement Logo 1" className="mb-4 w-[calc(100%/3-30px)]"  />
                    <Image src={logo2} alt="Achievement Logo 2" className="mb-4 w-[calc(100%/3-30px)]" />
                    <Image src={logo3} alt="International Award Logo 3 - Excellence in Law" className="mb-4 w-[calc(100%/3-30px)]"  />
                    <Image src={logo4} alt="International Award Logo 4 - Global Legal Award" className="mb-4 w-[calc(100%/3-30px)]" />
                    <Image src={logo5} alt="International Award Logo 5 - Outstanding Service" className="mb-4 w-[calc(100%/3-30px)]" />
                </div>
            </div>
            <div className='w-50 h-50 lg:w-80 lg:h-80 bg-accent blur-3xl rounded-full  opacity-50 absolute -left-30 lg:-left-50 bottom-15 '></div>
            <div className='w-40 h-40 lg:w-65 lg:h-65 bg-accent blur-3xl rounded-full opacity-50 absolute -right-30 lg:-right-50 top-20  '></div>

        </section>
    );
}