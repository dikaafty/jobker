import Dialog from "../Dialog";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";

describe("Dialog component", () => {
  test("updates Redux store Status state when Status select value changes", async () => {
    const { store } = renderWithProvider(
      <Dialog />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [
              { category: "BOOKMARKED" },
              { category: "APPLYING" },
            ],
          }
        },
        storeType: "integration"
      }
    );
    
    const user = userEvent.setup();

    expect(store.getState().jobTracker.status).toBe("Bookmarked");

    await user.selectOptions(screen.getByLabelText(/status/i), "Applying");

    expect(store.getState().jobTracker.status).toBe("Applying");
  });
});