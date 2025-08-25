import JobTable from "../JobTable";
import { screen, renderWithProvider } from "@/lib/test-utils";

describe("JobTable component", () => {
  test("renders CTA instead of job table when has no jobs", () => {
    renderWithProvider(
      <JobTable />,
      {
        preloadedState: {
          jobTracker: {
            jobs: [],
            activeCategory: "all",
          }
        }
      }
    );

    expect(screen.getByText("Your dashboard’s a bit lonely. Add your first job and get tracking!")).toBeInTheDocument();
    expect(screen.queryAllByRole("table")).not.toHaveLength(3);
  });

  test("renders job table instead of CTA when has jobs", () => {
    renderWithProvider(
      <JobTable />,
      {
        preloadedState: {
          jobTracker: {
            jobs: [
              {
                id: 1,
                jobTitle: "Front End Developer",
                jobUrl: "https://www.remoterocketship.com/jobs/frontend-developer",
                jobLocation: "Remote",
                companyName: "Link AI",
                status: "Applied",
              }
            ],
            activeCategory: "all",
          }
        }
      }
    );

    expect(screen.queryByText("Your dashboard’s a bit lonely. Add your first job and get tracking!")).not.toBeInTheDocument();
    expect(screen.getAllByRole("table")).toHaveLength(3);
  });

  test("renders desktop job table with correct elements", () => {
    renderWithProvider(
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
                dateApplied: "15/08/2025",
                deadline: "25/08/2025",
              }
            ],
            activeCategory: "all",
          }
        }
      }
    );

    expect(screen.getAllByRole("table")[0]).toBeInTheDocument();
    
    expect(screen.getAllByText(/job position/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/company/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/location/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/status/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/date saved/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/date applied/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/deadline/i)[0]).toBeInTheDocument();

    expect(screen.getAllByRole("button", { name: /edit/i })[0]).toBeInTheDocument();
    expect(screen.getAllByText(/front end developer/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/link ai/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/applied/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/remote/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText("14/08/2025")[0]).toBeInTheDocument();
    expect(screen.getAllByText("15/08/2025")[0]).toBeInTheDocument();
    expect(screen.getAllByText("25/08/2025")[0]).toBeInTheDocument();
  });
});