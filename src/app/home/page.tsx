import HeroPage from "./hero/page";
import AchievementPage from "./achievement/page";
import Whatwedo from "./whatWeDo/page";
import LawServices from "./lawServices/page";
import TestimonialsPage from "./testimonial/page";



export default function Home() {
  return (
    <div>
      <HeroPage />
      <Whatwedo />
      <LawServices />
      <TestimonialsPage />
      <AchievementPage />
    </div>
  );
}
