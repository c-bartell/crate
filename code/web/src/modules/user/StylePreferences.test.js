import React from "react";
import StylePreferences from "./StylePreferences";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("StylePreferences", () => {
  it("should render header correctly", () => {
    render(<StylePreferences />);
    expect(screen.getByText("Style Survey")).toBeInTheDocument();
  });

  it("should render questions correctly", () => {
    render(<StylePreferences />);
    expect(
      screen.getByText("Favorite vacation destination?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Are you more of a spicy, sweet or sour person?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("You're hungry, what restaurant do you go to?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Which would you pick as your dream home?")
    ).toBeInTheDocument();
  });

  it("should be able to click submit if images have been selected", () => {
    render(<StylePreferences />);
    fireEvent.click(
      screen.getByAltText("/images/stock/survey/mountains-A.jpg")
    );
    fireEvent.click(screen.getByAltText("/images/stock/survey/spicy-B.jpg"));
    fireEvent.click(screen.getByAltText("/images/stock/survey/burger-C.jpg"));
    fireEvent.click(
      screen.getByAltText("/images/stock/survey/apartment-D.jpg")
    );

    fireEvent.click(screen.getByText("Submit Survey"));

    // expect the modal to show up with the style summary
  });

  it("should not be able to click submit if no images have been selected", () => {
    window.alert = jest.fn();
    render(<StylePreferences />);

    fireEvent.click(screen.getByText("Submit Survey"));

    expect(window.alert).toHaveBeenCalled()
  });
});
