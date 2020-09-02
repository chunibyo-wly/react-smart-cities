import * as React from "react";
import {BorderBox12} from "@jiaminghi/data-view-react";
import {Row, Col, Avatar} from "antd";
import './info.css'
import Info from "./info";
import {UserOutlined} from '@ant-design/icons';

class PersonCard extends React.Component {

    render() {

        let fourBlockRow;
        if (this.props.pedestrianAttribute) {
            fourBlockRow =
                <Row align={'middle'} justify={'center'}>
                    <Col span={7} offset={2}>
                        <Avatar
                            src={"data:image/png;base64," + this.props.pedestrianAttribute.img}
                            size={70}
                        />
                    </Col>
                    <Col span={7} offset={1}>
                        <Info k='年龄' v={this.props.pedestrianAttribute["age"]}/>
                        <Info k='性别' v={this.props.pedestrianAttribute["gender"]}/>
                        <Info k='头发' v={this.props.pedestrianAttribute["hair length"]}/>
                        <Info k='帽子' v={this.props.pedestrianAttribute["wearing hat"]}/>
                    </Col>
                    <Col span={7}>
                        <Info k='上装' v={this.props.pedestrianAttribute["color of upper-body clothing"]}/>
                        <Info k='下装' v={this.props.pedestrianAttribute["color of lower-body clothing"]}/>
                        <Info k='背包' v={this.props.pedestrianAttribute["carrying bag"]}/>
                        <Info k='手提包' v={this.props.pedestrianAttribute["carrying handbag"]}/>
                    </Col>
                </Row>
        } else {
            // 空值渲染
            fourBlockRow =
                <Row align={'middle'} justify={'center'}>
                    <Col span={7} offset={2}>
                        <Avatar
                            // src={require("../../image/person.png")}
                            icon={<UserOutlined/>}
                            size={70}
                        />
                    </Col>
                    <Col span={7} offset={1}>
                        <Info k='年龄' v=''/>
                        <Info k='性别' v=''/>
                        <Info k='头发' v=''/>
                        <Info k='帽子' v=''/>
                    </Col>
                    <Col span={7}>
                        <Info k='上装' v=''/>
                        <Info k='下装' v=''/>
                        <Info k='背包' v=''/>
                        <Info k='手提包' v=''/>
                    </Col>
                </Row>
        }

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
                        {fourBlockRow}
                    </div>
                </BorderBox12>
            </Col>
        )
    }

}

export default PersonCard