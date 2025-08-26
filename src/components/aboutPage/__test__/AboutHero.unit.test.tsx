import AboutHero from "../AboutHero";
import { render, screen } from "@/lib/test-utils";

describe("AboutHero component", () => {
  test("render AboutHero component with correct elements", () => {
    render(<AboutHero />);

    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/track smarter/i)).toBeInTheDocument();
    expect(screen.getByText(/land faster/i)).toBeInTheDocument();
    expect(screen.getByText(/jobker helps you organize/i)).toBeInTheDocument();
  });
});