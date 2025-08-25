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

  test("renders JobInfo with correct element if isInfoOpen state's value is true", () => {
    renderWithProvider(
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
              dateSaved: "04/08/2025",
              dateApplied: "05/08/2025",
              deadline: "25/08/2025",
              jobDescription: "Some description..."
            },
          }
        }
      }
    );

    expect(screen.queryByTestId(/job info/i)).toBeInTheDocument();

    expect(screen.getByText(/job url/i)).toBeInTheDocument();
    expect(screen.getByText(/date saved/i)).toBeInTheDocument();
    expect(screen.getByText(/date applied/i)).toBeInTheDocument();
    expect(screen.getByText(/deadline/i)).toBeInTheDocument();
    expect(screen.getByText(/job description/i)).toBeInTheDocument();

    expect(screen.getByText(/front-end developer/i)).toBeInTheDocument();
    expect(screen.getByText(/link ai/i)).toBeInTheDocument();
    expect(screen.getByText(/bookmarked/i)).toBeInTheDocument();
    expect(screen.getByText(/some description.../i)).toBeInTheDocument();
    expect(screen.getByText("https://www.remoterocketship.com/jobs/frontend-developer")).toBeInTheDocument();
    expect(screen.getByText("Remote")).toBeInTheDocument();
    expect(screen.getByText("04/08/2025")).toBeInTheDocument();
    expect(screen.getByText("05/08/2025")).toBeInTheDocument();
    expect(screen.getByText("25/08/2025")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });
});