import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
    render() {
        const useStyles = {
            title: {
                padding: "10px",
                fontFamily: "Merriweather",
                textAlign: "center",
                textTransform: "uppercase",
                color: "#484D51",
                fontSize: "35px",
                position: "absolute",
                left: "38%",
                top: "30%",
            },
            subheadings: {
                position: "absolute",
                left: "37%",
                top: "43%",
                color: "#484D51",
                fontFamily: "B612",
            },
        };
      return (
        <div>
            <h1 style={useStyles.title}>Hi, I'm Cindy Ding!</h1>
            <p style={useStyles.subheadings}>Welcome to my website. This is a work in progress</p>
        </div>
      );
    }
  }

export default withRouter(Home);