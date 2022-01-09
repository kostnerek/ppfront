import React from "react";

export const CFooter = (props) => {
    let date = new Date();
    const { weather, temp } = props;
    return (
        <div>
            <h5>{date.toDateString()}</h5>
            <h5>
                {weather}, {temp}
            </h5>
            <h6>{props.children}</h6>
        </div>
    );
};

//export default CFooter;
