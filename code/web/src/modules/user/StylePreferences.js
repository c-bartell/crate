import React, { Component } from "react";
// import { connect } from 'react-redux'
import { H3 } from "../../ui/typography";
// import { Grid, GridCell } from '../../ui/grid'
// import { grey, grey2 } from '../../ui/common/colors'
// import { getListByUser } from '../subscription/api/actions'
import { Link, withRouter } from "react-router-dom";

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
      </section>
    );
  }
}

export default StylePreferences;

