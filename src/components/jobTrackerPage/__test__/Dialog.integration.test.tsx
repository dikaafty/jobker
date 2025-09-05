import Dialog from "../Dialog";
import { screen, userEvent, renderWithProvider, fireEvent } from "@/lib/test-utils";

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

  test("updates Redux store dateApplied state when Date Applied input's value changed", async () => {
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
              { category: "APPLIED" },
            ],
          }
        },
        storeType: "integration"
      }
    );

    const user = userEvent.setup();

    expect(store.getState().jobTracker.dateApplied).toBe("");

    await user.selectOptions(screen.getByLabelText(/status/i), "Applied");
    fireEvent.change(screen.getByLabelText(/date applied/i), { target: { value: "2025-08-04" } });
    
    expect(store.getState().jobTracker.dateApplied).toBe("2025-08-04");
  });

  test("updates Redux store deadline state when Deadline input's value changed", () => {
    const { store } = renderWithProvider(
      <Dialog />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [],
          }
        },
        storeType: "integration"
      }
    );

    expect(store.getState().jobTracker.deadline).toBe("");

    fireEvent.change(screen.getByLabelText(/deadline/i), { target: { value: "2025-08-24" } });
    
    expect(store.getState().jobTracker.deadline).toBe("2025-08-24");
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

  test("updates Redux store jobs state and closes the Dialog when required inputs filled and then Save Job button clicked", async () => {
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
            ],
            jobTitle: "",
            jobUrl: "",
            jobLocation: "",
            jobDescription: "",
            companyName: "",
            status: "Bookmarked",
          }
        },
        storeType: "integration"
      }
    );

    const user = userEvent.setup();

    expect(screen.getByTestId("dialog")).toBeInTheDocument();
    expect(store.getState().jobTracker.jobs).toEqual([]);

    await user.type(screen.getByLabelText(/job title/i), "Front End Developer");
    await user.type(screen.getByLabelText(/job url/i), "https://www.remoterecruitzt.com/");
    await user.type(screen.getByLabelText(/job location/i), "Munchen - Remote");
    await user.type(screen.getByLabelText(/company name/i), "Bay AI");
    await user.selectOptions(screen.getByLabelText(/status/i), "Applied");
    await user.click(screen.getByRole("button", { name: /save job/i }));

    expect(screen.queryByTestId("dialog")).not.toBeInTheDocument();
    expect(store.getState().jobTracker.jobs).toEqual([{
      id: 1,
      jobTitle: "Front End Developer",
      jobUrl: "https://www.remoterecruitzt.com/",
      jobLocation: "Munchen - Remote",
      jobDescription: "",
      companyName: "Bay AI",
      status: "Applied",
      dateSaved: new Date().toLocaleDateString("en-GB"),
      dateApplied: "",
      deadline: "",
    }]);
  });
});