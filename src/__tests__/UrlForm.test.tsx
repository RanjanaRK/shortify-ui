import { render, screen } from "@testing-library/react";
import UrlShortenForm from "@/components/UrlShortenForm";

jest.mock("@/hooks/action", () => ({
  urlRefetchAction: jest.fn(),
}));

jest.mock("@/lib/api/url", () => ({
  UrlShorten: jest.fn(),
}));

describe("UrlShortenForm", () => {
  it("renders input and submit button", () => {
    render(<UrlShortenForm />);

    expect(
      screen.getByPlaceholderText("https://example.com/very-long-url"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /shorten url/i }),
    ).toBeInTheDocument();
  });
});
