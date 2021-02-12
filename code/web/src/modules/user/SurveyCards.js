import Card from "../../ui/card/Card";
import { white } from "../../ui/common/colors";
import React from "react";

const SurveyCards = (props) => {
  let surveyOptions = props.images.map((image) => {
    return (
      <button
        type="button"
        style={{border:"transparent"}}
        onClick={() => props.onSelect(image.id, props.category)}
      >
        <Card style={{ width: "18em", backgroundColor: white }}>
          <p>
            <img
              src={image.src}
              alt={image.id}
              style={{ width: "100%", height: "360px" }}
            />
          </p>
        </Card>
      </button>
    );
  });

  return <section>{surveyOptions}</section>;
};

export default SurveyCards;
