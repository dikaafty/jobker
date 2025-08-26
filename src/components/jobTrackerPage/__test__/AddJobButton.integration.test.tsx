import AddJobButton from "../AddJobButton";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";

describe("AddJobButton component", () => {
  test("updates Redux store isOpen state when add job button clicked", async () => {
    const { store } = renderWithProvider(
      <AddJobButton />,
      {
        preloadedState: {
          jobTracker: {
            jobs: [],
            activeCategory: "all",
            isOpen: false,
          }
        },
        storeType: "integration"
      }
    );

    const user = userEvent.setup();

    expect(store.getState().jobTracker.isOpen).toBe(false);

    await user.click(screen.getAllByRole("button", { name: /add job/i })[0]);

    expect(store.getState().jobTracker.isOpen).toBe(true);
  });
});