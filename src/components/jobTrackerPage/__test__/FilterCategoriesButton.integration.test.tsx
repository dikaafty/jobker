import FilterCategoriesButton from "../FilterCategoriesButton";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";

describe("FilterCategoriesButton component", () => {
  test("updates Redux store activeCategory state when mobile filter category select options selected", async () => {
    const { store } = renderWithProvider(
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
            activeCategory: "all",
          }
        },
        storeType: "integration"
      }
    );

    const user = userEvent.setup();

    expect(store.getState().jobTracker.activeCategory).toBe("all");

    await user.selectOptions(screen.getByRole("combobox"), "Bookmarked");

    expect(store.getState().jobTracker.activeCategory).toBe("Bookmarked");
  });
});