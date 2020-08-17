import * as React from "react";
import SubTitle from "../SubTitle";
import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";

function FunnelSummary() {

    let data = [
        {
            value: 15,
            name: '行人 ' + 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 1 0 0则代表渐变色从正下方开始
                        [
                            {offset: 0, color: 'rgb(85,87,145)'},
                            {offset: 0.5, color: 'rgb(74,86,140)'},
                            {offset: 1, color: 'rgb(67,79,138)'},
                        ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示柱状图的位置
                    )
                }
            },
        },
        {
            value: 8,
            name: '车辆 ' + 5,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 1 0 0则代表渐变色从正下方开始
                        [
                            {offset: 0, color: 'rgb(101, 102, 147)'},
                            {offset: 0.5, color: 'rgb(86,87,141)'},
                            {offset: 1, color: 'rgb(84,83,145)'},
                        ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示柱状图的位置
                    )
                }
            }
        },
        {
            value: -1,
            name: '隐藏',
            itemStyle: {
                opacity: 0
            },
            label: {
                show: false
            },
            tooltip: {
                show: false
            }
        },
    ]

    let option = {
        series: [
            {
                type: 'funnel',
                minSize: '0%',
                maxSize: '130%',
                top: 10,
                bottom: -40,
                sort: 'descending',
                gap: 10,
                min: -20,
                max: 15,
                label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        fontFamily: "Monaco",
                        borderWidth: 0,
                        color: 'white'
                    }
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 0
                    }
                },
                data: data
            }
        ]
    };

    return (
        <div>
            <SubTitle titleName={"实时流量"}/>
            <ReactEcharts
                option={option}
                style={{
                    width: 290,
                    height: 100
                }}
            />
        </div>
    )
}

export default FunnelSummary
