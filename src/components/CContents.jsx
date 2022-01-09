import React from "react";
import data from "../assets/text.json";
import "../assets/css/CContents.css";
class CContents extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "witaj uzytkowniku kliknij przycisk aby wyswietlic komunikat",
        };
        let img = [];
        const imgContext = require.context("../assets/img/", false, /\.jpg$/);
        this.imgs = imgContext.keys().reduce((icons, file) => {
            const cname = imgContext(file);
            img.push(cname);
            return img;
        }, {});
        this.changeMsg = this.changeMsg.bind(this);
    }

    changeMsg() {
        this.setState({
            msg: "komunikat zmieniony",
        });
        console.log("przycisk nacisniety");
    }
    render() {
        const items = [];
        data.data.forEach((element) => {
            /* console.log(data.data.indexOf(element));
            console.log(element); */
            items.push(
                <div
                    key={data.data.indexOf(element)}
                    className="keyboard-container"
                >
                    <h5>{element}</h5>
                    <img alt="" src={this.imgs[data.data.indexOf(element)]} />
                </div>
            );
        });
        return (
            <div className="main">
                <button onClick={this.changeMsg}>eee</button>
                {items}
            </div>
        );
    }
}

export default CContents;
