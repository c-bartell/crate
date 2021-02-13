import React from "react";
import StylePreferences from "./StylePreferences";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { addStyle } from "./api/actions";
jest.mock("./api/actions");

describe("POST", () => {
  addStyle.mockResolvedValue({
    data: {
      userAddStyle: {
        style: "classy",
      },
    },
  });

  it("should make successful POST", () => {
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

    expect(addStyle).toHaveBeenCalled();
  });
});
