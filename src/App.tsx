import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "@/pages/Homepage";
import JobTrackerPage from "@/pages/JobTrackerPage";
import Navbar from "@/components/navbar/Navbar";
import AboutPage from "@/pages/AboutPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<Homepage />} />
      <Route path="/job" element={<JobTrackerPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}

export default App;