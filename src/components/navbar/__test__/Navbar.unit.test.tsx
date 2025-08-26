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
});