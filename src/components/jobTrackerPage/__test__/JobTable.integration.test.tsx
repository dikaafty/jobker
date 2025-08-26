import JobTable from "../JobTable";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";

describe("JobTable component", () => {
  test("updates Redux store isOpen state when edit button clicked", async () => {
    const { store } = renderWithProvider(
      <JobTable />,
      {
        preloadedState: {
          jobTracker: {
            jobs: [
              {
                id: 1,
                jobTitle: "Front End Developer",
                jobLocation: "Remote",
                companyName: "Link AI",
                status: "Applied",
                dateSaved: "14/08/2025",
              }
            ],
            activeCategory: "all",
            isOpen: false,
          }
        },
        storeType: "integration"
      }
    );

    const user = userEvent.setup();

    expect(store.getState().jobTracker.isOpen).toBe(false);

    await user.click(screen.getAllByRole("button", { name: /edit/i })[0]);

    expect(store.getState().jobTracker.isOpen).toBe(true);
  });
});