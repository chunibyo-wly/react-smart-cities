import React from "react";
import "./index.css"

class SubTitle extends React.Component {
    titleName;

    render() {
        return (
            <div className={"subtitle"}>
                {this.props.titleName}
            </div>
        )
    }
}

export default SubTitle

