import AddJobButton from "../AddJobButton";
import { render, screen, userEvent, renderWithProvider } from "@/lib/test-utils";
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
});