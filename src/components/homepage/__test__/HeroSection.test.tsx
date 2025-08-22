import HeroSection from "../HeroSection";
import { render, screen, userEvent } from "@/lib/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("HeroSection Component", () => {
  test("renders HeroSection with correct elements", () => {
    expect(screen.getByText("YOUR CAREER")).toBeInTheDocument();
    expect(screen.getByText("DASHBOARD STARTS HERE")).toBeInTheDocument();
    expect(screen.getByText("Organize your applications, monitor progress, and take control of your career."))
    .toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get Started" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About Us" })).toBeInTheDocument();
  });
});