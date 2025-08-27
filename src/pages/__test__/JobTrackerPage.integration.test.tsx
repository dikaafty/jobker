import { JobTrackerPage } from "../JobTrackerPage";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";

describe("JobTrackerPage component", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  test("filters job listings by selected category when the filter category button is clicked", async () => {
    renderWithProvider(
      <JobTrackerPage />,
      {
        preloadedState: {
          jobTracker: {
            activeCategory: "all",
            filterCategories: [
              { id: 1, category: "BOOKMARKED", numberOfItems: 1 },
              { id: 2, category: "APPLYING", numberOfItems: 0 },
              { id: 3, category: "APPLIED", numberOfItems: 1 },
              { id: 4, category: "INTERVIEWING", numberOfItems: 0 },
              { id: 5, category: "NEGOTIATING", numberOfItems: 0 },
              { id: 6, category: "ACCEPTED", numberOfItems: 0 },
            ],
            jobs: [
              {
                id: 1,
                jobTitle: "Junior Front End Developer",
                jobUrl: "https://www.remoterocketship.com/jobs/front-end-developer/",
                jobLocation: "Manchaster - Remote",
                companyName: "Link AI",
                status: "Applied",
                dateSaved: "25/08/2025",
              },
              {
                id: 2,
                jobTitle: "Front End Developer",
                jobUrl: "https://www.ziprrecuite.com/",
                jobLocation: "Abu Dhabi - Remote",
                companyName: "Kara AI",
                status: "Bookmarked",
                dateSaved: "27/08/2025",
              }
            ],
          }
        },
        storeType: "integration"
      }
    );

    expect(screen.getAllByText(/junior front end developer/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText("Front End Developer")[0]).toBeInTheDocument();

    await user.click(screen.getByTestId(/applied button/i));

    expect(screen.getAllByText(/junior front end developer/i)[0]).toBeInTheDocument();
    expect(screen.queryAllByText("Front End Developer")[0]).toBeUndefined();

    await user.click(screen.getByTestId(/bookmarked button/i));

    expect(screen.queryAllByText(/junior front end developer/i)[0]).toBeUndefined();
    expect(screen.getAllByText("Front End Developer")[0]).toBeInTheDocument();
  });
});