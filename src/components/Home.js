import React from "react";
import { withRouter } from "react-router-dom";


class Home extends React.Component{
    render() {
        const { classes } = this.props;
        return (
            <div id="top">
                <h1
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "10%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                Welcome to my website
            </h1>
            </div>
        );
    }
}

export default withRouter(Home);