import React from "react";

export default class CInner extends React.Component {
    constructor() {
        super(/* props */);
        console.log("konstruktor CInner");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps CInner");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount CInner");
    }

    render() {
        console.log("render CInner");
        return (
            <div>
                <h1>komponent wewnętrzny</h1>
                <button onClick={this.changeState}>zmien stan</button>
            </div>
        );
    }

    changeState = () => {
        this.setState({
            st: "zmieniony",
        });
    };

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate CInner");
        return true;
    }

    getSnapshotBeforeUpdate(pprops, pstate) {
        console.log("getSnapshotBeforeUpdate CInner");
        return null;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate CInner");
    }
}
