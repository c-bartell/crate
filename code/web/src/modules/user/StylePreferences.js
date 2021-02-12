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
      vacation: "",
      flavors: "",
      restaurants: "",
      architecture: "",
      styleSummary: "Edgy and classy"
    };
  }


  onSelect = (value, kind) => {
    this.setState({ [kind]: value });
  };

  onSubmit() {
  
    const selectionString =
      this.state.vacation +
      " " +
      this.state.flavors +
      " " +
      this.state.restaurants +
      " " +
      this.state.architecture;
    //send this string to the backend! 

    // bring up the modal with the style summary! 
  }

  render() {
    // <div>
    //   {this.state.styleSummary !== undefined && <div>This works</div>}
    // </div>
    return (
      <section>
        <Grid style={{ backgroundColor: grey, marginBottom:"1em" }}>
          <GridCell style={{ padding: "2em", textAlign: "center" }}>
            <H3 font="secondary">Style Survey</H3>
            <p style={{ marginTop: "1.5em", color: grey2 }}>
              Thank you for subscribing! Here is a short survey so we can tailor your crate to you!
              To fill out the survey please select one image from each category and click submit.
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
          <div style={{ margin: "2em", display: "flex", flexDirection: "row", border: "transparent" }}>
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
          <H3 font="secondary">Spicy, sweet or salty?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row", border: "transparent" }}>
            <SurveyCards
              images={[
                { id: "casual", src: "/images/stock/survey/popcorn-B.jpg" },
                { id: "classy", src: "/images/stock/survey/sweet-B.jpg" },
                { id: "edgy", src: "/images/stock/survey/spicy-B.jpg" },
              ]}
              category={"flavors"}
              onSelect={this.onSelect}
            />
          </div>
          <H3 font="secondary">You're hungry, what restaurant do you go to?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row", border: "transparent"}}>
            <SurveyCards
              images={[
                { id: "casual", src: "/images/stock/survey/burger-C.jpg" },
                { id: "classy", src: "/images/stock/survey/fine-C.jpg" },
                { id: "edgy", src: "/images/stock/survey/pancakes-C.jpg" },
              ]}
              category={"restaurants"}
              onSelect={this.onSelect}
            />
          </div>
          <H3 font="secondary">Which would you pick as your dream home?</H3>
          <div style={{ margin: "2em", display: "flex", flexDirection: "row", border: "transparent"}}>
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
          <div>
            {this.state.styleSummary !== undefined &&
             <div>This works</div>}
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


export default StylePreferences

