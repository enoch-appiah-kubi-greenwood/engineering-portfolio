import Hero from "../components/hero/Hero";
import ProjectsSection from "../components/projects/ProjectsSection";
import AboutSection from "../components/about/AboutSection";
import TechnicalExpertise from "../components/home/TechnicalExpertise";
import ContactSection from "../components/contact/ContactSection";
import CurrentlyBuilding from "../components/home/CurrentlyBuilding";
import PresentationSection from "../components/home/PresentationSection";

function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <TechnicalExpertise />
      <CurrentlyBuilding />
      <PresentationSection />
      <ContactSection />
    </>
  );
}

export default HomePage;