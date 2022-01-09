import React from "react";
import logo from "../assets/img/logo.svg";
import "../assets/css/CHeader.css";

class CHeader extends React.Component {
    state = {
        date: new Date(),
    };
    render() {
        return (
            <div className="header">
                <img src={logo} className="headerLogo" alt="logo" />
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default CHeader;
/* export const CHeader = () => {
    let date = new Date();
    return React.createElement(
        "div",
        { className: "header" },
        React.createElement(
            "h2",
            { id: "text", className: "textClass" },
            `ppfront ${date.toDateString()}`
        )
    );
}; */
