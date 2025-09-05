import { JobTrackerPage } from "../JobTrackerPage";
import { screen, userEvent, renderWithProvider, queryByTestId } from "@/lib/test-utils";

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

  test("applies and then clears the filter when the same filter category button is clicked twice", async () => {
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

    await user.click(screen.getByTestId(/applied button/i));

    expect(screen.getAllByText(/junior front end developer/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText("Front End Developer")[0]).toBeInTheDocument();
  });

  test("renders dialog when add job button is clicked", async () => {
    renderWithProvider(
      <JobTrackerPage />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: false,
            activeCategory: "all",
            filterCategories: [],
            jobs: [],
          }
        },
        storeType: "integration"
      }
    );

    expect(screen.queryByTestId(/dialog/i)).not.toBeInTheDocument();

    await user.click(screen.getByText(/add job/i));

    expect(screen.queryByTestId(/dialog/i)).toBeInTheDocument();
  });

  test("renders new job in the job table when all dialog's required inputs are filled and then save job button is clicked", async () => {
    renderWithProvider(
      <JobTrackerPage />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            activeCategory: "all",
            filterCategories: [
              { category: "BOOKMARKED" },
              { category: "APPLIED" },
            ],
            jobs: [],
          }
        },
        storeType: "integration"
      }
    );

    // CTA element displayed because no jobs exist, so the table is not rendered
    expect(screen.getByText(/your dashboard’s a bit lonely/i)).toBeInTheDocument();
    expect(screen.queryAllByRole("table")[0]).toBeUndefined();

    await user.type(screen.getByLabelText(/job title/i), "Front End Developer");
    await user.type(screen.getByLabelText(/job url/i), "https://www.remoterecruitzt.com/");
    await user.type(screen.getByLabelText(/job location/i), "Munchen - Remote");
    await user.type(screen.getByLabelText(/company name/i), "Bay AI");
    await user.selectOptions(screen.getByLabelText(/status/i), "Applied");
    await user.click(screen.getByRole("button", { name: /save job/i }));

    expect(screen.queryByText(/your dashboard’s a bit lonely/i)).not.toBeInTheDocument();
    expect(screen.getAllByRole("table")[0]).toBeInTheDocument();

    expect(screen.getAllByRole("button", { name: /edit/i })[0]).toBeInTheDocument();
    expect(screen.getAllByText(/front end developer/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/munchen - remote/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/bay ai/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/applied/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(new Date().toLocaleDateString("en-GB"))[0]).toBeInTheDocument();
  });

  test("renders job info when job row is clicked", async () => {
    renderWithProvider(
      <JobTrackerPage />,
      {
        preloadedState: {
          jobTracker: {
            isInfoOpen: false,
            activeCategory: "all",
            filterCategories: [],
            jobs: [
              {
                id: 1,
                jobTitle: "Junior Front End Developer",
                jobUrl: "https://www.remoterocketship.com/jobs/front-end-developer/",
                jobLocation: "Manchester - Remote",
                companyName: "Link AI",
                status: "Applied",
                dateSaved: "25/08/2025",
              },
            ]
          }
        },
        storeType: "integration"
      }
    );

    expect(screen.queryByTestId(/job info/i)).not.toBeInTheDocument();

    await user.click(screen.getAllByRole("row")[1]);

    expect(screen.getByTestId(/job info/i)).toBeInTheDocument();
  });

  test("renders dialog with delete button when edit button in job row is clicked", async () => {
    renderWithProvider(
      <JobTrackerPage />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: false,
            activeCategory: "all",
            filterCategories: [],
            jobs: [
              {
                id: 1,
                jobTitle: "Junior Front End Developer",
                jobUrl: "https://www.remoterocketship.com/jobs/front-end-developer/",
                jobLocation: "Manchester - Remote",
                companyName: "Link AI",
                status: "Applied",
                dateSaved: "25/08/2025",
              },
            ],
            selectedJob: null,
          }
        },
        storeType: "integration"
      }
    );

    expect(screen.queryByTestId(/dialog/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/delete job/i)).not.toBeInTheDocument();

    await user.click(screen.getAllByRole("button", { name: /edit/i })[0]);

    expect(screen.getByTestId(/dialog/i)).toBeInTheDocument();
    expect(screen.getByText(/delete job/i)).toBeInTheDocument();
  });
});