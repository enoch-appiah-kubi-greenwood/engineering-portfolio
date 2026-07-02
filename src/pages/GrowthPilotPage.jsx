import growthPilot from "../data/growthpilot";

import HeroSection from "../components/caseStudy/sections/HeroSection";
import ProblemSection from "../components/caseStudy/sections/ProblemSection";
import SolutionSection from "../components/caseStudy/sections/SolutionSection";
import ArchitectureSection from "../components/caseStudy/sections/ArchitectureSection";
import EvolutionSection from "../components/caseStudy/sections/EvolutionSection";
import DecisionSection from "../components/caseStudy/sections/DecisionSection";
import JournalSection from "../components/caseStudy/sections/JournalSection";
import CapabilitiesSection from "../components/caseStudy/sections/CapabilitiesSection";
import FutureSection from "../components/caseStudy/sections/FutureSection";

function GrowthPilotPage() {
  return (
    <>
      <HeroSection hero={growthPilot.hero} />
      <ProblemSection problem={growthPilot.problem} />
      <SolutionSection solution={growthPilot.solution} />
      <ArchitectureSection architecture={growthPilot.architecture} />
      <EvolutionSection evolution={growthPilot.evolution} />
      <DecisionSection decisions={growthPilot.engineeringDecisions} />
      <JournalSection journal={growthPilot.journal} />
      <CapabilitiesSection capabilities={growthPilot.capabilities} />
      <FutureSection futureVision={growthPilot.futureVision} />
    </>
  );
}

export default GrowthPilotPage;