import Whatwedo from "@/components/whatwedo";
import HeroPage from "./hero/page";
import AchievementPage from "./achievement/page";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <Whatwedo />
      <AchievementPage />
    </div>
  );
}
