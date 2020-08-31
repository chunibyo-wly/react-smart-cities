import * as React from "react";
import SubTitle from "../SubTitle";
import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";

function LineSummary() {
    let bgColor = "#fff";
    let color = [
        "#435086",
        "#7d7d8a",
        "#FFC005",
        "#FF515A",
        "#8B5CFF",
        "#00CA69"
    ];
    let echartData = [{
        name: "1",
        value1: 100,
        value2: 233
    },
        {
            name: "2",
            value1: 138,
            value2: 233
        },
        {
            name: "3",
            value1: 350,
            value2: 200
        },
        {
            name: "4",
            value1: 173,
            value2: 180
        },
        {
            name: "5",
            value1: 180,
            value2: 199
        },
        {
            name: "6",
            value1: 150,
            value2: 233
        },
        {
            name: "7",
            value1: 180,
            value2: 210
        },
        {
            name: "8",
            value1: 230,
            value2: 180
        }
    ];

    let xAxisData = echartData.map(v => v.name);
//  ["1", "2", "3", "4", "5", "6", "7", "8"]
    let yAxisData1 = echartData.map(v => v.value1);
// [100, 138, 350, 173, 180, 150, 180, 230]
    let yAxisData2 = echartData.map(v => v.value2);
// [233, 233, 200, 180, 199, 233, 210, 180]
    const hexToRgba = (hex, opacity) => {
        let rgbaColor = "";
        let reg = /^#[\da-f]{6}$/i;
        if (reg.test(hex)) {
            rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
                "0x" + hex.slice(3, 5)
            )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
        }
        return rgbaColor;
    }

    let option = {
        color: color,
        grid: {
            top: 10,
            // containLabel: true
            bottom: 10
        },
        xAxis: [{
            type: "category",
            boundaryGap: false,
            axisLabel: {
                formatter: '{value}月',
                textStyle: {
                    color: "#333"
                }
            },
            axisLine: {
                show: false
            },
            data: xAxisData,
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
            type: "value",
            // name: '单位：万千瓦时',
            axisLabel: {
                // textStyle: {
                //     color: "#666"
                // }
            },
            nameTextStyle: {
                color: "#666",
                fontSize: 12,
                lineHeight: 40
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: "2018",
            type: "line",
            smooth: true,
            // showSymbol: false,/
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[0], 0.5),
                    shadowOffsetY: 8
                }
            },
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(
            //             0,
            //             0,
            //             0,
            //             1,
            //             [{
            //                 offset: 0,
            //                 color: hexToRgba(color[0], 0.3)
            //             },
            //                 {
            //                     offset: 1,
            //                     color: hexToRgba(color[0], 0.1)
            //                 }
            //             ],
            //             false
            //         ),
            //         shadowColor: hexToRgba(color[0], 0.1),
            //         shadowBlur: 10
            //     }
            // },
            data: yAxisData1
        }, {
            name: "2019",
            type: "line",
            smooth: true,
            // showSymbol: false,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[1],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[1], 0.5),
                    shadowOffsetY: 8
                }
            },
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(
            //             0,
            //             0,
            //             0,
            //             1,
            //             [{
            //                 offset: 0,
            //                 color: hexToRgba(color[1], 0.3)
            //             },
            //                 {
            //                     offset: 1,
            //                     color: hexToRgba(color[1], 0.1)
            //                 }
            //             ],
            //             false
            //         ),
            //         shadowColor: hexToRgba(color[1], 0.1),
            //         shadowBlur: 10
            //     }
            // },
            data: yAxisData2
        }]
    };
    return (
        <div>
            <ReactEcharts
                option={option}
                style={{
                    width: 290,
                    height: 140
                }}
            />
        </div>
    )
}

export default LineSummary