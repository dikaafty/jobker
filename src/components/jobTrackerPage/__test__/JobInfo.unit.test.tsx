import JobInfo from "../JobInfo";
import { screen, renderWithProvider } from "@/lib/test-utils";

describe("JobInfo component", () => {
  test("JobInfo component will not be rendered if isInfoOpen state's value is false", () => {
    renderWithProvider(
      <JobInfo />,
      {
        preloadedState: {
          jobTracker: {
            isInfoOpen: false,
            selectedJob: null,
          }
        }
      }
    );

    expect(screen.queryByTestId(/job info/i)).not.toBeInTheDocument();
  });
});