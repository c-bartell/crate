import React from "react";
import SurveyCards from "../SurveyCards";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SurveyCards", () => {
  it("should render correctly", () => {
    render(
      <SurveyCards
        images={[
          { id: "casual", src: "/images/stock/survey/mountains-A.jpg" },
          { id: "classy", src: "/images/stock/survey/beach-A.jpg" },
          { id: "edgy", src: "/images/stock/survey/city-A.jpg" },
        ]}
        category={"vacation"}
        onSelect={jest.fn()}
      />
    );
    expect(
      screen.getByAltText("/images/stock/survey/mountains-A.jpg")
    ).toBeInTheDocument();
  });

  it("should be able to be clicked on", () => {
    const mockSelect = jest.fn();
    render(
      <SurveyCards
        images={[
          { id: "casual", src: "/images/stock/survey/mountains-A.jpg" },
          { id: "classy", src: "/images/stock/survey/beach-A.jpg" },
          { id: "edgy", src: "/images/stock/survey/city-A.jpg" },
        ]}
        category={"vacation"}
        onSelect={mockSelect}
      />
    );
    fireEvent.click(
      screen.getByAltText("/images/stock/survey/mountains-A.jpg")
    );

    expect(mockSelect).toHaveBeenCalledWith("casual", "vacation");
  });
});
