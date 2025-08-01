import { NavLink } from "react-router-dom";
import HeroSection from "@/components/homepage/HeroSection";
import transition from "@/lib/transition";

const Homepage = () => {
  return (
    <>
      <HeroSection />
    </>
  )
}

const HomepageWithTransition = transition(Homepage);
export default Homepage;