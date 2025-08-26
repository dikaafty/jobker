import AboutContent from "../AboutContent";
import { render, screen } from "@/lib/test-utils";

describe("AboutContent component", () => {
  test("renders AboutContent component with correct elements", () => {
    render(<AboutContent />);

    expect(screen.getByText(/about/i)).toBeInTheDocument();

    expect(screen.getByText(/your career./i)).toBeInTheDocument();
    expect(screen.getByText(/organized./i)).toBeInTheDocument();

    expect(screen.getByText(/jobker helps you take control/i)).toBeInTheDocument();
    expect(screen.getByText(/with jobker/i)).toBeInTheDocument();
    expect(screen.getByText(/add job applications/i)).toBeInTheDocument();
    expect(screen.getByText(/quickly log/i)).toBeInTheDocument();
    expect(screen.getByText(/track your progress/i)).toBeInTheDocument();
    expect(screen.getByText(/easily manage/i)).toBeInTheDocument();
    expect(screen.getByText(/stay focused/i)).toBeInTheDocument();
    expect(screen.getByText(/jobker helps you prioritize/i)).toBeInTheDocument();
    expect(screen.getByText(/no more clutter/i)).toBeInTheDocument();
    expect(screen.getByText(/just clarity/i)).toBeInTheDocument();
  });
});