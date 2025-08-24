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
});