import "@testing-library/jest-dom";
import UrlShortenForm from "@/components/UrlShortenForm";
import { render, screen, fireEvent } from "@testing-library/react";

describe("UrlForm", () => {
  it("shows error for invalid URL", () => {
    render(<UrlShortenForm />);

    fireEvent.change(screen.getByPlaceholderText(/enter url/i), {
      target: { value: "invalid-url" },
    });

    fireEvent.click(screen.getByText(/shorten/i));

    expect(screen.getByText(/invalid url/i)).toBeInTheDocument();
  });
});
