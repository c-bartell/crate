import React, { Component } from "react";
// import { connect } from 'react-redux'
import { H3 } from "../../ui/typography";
import { Grid, GridCell } from '../../ui/grid'
import { white, grey, grey2 } from '../../ui/common/colors'
import { Link, withRouter } from "react-router-dom";
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import Icon from '../../ui/icon'


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
            <Card style={{ width: '18em', height: '18em', backgroundColor: white }}>
              <img src="" alt="Casual Image"/>
            </Card>

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

