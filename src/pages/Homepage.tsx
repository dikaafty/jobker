import HeroSection from "@/components/homepage/HeroSection";
import transition from "@/lib/transition";

export const Homepage = () => {
  return (
    <>
      <HeroSection />
    </>
  )
}

const HomepageWithTransition = transition(Homepage);
export default HomepageWithTransition;