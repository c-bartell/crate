import React from "react";
import StylePreferences from "./StylePreferences";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("StylePreferences", () => {

  it("should render header correctly", () => {
    render(<StylePreferences />);
    expect(screen.getByText("Style Survey")).toBeInTheDocument();
  });

  it("should render questions correctly", () => {
    render(<StylePreferences />);
    expect(screen.getByText("Favorite vacation destination?")).toBeInTheDocument();
    expect(screen.getByText("Are you more of a spicy, sweet or sour person?")).toBeInTheDocument();
    expect(screen.getByText("You're hungry, what restaurant do you go to?")).toBeInTheDocument();
    expect(screen.getByText("Which would you pick as your dream home?")).toBeInTheDocument();
  });

});
