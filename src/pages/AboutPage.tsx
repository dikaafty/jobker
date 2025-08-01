import AboutHero from "@/components/aboutPage/AboutHero";
import AboutContent from "@/components/aboutPage/AboutContent";
import transition from "@/lib/transition";

const AboutPage = () => {
  return (
    <section>
      <AboutHero />
      <AboutContent />
    </section>
  )
}

const AboutPageWithTransition = transition(AboutPage);
export default AboutPage;