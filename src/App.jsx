import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import AccessibleRoutePage from "./pages/AccessibleRoutePage";
import GrowthPilotPage from "./pages/GrowthPilotPage";
import ThinkingLogPage from "./pages/ThinkingLogPage";
import MobileBankPage from "./pages/MobileBankPage";

function App() {
  return (
    <BrowserRouter>
      <main className="portfolio-shell">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/growthpilot" element={<GrowthPilotPage />} />
          <Route path="/thinking-log" element={<ThinkingLogPage />} />
          <Route path="/mobile-bank" element={<MobileBankPage />} />
          <Route path="/accessible-route" element={<AccessibleRoutePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;