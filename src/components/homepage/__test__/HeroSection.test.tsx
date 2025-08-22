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
  
});