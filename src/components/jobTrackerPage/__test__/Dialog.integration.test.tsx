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

  test("displays Date Applied input if Status state's value is not Bookmarked or Applying", async () => {
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
              { category: "APPLIED" },
              { category: "INTERVIEWING" },
            ],
          }
        },
        storeType: "integration"
      }
    );

    const user = userEvent.setup();

    expect(store.getState().jobTracker.status).toBe("Bookmarked");
    expect(screen.queryByLabelText(/date applied/i)).not.toBeInTheDocument();

    await user.selectOptions(screen.getByLabelText(/status/i), "Applied");

    expect(store.getState().jobTracker.status).toBe("Applied");
    expect(screen.queryByLabelText(/date applied/i)).toBeInTheDocument();

    await user.selectOptions(screen.getByLabelText(/status/i), "Applying");

    expect(store.getState().jobTracker.status).toBe("Applying");
    expect(screen.queryByLabelText(/date applied/i)).not.toBeInTheDocument();

    await user.selectOptions(screen.getByLabelText(/status/i), "Interviewing");

    expect(store.getState().jobTracker.status).toBe("Interviewing");
    expect(screen.queryByLabelText(/date applied/i)).toBeInTheDocument();
  });

  test("updates Redux store isOpen state and closes the Dialog when Cancel button clicked", async () => {
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

    expect(screen.getByTestId("dialog")).toBeInTheDocument();
    expect(store.getState().jobTracker.isOpen).toBe(true);

    await user.click(screen.getByRole("button", { name: /cancel/i }));

    expect(screen.queryByTestId("dialog")).not.toBeInTheDocument();
    expect(store.getState().jobTracker.isOpen).toBe(false);
  });
});