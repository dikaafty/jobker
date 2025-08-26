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
});