import HeroSection from "../HeroSection";
import { render, screen, userEvent, renderWithRouter } from "@/lib/test-utils";

describe("HeroSection Component", () => {
  test("renders HeroSection with correct elements", () => {
    renderWithRouter(<HeroSection />);

    expect(screen.getByText("YOUR CAREER")).toBeInTheDocument();
    expect(screen.getByText("DASHBOARD STARTS HERE")).toBeInTheDocument();
    expect(screen.getByText("Organize your applications, monitor progress, and take control of your career."))
    .toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get Started" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About Us" })).toBeInTheDocument();
  });

  test("Get Started link points to /job", () => {
    renderWithRouter(<HeroSection />);

    expect(screen.getByRole("link", { name: "Get Started" })).toHaveAttribute("href", "/job");
  });

  test("About Us link points to /about", () => {
    renderWithRouter(<HeroSection />);

    expect(screen.getByRole("link", { name: "About Us" })).toHaveAttribute("href", "/about");
  });
});