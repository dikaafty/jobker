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
});