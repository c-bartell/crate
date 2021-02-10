import Card from "../../ui/card/Card";
import { white} from "../../ui/common/colors";
import React from "react";

const SurveyCards = (props) => {
  let surveyOptions = props.props.map((image) => {
    return (
      <Card style={{ width: "18em", backgroundColor: white }}>
        <p style={{ padding: "2em 3em 0 3em" }}>
          <img src={``} alt={image} style={{ width: "100%" }} />
        </p>
      </Card>
    );
  });

  return <section>{surveyOptions}</section>;
};

export default StyleQuestion;
