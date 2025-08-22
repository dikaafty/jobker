import HeroSection from "../HeroSection";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

const renderHeroSection = (): void => {
  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>
  );
}

describe("HeroSection Component", () => {
  test("renders HeroSection with correct elements", () => {
    renderHeroSection();

    expect(screen.getByText("YOUR CAREER")).toBeInTheDocument();
    expect(screen.getByText("DASHBOARD STARTS HERE")).toBeInTheDocument();
    expect(screen.getByText("Organize your applications, monitor progress, and take control of your career."))
    .toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get Started" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About Us" })).toBeInTheDocument();
  });
});