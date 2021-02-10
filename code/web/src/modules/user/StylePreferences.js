import React, { Component } from "react";
// import { connect } from 'react-redux'
import { H3 } from "../../ui/typography";
import { Grid, GridCell } from '../../ui/grid'
import { white, grey, grey2 } from '../../ui/common/colors'

import Button from '../../ui/button/Button'
import Icon from '../../ui/icon'
import SurveyCards from "./SurveyCards";


class StylePreferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: "",
    };
  }

  render() {
    return (
      <section>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
             <H3 font="secondary">Style Survey</H3>
            <p style={{ marginTop: '1em', color: grey2 }}>Fill out the survey</p>
          </GridCell>
        </Grid>
        <Grid>
          <GridCell>
            <H3 font="secondary">Which top best represents your style?</H3>
            <div style={{ margin: '2em', display: "flex", flexDirection: "row" }}>
              <SurveyCards props={["White", "Blue", "Yellow"]} />
            </div>
            <H3 font="secondary">Which bottom best represents your style?</H3>
            <div style={{ margin: '2em', display: "flex", flexDirection: "row" }}>
              <SurveyCards props={["Green", "Pink", "Orange"]} />
            </div>
            <H3 font="secondary">Which accecories best represent your style?</H3>
            <div style={{ margin: '2em', display: "flex", flexDirection: "row" }}>
              <SurveyCards props={["Hello", "Hi", "Hey"]} />
            </div>
            <H3 font="secondary">Which 'something' best represent your style?</H3>
            <div style={{ margin: '2em', display: "flex", flexDirection: "row" }}>
              <SurveyCards props={["Yes", "Yeah", "Perfect"]} />
            </div>
          </GridCell>
        </Grid>
        <Button type="button" theme="primary">
          <Icon size={1.2} style={{ color: white }}>add</Icon> Submit Survey
        </Button>
      </section>
    );
  }
}

export default StylePreferences;

