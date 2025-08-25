import JobInfo from "../JobInfo";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";

describe("JobInfo component", () => {
  test("updates Redux store isInfoOpen state and closes the JobInfo when close button clicked", async () => {
    const { store } = renderWithProvider(
      <JobInfo />,
      {
        preloadedState: {
          jobTracker: {
            isInfoOpen: true,
            selectedJob: {
              jobTitle: "Front-End Developer",
              jobUrl: "https://www.remoterocketship.com/jobs/frontend-developer",
              jobLocation: "Remote",
              companyName: "Link AI",
              status: "Bookmarked",
            },
          }
        },
        storeType: "integration"
      }
    );

    const user = userEvent.setup();

    expect(screen.getByTestId(/job info/i)).toBeInTheDocument();
    expect(store.getState().jobTracker.isInfoOpen).toBe(true);

    await user.click(screen.getByRole("button", { name: /close/i }));

    expect(screen.queryByTestId(/job info/i)).not.toBeInTheDocument();
    expect(store.getState().jobTracker.isInfoOpen).toBe(false);
  });
});