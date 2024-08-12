import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Import jest-dom for additional matchers
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm [Your Name]`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm \[your name\]/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text", () => {
  render(<App />);
  const image = screen.getByRole("img", { name: /your name/i });
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/your biography text here/i);
  expect(paragraph).toBeInTheDocument();
});

test("displays a link to GitHub with the correct href", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
});

test("displays a link to LinkedIn with the correct href", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
});
