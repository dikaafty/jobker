import { JobTrackerPage } from "../JobTrackerPage";
import { screen, userEvent, renderWithProvider } from "@/lib/test-utils";

describe("JobTrackerPage component", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });
});