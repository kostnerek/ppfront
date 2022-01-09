import React from "react";
import CInner from "./CInner";

export default class COuter extends React.Component {
    constructor() {
        super(/* props */);
        this.state = {
            st: "Początek",
        };
        console.log("konstruktor COuter");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps COuter");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount COuter");
    }

    render() {
        console.log("render COuter");
        return (
            <div>
                <h1>komponent zewnetrzny</h1>
                <button onClick={this.changeState}>zmien stan</button>
                <CInner />
            </div>
        );
    }

    changeState = () => {
        this.setState({
            st: "zmieniony",
        });
    };

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate COuter");
        return true;
    }

    getSnapshotBeforeUpdate(pprops, pstate) {
        console.log("getSnapshotBeforeUpdate COuter");
        return null;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate COuter");
    }
}
