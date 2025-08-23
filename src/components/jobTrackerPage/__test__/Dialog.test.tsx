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
});