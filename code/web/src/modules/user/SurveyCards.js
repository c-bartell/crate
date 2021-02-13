import Card from "../../ui/card/Card";
import { white } from "../../ui/common/colors";
import React from "react";

const SurveyCards = (props) => {
  let surveyOptions = props.images.map((image) => {
    return (
      <button
        type="button"
        onClick={() => props.onSelect(image.id, props.category)}
      >
        <Card
          key={Date.now()}
          style={{ width: "18em", backgroundColor: white }}
        >
          <p style={{ padding: "0em 0em 0 0em" }}>
            <img src={image.src} alt={image.id} style={{ width: "100%" }} />
          </p>
        </Card>
      </button>
    );
  });

  return <section>{surveyOptions}</section>;
};

export default SurveyCards;
