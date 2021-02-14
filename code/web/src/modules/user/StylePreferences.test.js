import React from "react";
import StylePreferences from "./StylePreferences";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";

describe("StylePreferences", () => {
  it("should render header correctly", () => {
    render(
      <Provider>
        <StylePreferences />
      </Provider>
    );
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("should render questions correctly", () => {
    render(
      <Provider>
        <StylePreferences />
      </Provider>
    );
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

  it("should be able to click submit if ALL images have been selected", () => {
    render(
      <Provider>
        <StylePreferences />
      </Provider>
    );
    fireEvent.click(
      screen.getByAltText("/images/stock/survey/mountains-A.jpg")
    );
    fireEvent.click(screen.getByAltText("/images/stock/survey/spicy-B.jpg"));
    fireEvent.click(screen.getByAltText("/images/stock/survey/burger-C.jpg"));
    fireEvent.click(screen.getByAltText("/images/stock/survey/house-D.jpg"));

    fireEvent.click(screen.getByText("Submit Survey"));

    // expect(addStyle).toHaveBeenCalledWith("casual, classy, casual, casual");
    // expect the modal to show up with the style summary
  });

  it("should not be able to click submit if NO images have been selected", () => {
    window.alert = jest.fn();
    render(
      <Provider>
        <StylePreferences />
      </Provider>
    );

    fireEvent.click(screen.getByText("Submit Survey"));

    expect(window.alert).toHaveBeenCalled();
  });

  it("should not be able to click submit if only 1 image has been selected", () => {
    window.alert = jest.fn();
    render(
      <Provider>
        <StylePreferences />
      </Provider>
    );
    fireEvent.click(screen.getByAltText("/images/stock/survey/spicy-B.jpg"));

    fireEvent.click(screen.getByText("Submit Survey"));

    expect(window.alert).toHaveBeenCalled();
  });

  it("should not be able to click submit if only 2 images have been selected", () => {
    window.alert = jest.fn();
    render(
      <Provider>
        <StylePreferences />
      </Provider>
    );
    fireEvent.click(
      screen.getByAltText("/images/stock/survey/mountains-A.jpg")
    );
    fireEvent.click(screen.getByAltText("/images/stock/survey/spicy-B.jpg"));

    fireEvent.click(screen.getByText("Submit Survey"));

    expect(window.alert).toHaveBeenCalled();
  });

  it("should not be able to click submit if only 3 images have been selected", () => {
    window.alert = jest.fn();
    render(
      <Provider>
        <StylePreferences />
      </Provider>
    );
    fireEvent.click(
      screen.getByAltText("/images/stock/survey/mountains-A.jpg")
    );
    fireEvent.click(screen.getByAltText("/images/stock/survey/spicy-B.jpg"));
    fireEvent.click(screen.getByAltText("/images/stock/survey/burger-C.jpg"));

    fireEvent.click(screen.getByText("Submit Survey"));

    expect(window.alert).toHaveBeenCalled();
  });
});
