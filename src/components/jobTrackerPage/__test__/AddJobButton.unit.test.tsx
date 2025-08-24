import AddJobButton from "../AddJobButton";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";
import { setIsOpen } from "@/features/user/jobTrackerSlice";

describe("AddJobButton component", () => {
  test("renders AddJobButton with correct elements", () => {
    renderWithProvider(
      <AddJobButton />,
      {
        preloadedState: {
          jobTracker: {
            jobs: [],
            activeCategory: "all"
          }
        }
      }
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("dispatches setIsOpen reducer when Add Job button clicked", async () => {
    const { store } = renderWithProvider(
      <AddJobButton />,
      {
        preloadedState: {
          jobTracker: {
            jobs: [],
            activeCategory: "all"
          }
        }
      }
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /add job/i }));

    expect(store.dispatch).toHaveBeenCalledWith(setIsOpen());
  });
});