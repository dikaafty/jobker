import Homepage from "@/pages/Homepage";
import NotFound from "@/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobTrackerSection from "@/components/JobTrackerSection";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="*" element={<NotFound />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;