import ThemeToggle from "../ThemeToggle";
import { render, screen, userEvent } from "@/lib/test-utils";

describe("ThemeToggle component", () => {
  test("renders ThemeToggle component with correct elements", () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button"));
    expect(screen.getByTestId(/moon icon/i)).toBeInTheDocument();
  });

  test("toggle icon when theme toggle button clicked", async () => {
    render(<ThemeToggle />);

    const user = userEvent.setup();

    expect(screen.getByTestId(/moon icon/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/sun icon/i)).not.toBeInTheDocument();

    await user.click(screen.getByRole("button"));

    expect(screen.queryByTestId(/moon icon/i)).not.toBeInTheDocument();
    expect(screen.getByTestId(/sun icon/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button"));

    expect(screen.getByTestId(/moon icon/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/sun icon/i)).not.toBeInTheDocument();
  });
});