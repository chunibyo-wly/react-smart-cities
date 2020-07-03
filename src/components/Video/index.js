import React, {Component} from "react";

class Video extends Component {
    state = {
        image: ""
    }

    render() {
        return (
            <div>
                <img src="http://127.0.0.1:8800/video_feed" alt="" style={{width: 800, height: 500}}/>
            </div>
        )
    }
}

export default Video