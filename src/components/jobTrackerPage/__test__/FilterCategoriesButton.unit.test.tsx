import FilterCategoriesButton from "../FilterCategoriesButton";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";

describe("FilterCategoriesButton component", () => {
  test("renders FilterCategoriesButton component with correct elements", () => {
    renderWithProvider(
      <FilterCategoriesButton />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [
              { id: 1, category: "BOOKMARKED", numberOfItems: 0 },
              { id: 2, category: "APPLYING", numberOfItems: 0 },
              { id: 3, category: "APPLIED", numberOfItems: 0 },
              { id: 4, category: "INTERVIEWING", numberOfItems: 0 },
              { id: 5, category: "NEGOTIATING", numberOfItems: 0 },
              { id: 6, category: "ACCEPTED", numberOfItems: 0 },
            ],
          }
        }
      }
    );

    expect(screen.getAllByText(/bookmarked/i)).toHaveLength(2);
    expect(screen.getAllByText(/applying/i)).toHaveLength(2);
    expect(screen.getAllByText(/applied/i)).toHaveLength(2);
    expect(screen.getAllByText(/interviewing/i)).toHaveLength(2);
    expect(screen.getAllByText(/negotiating/i)).toHaveLength(2);
    expect(screen.getAllByText(/accepted/i)).toHaveLength(2);
  });

  test("toggles bg-secondary on desktop filter category button when clicked and has item", async () => {
    renderWithProvider(
      <FilterCategoriesButton />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [
              { id: 1, category: "BOOKMARKED", numberOfItems: 1 },
            ],
          }
        }
      }
    );

    const user = userEvent.setup();

    expect(screen.getByTestId(/bookmarked button/i)).not.toHaveClass("bg-secondary");

    await user.click(screen.getByTestId(/bookmarked button/i));

    expect(screen.getByTestId(/bookmarked button/i)).toHaveClass("bg-secondary");

    await user.click(screen.getByTestId(/bookmarked button/i));

    expect(screen.getByTestId(/bookmarked button/i)).not.toHaveClass("bg-secondary");
  });
});