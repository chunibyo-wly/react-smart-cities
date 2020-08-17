import React, {Component} from "react";
import {Col, Row} from "antd";
import {BorderBox9} from "@jiaminghi/data-view-react";

class Video extends Component {
    state = {
        image: ""
    }

    render() {
        return (
            <Row align={'middle'} justify={'center'}>
                <Col span={22}>
                    {/*<BorderBox9>*/}
                        <img src="http://192.168.0.167:5000/video_feed" alt=""
                             style={{
                                 width: "100%",
                                 height: "auto",
                             }}/>
                    {/*</BorderBox9>*/}
                </Col>
            </Row>
        )
    }
}

export default Video