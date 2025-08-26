import ThemeToggle from "../ThemeToggle";
import { render, screen } from "@/lib/test-utils";

describe("ThemeToggle component", () => {
  test("renders ThemeToggle component with correct elements", () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button"));
  });
});