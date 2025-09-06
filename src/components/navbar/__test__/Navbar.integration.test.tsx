import { renderWithRouter, screen, userEvent } from "@/lib/test-utils";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "@/pages/Homepage";
import { JobTrackerPage } from "@/pages/JobTrackerPage";
import { AboutPage } from "@/pages/AboutPage";
import Navbar from "../Navbar";

describe("Navbar component", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  test("navigates to home page when home link is clicked", async () => {
    renderWithRouter(
      <>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/job" element={<JobTrackerPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </>,
      {
        initialEntries: ["/about"],
      }
    );

    expect(screen.getByText(/track smarter/i)).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: "Home" }));
    
    expect(screen.getByText((_, element) => {
      return element?.textContent.replace(/\s+/g, " ").trim() ==="YOUR CAREER DASHBOARD STARTS HERE"
    })).toBeInTheDocument();
  });
});