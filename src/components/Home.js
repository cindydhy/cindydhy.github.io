import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "react-router-dom";

class Home extends React.Component {

  toGitHub = () => {
    window.open('https://github.com/cindydhy');
  }

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
            left: "50%",
            top: "35%",
            transform: 'translate(-50%, -50%)',
            justifyContent:"space-between",
            paddingBottom: "50px"
        },
        icons: {
          position: "absolute",
          left: "43%",
          top: "38%",
          transform: 'translate(5%, 0%)',
          justifyContent:"space-between",
          // paddingBottom: "15px",
          paddingTop: "15px",
          marginTop: "20px"
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
          <IconButton style={useStyles.icons} onClick={this.toGitHub}>
            <GitHubIcon />
          </IconButton>
      </div>
    );
    }
  }

export default withRouter(Home);