import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import JobTrackerPage from "@/pages/JobTrackerPage";
import Navbar from "@/components/Navbar";
import AboutPage from "@/pages/AboutPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/job" element={<JobTrackerPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;