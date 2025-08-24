import Dialog from "../Dialog";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";

describe("Dialog component", () => {
  test("Dialog component will not be rendered if isOpen state's value is false", () => {
    renderWithProvider(
      <Dialog />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: false,
            selectedJob: null,
            jobs: [],
          }
        }
      }
    );

    expect(screen.queryByTestId("dialog")).not.toBeInTheDocument();
  });

  test("renders Dialog with correct elements if isOpen state's value is true", () => {
    renderWithProvider(
      <Dialog />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [],
          }
        }
      }
    );

    expect(screen.getByTestId("dialog")).toBeInTheDocument();
    expect(screen.getByText(/add new job/i)).toBeInTheDocument();
    expect(screen.getAllByText("*")).toHaveLength(5);

    expect(screen.getByText(/job title/i)).toBeInTheDocument();
    expect(screen.getByText(/job url/i)).toBeInTheDocument();
    expect(screen.getByText(/job location/i)).toBeInTheDocument();
    expect(screen.getByText(/company name/i)).toBeInTheDocument();
    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/deadline/i)).toBeInTheDocument();
    expect(screen.getByText(/job description/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/job title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/job url/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/job location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/deadline/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/job description/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save job/i })).toBeInTheDocument();
  });

  test("Job Title input can be populated", async () => {
    renderWithProvider(
      <Dialog />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [],
          }
        }
      }
    );

    const user = userEvent.setup();

    expect(screen.getByLabelText(/job title/i)).toHaveValue("");

    await user.type(screen.getByLabelText(/job title/i), "Front-end Developer");

    expect(screen.getByLabelText(/job title/i)).toHaveValue("Front-end Developer");
  });

  test("Job Url input can be populated", async () => {
    renderWithProvider(
      <Dialog />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [],
          }
        }
      }
    );

    const user = userEvent.setup();

    expect(screen.getByLabelText(/job url/i)).toHaveValue("");

    await user.type(screen.getByLabelText(/job url/i), "https://www.remoterocketship.com/jobs");

    expect(screen.getByLabelText(/job url/i)).toHaveValue("https://www.remoterocketship.com/jobs");
  });

  test("Job Location input can be populated", async () => {
    renderWithProvider(
      <Dialog />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [],
          }
        }
      }
    );

    const user = userEvent.setup();

    expect(screen.getByLabelText(/job location/i)).toHaveValue("");

    await user.type(screen.getByLabelText(/job location/i), "Munchen, Germany");

    expect(screen.getByLabelText(/job location/i)).toHaveValue("Munchen, Germany");
  });

  test("Company Name input can be populated", async () => {
    renderWithProvider(
      <Dialog />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [],
          }
        }
      }
    );

    const user = userEvent.setup();

    expect(screen.getByLabelText(/company name/i)).toHaveValue("");

    await user.type(screen.getByLabelText(/company name/i), "Chaffer Consulting");

    expect(screen.getByLabelText(/company name/i)).toHaveValue("Chaffer Consulting");
  });

  test("Job Description textarea can be populated", async () => {
    renderWithProvider(
      <Dialog />,
      {
        preloadedState: {
          jobTracker: {
            isOpen: true,
            selectedJob: null,
            jobs: [],
            filterCategories: [],
          }
        }
      }
    );

    const user = userEvent.setup();

    expect(screen.getByLabelText(/job description/i)).toHaveValue("");

    await user.type(screen.getByLabelText(/job description/i), "Some description...");

    expect(screen.getByLabelText(/job description/i)).toHaveValue("Some description...");
  });

  test("renders Status select with options", () => {
    renderWithProvider(
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
              { category: "NEGOTIATING" },
              { category: "ACCEPTED" },
            ],
          }
        }
      }
    );

    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();

    // Chech options are in the document
    expect(screen.getByRole("option", { name: "Bookmarked" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Applying" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Applied" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Interviewing" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Negotiating" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Accepted" })).toBeInTheDocument();
  });
});