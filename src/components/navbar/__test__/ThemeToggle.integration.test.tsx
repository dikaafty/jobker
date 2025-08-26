import ThemeToggle from "../ThemeToggle";
import { screen, userEvent, render } from "@/lib/test-utils";

describe("ThemeToggle component", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();

    localStorage.clear();
    jest.spyOn(window.localStorage.__proto__, "setItem");
    jest.spyOn(window.localStorage.__proto__, "getItem");
  });

  test("toggles theme and stores value in localStorage", async () => {
    render(<ThemeToggle />);

    expect(screen.getByTestId(/moon icon/i)).toBeInTheDocument();
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "dark");

    await user.click(screen.getByRole("button"));

    expect(screen.getByTestId(/sun icon/i)).toBeInTheDocument();
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "light");

    expect(localStorage.getItem("theme")).toBe("light");
  });
});