import * as React from "react";
import {BorderBox12, BorderBox5, BorderBox7} from "@jiaminghi/data-view-react";
import {List, Row, Col, Avatar, Divider} from "antd";
import './info.css'
import Info from "./info";

class PersonCard extends React.Component {

    render() {
        return (
            <Col span={6}>
                <BorderBox12
                    color={['rgba(45, 68, 84, 0.8)', 'rgba(45, 68, 84, 0.8)']}
                    backgroundColor={'rgba(45, 68, 84, 0.01)'}
                >
                    <div
                        style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            height: 122,
                            width: 270,
                            padding: "18px 0"
                        }}
                    >
                        <Row align={'middle'} justify={'center'}>
                            <Col span={7} offset={2}>
                                <Avatar
                                    // src={require("../../image/person.png")}
                                    src={"data:image/png;base64," + this.props.pedestrianAttribute["img"]}
                                    size={70}
                                />
                            </Col>
                            <Col span={7} offset={1}>
                                <Info k='年龄' v='中年'/>
                                <Info k='性别' v='女'/>
                                <Info k='头发' v='短发'/>
                                <Info k='帽子' v='无'/>
                            </Col>
                            <Col span={7}>
                                <Info k='上装' v='白色'/>
                                <Info k='下装' v='黑色'/>
                                <Info k='背包' v='无'/>
                                <Info k='手提包' v='无'/>
                            </Col>
                        </Row>
                    </div>
                </BorderBox12>
            </Col>
        )
    }

}

export default PersonCard