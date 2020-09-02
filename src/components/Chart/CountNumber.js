import * as React from "react";
import ReactEcharts from "echarts-for-react";
import SubTitle from "../SubTitle";

class CountNumber extends React.Component {

    render() {

        const maxValue = 20;

        const data = [
            {
                name: "A",
                value: this.props.pedestrianAmount.child,
                itemStyle: {
                    color: 'rgb(239, 139, 52)'
                }
            },
            {
                name: "B",
                value: this.props.pedestrianAmount.teenager,
                itemStyle: {
                    color: 'rgb(246, 197, 69)'
                }
            },
            {
                name: "C",
                value: this.props.pedestrianAmount.adult,
                itemStyle: {
                    color: 'rgb(103, 222, 126)'
                }
            },
            {
                name: "D",
                value: this.props.pedestrianAmount.oldPeople,
                itemStyle: {
                    color: 'rgb(64, 157, 247)'
                }
            },
        ].sort(function (a, b) {
            return a.value > b.value
        });

        let label = ["小孩 🧒", "青年 👱", "成人 🧑", "老人 👴"]

        let option = {
            backgroundColor: 'transparent',
            legend: {
                orient: 'vertical',
                right: 10,
                data: label,
                icon: 'circle',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            },
            color: [
                'rgb(239, 139, 52)',
                'rgb(246, 197, 69)',
                'rgb(103, 222, 126)',
                'rgb(64, 157, 247)',
            ],
            polar: {},
            angleAxis: {
                show: false,
                min: 0,
                max: maxValue,
                clockwise: false
            },
            radiusAxis: {
                type: 'category',
                axisLabel: {
                    interval: 0,
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 11,
                    formatter: '{value}',
                    fontFamily: 'Monaco',
                    align: 'left',
                    margin: -10
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true,
                },
                splitLine: {
                    show: false
                },
                data: data.map(function (item) {
                    return item.value
                }),
            },
            series: [
                {
                    name: label[0],
                    type: 'bar',
                    coordinateSystem: 'polar',
                    data: [data[0], 0, 0, 0],
                    zlevel: 10,
                    roundCap: true
                },
                {
                    type: 'bar',
                    coordinateSystem: 'polar',
                    color: 'rgba(255, 255, 255, 0.05)',
                    data: [maxValue * 0.75, 0, 0, 0],
                    barGap: "-100%",
                    zlevel: -10,
                    roundCap: true
                },
                {
                    name: label[1],
                    type: 'bar',
                    coordinateSystem: 'polar',
                    data: [0, data[1], 0, 0],
                    zlevel: 10,
                    roundCap: true
                },
                {
                    type: 'bar',
                    coordinateSystem: 'polar',
                    color: 'rgba(255, 255, 255, 0.05)',
                    data: [0, maxValue * 0.75, 0, 0],
                    barGap: "-100%",
                    zlevel: -10,
                    roundCap: true
                },
                {
                    name: label[2],
                    type: 'bar',
                    coordinateSystem: 'polar',
                    data: [0, 0, data[2], 0],
                    zlevel: 10,
                    roundCap: true
                },
                {
                    type: 'bar',
                    coordinateSystem: 'polar',
                    color: 'rgba(255, 255, 255, 0.05)',
                    data: [0, 0, maxValue * 0.75, 0],
                    barGap: "-100%",
                    zlevel: -10,
                    roundCap: true
                },
                {
                    name: label[3],
                    type: 'bar',
                    coordinateSystem: 'polar',
                    data: [0, 0, 0, data[3]],
                    zlevel: 10,
                    roundCap: true
                },
                {
                    type: 'bar',
                    coordinateSystem: 'polar',
                    color: 'rgba(255, 255, 255, 0.05)',
                    data: [0, 0, 0, maxValue * 0.75],
                    barGap: "-100%",
                    zlevel: -10,
                    roundCap: true
                },
            ]
        };

        return (
            <div>
                <SubTitle titleName={"行人检测"}/>
                <ReactEcharts
                    option={option}
                    style={{
                        width: 290,
                        height: 190
                    }}
                />
            </div>
        )
    }

}

export default CountNumber