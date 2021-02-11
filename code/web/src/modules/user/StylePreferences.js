import React, { Component } from "react";
import { H3 } from "../../ui/typography";
import { Grid, GridCell } from "../../ui/grid";
import { white, grey, grey2 } from "../../ui/common/colors";

import Button from "../../ui/button/Button";
import Icon from "../../ui/icon";
import SurveyCards from "./SurveyCards";

class StylePreferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tops: "",
      bottoms: "",
      accessories: "",
      something: "",
    };
  }

  onSelect = (value, kind) => {
    this.setState({ [kind]: value });
  };

  onSubmit() {
  
    const selectionString =
      this.state.tops +
      " " +
      this.state.bottoms +
      " " +
      this.state.accessories +
      " " +
      this.state.something;
    //send this string to the backend! 

    // bring up the modal with the style summary! 
  }

  render() {
    return (
      <section>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: "2em", textAlign: "center" }}>
            <H3 font="secondary">Style Survey</H3>
            <p style={{ marginTop: "1em", color: grey2 }}>
              Fill out the survey
            </p>
          </GridCell>
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <H3 font="secondary">Which top best represents your style?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row" }}>
            <SurveyCards
              images={[
                { id: "casual", src: "red" },
                { id: "classy", src: "red" },
                { id: "sketchy", src: "red" },
              ]}
              category={"tops"}
              onSelect={this.onSelect}
            />
          </div>
          <H3 font="secondary">Which bottom best represents your style?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row" }}>
            <SurveyCards
              images={[
                { id: "casual", src: "red" },
                { id: "classy", src: "red" },
                { id: "sketchy", src: "red" },
              ]}
              category={"bottoms"}
              onSelect={this.onSelect}
            />
          </div>
          <H3 font="secondary">Which accecories best represent your style?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row" }}>
            <SurveyCards
              images={[
                { id: "casual", src: "red" },
                { id: "classy", src: "red" },
                { id: "sketchy", src: "red" },
              ]}
              category={"accessories"}
              onSelect={this.onSelect}
            />
          </div>
          <H3 font="secondary">Which 'something' best represent your style?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row" }}>
            <SurveyCards
              images={[
                { id: "casual", src: "red" },
                { id: "classy", src: "red" },
                { id: "sketchy", src: "red" },
              ]}
              category={"something"}
              onSelect={this.onSelect}
            />
          </div>

          <Button type="button" theme="primary" onClick={() => this.onSubmit()}>
            <Icon size={1.2} style={{ color: white }}>
              add
            </Icon>{" "}
            Submit Survey
          </Button>
        </div>
      </section>
    );
  }
}

export default StylePreferences;
