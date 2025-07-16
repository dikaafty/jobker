import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "@/components/Homepage";
import JobTrackerSection from "@/components/JobTrackerSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<HeroSection />} />
          <Route path="/job" element={<JobTrackerSection />} />
          <Route path="/about" element={<AboutSection />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;