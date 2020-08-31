import * as React from "react";
import './info.css'

class Info extends React.Component {
    render() {
        return (
            <p className={'attr'}>
                <span className={'k'}>{this.props.k}</span>
                <span>:&nbsp;</span>
                <span className={'v'}>{this.props.v}</span>
            </p>
        )
    }
}

export default Info