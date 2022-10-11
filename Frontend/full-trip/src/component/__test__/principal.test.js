import { render, screen, cleanup } from "@testing-library/react";
import App from "../principal";
import "@testing-library/jest-dom";

test("should render text component", () => {
    render(<App />);
      const title = screen.getByText(/FULL TRIP/i)
      expect(title).toBeInTheDocument();
  });