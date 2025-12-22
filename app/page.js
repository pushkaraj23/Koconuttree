import CravingSection from "@/components/home/CravingSection";
import DishesSection from "@/components/home/DishesSection";
import TopPicksSection from "@/components/home/TopPicksSection";

export default function Home() {
  return (
    <div className=" min-h-screen ">
      <DishesSection />
      <CravingSection />
      <TopPicksSection />
    </div>
  );
}

// Pushing changes to vercel
