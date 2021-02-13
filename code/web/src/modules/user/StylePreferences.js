import React, { Component } from "react";
import SurveyCards from "./SurveyCards";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// UI imports
import { H3 } from "../../ui/typography";
import { Grid, GridCell } from "../../ui/grid";
import { white, grey, grey2 } from "../../ui/common/colors";
import Button from "../../ui/button/Button";
import Icon from "../../ui/icon";

// POST call import
import { addStyle, login } from "./api/actions";

class StylePreferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacation: "",
      flavors: "",
      restaurants: "",
      architecture: "",
      styleSummary: "",
    };
  }

  onSelect = (value, kind) => {
    this.setState({ [kind]: value });
  };

  checkSurveyFilledOut() {
    if (
      this.state.vacation === "" ||
      this.state.flavors === "" ||
      this.state.restaurants === "" ||
      this.state.architecture === ""
    ) {
      alert("Must select an image for each category.");
    }
  }

  onSubmit() {
    this.checkSurveyFilledOut();

    const selectionString =
      this.state.vacation +
      ", " +
      this.state.flavors +
      ", " +
      this.state.restaurants +
      ", " +
      this.state.architecture;

    addStyle(selectionString)
      .then((response) => {
        this.setState({ styleSummary: response.data.data.userAddStyle.style });
      })
      .then((response) => {
        const userInfo = {
          name: this.props.user.details.name,
          email: this.props.user.details.email,
          role: null,
          style: this.state.styleSummary,
        };
        console.log(userInfo);
        this.props.login(userInfo, true);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section>
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: "2em", textAlign: "center" }}>
            <H3 font="secondary" data-testid="title">
              Style Survey
            </H3>
            <p style={{ marginTop: "1em", color: grey2 }}>
              Thank you for subscribing! Here is a short survey so we can tailor
              your crate to you! To fill out the survey please select one image
              from each category and click submit.
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
          <H3 font="secondary">Favorite vacation destination?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row" }}>
            <SurveyCards
              images={[
                { id: "casual", src: "/images/stock/survey/mountains-A.jpg" },
                { id: "classy", src: "/images/stock/survey/beach-A.jpg" },
                { id: "edgy", src: "/images/stock/survey/city-A.jpg" },
              ]}
              category={"vacation"}
              onSelect={this.onSelect}
            />
          </div>
          <H3 font="secondary">
            Are you more of a spicy, sweet or sour person?
          </H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row" }}>
            <SurveyCards
              images={[
                { id: "casual", src: "/images/stock/survey/popcorn-B.jpg" },
                { id: "classy", src: "/images/stock/survey/spicy-B.jpg" },
                { id: "edgy", src: "/images/stock/survey/sweet-B.jpg" },
              ]}
              category={"flavors"}
              onSelect={this.onSelect}
            />
          </div>
          <H3 font="secondary">You're hungry, what restaurant do you go to?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row" }}>
            <SurveyCards
              images={[
                { id: "casual", src: "/images/stock/survey/burger-C.jpg" },
                { id: "classy", src: "/images/stock/survey/pancakes-C.jpg" },
                { id: "edgy", src: "/images/stock/survey/fine-C.jpg" },
              ]}
              category={"restaurants"}
              onSelect={this.onSelect}
            />
          </div>
          <H3 font="secondary">Which would you pick as your dream home?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row" }}>
            <SurveyCards
              images={[
                { id: "casual", src: "/images/stock/survey/house-D.jpg" },
                { id: "classy", src: "/images/stock/survey/cabin-D.jpg" },
                { id: "edgy", src: "/images/stock/survey/apartment-D.jpg" },
              ]}
              category={"architecture"}
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

const mapStateToProps = function (state) {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(withRouter(StylePreferences));
