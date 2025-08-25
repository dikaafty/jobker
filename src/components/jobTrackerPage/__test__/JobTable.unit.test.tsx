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
});