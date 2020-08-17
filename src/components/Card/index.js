import * as React from "react";
import {BorderBox12, BorderBox5, BorderBox7} from "@jiaminghi/data-view-react";
import {List, Row, Col, Avatar, Divider} from "antd";
import './index.css'

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
                                    src={require("../../image/person.png")}
                                    size={70}
                                />
                            </Col>
                            <Col span={7} offset={1}>
                                <p className={'attr'}>年龄: 中年</p>
                                <p className={'attr'}>性别: 女</p>
                                <p className={'attr'}>头发: 短发</p>
                                <p className={'attr'}>帽子: 无</p>
                            </Col>
                            <Col span={7}>
                                <p className={'attr'}>上装: 白色</p>
                                <p className={'attr'}>下装: 黑</p>
                                <p className={'attr'}>背包: 无</p>
                                <p className={'attr'}>手提包: 无</p>
                            </Col>
                        </Row>
                    </div>
                </BorderBox12>
            </Col>
        )
    }

}

export default PersonCard