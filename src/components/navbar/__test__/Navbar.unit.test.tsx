import Navbar from "../Navbar";
import { screen, renderWithRouter } from "@/lib/test-utils";

describe("Navbar component", () => {
  test("renders desktop navbar with correct elements", () => {
    renderWithRouter(<Navbar />);

    expect(screen.getByRole("link", { name: /jobker/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Track Job" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();

    expect(screen.getAllByRole("button")[1]).toBeInTheDocument(); // <= theme toggle button
  });

  test("renders mobile navbar with correct elements", () => {
    renderWithRouter(<Navbar />);

    expect(screen.getByRole("link", { name: /jobker/i })).toBeInTheDocument();

    expect(screen.getByTestId(/top border/i)).toBeInTheDocument();
    expect(screen.getByTestId(/bottom border/i)).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "HOME" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "TRACK JOB" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "ABOUT" })).toBeInTheDocument();

    expect(screen.getAllByRole("button")[0]).toBeInTheDocument(); // <= menu hamburger
    expect(screen.getAllByRole("button")[1]).toBeInTheDocument(); // <= theme toggle button
  });
});