import * as React from "react";
import SubTitle from "../SubTitle";
import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";

function VehicleLineBar() {

    const label = [
        '自行车 🚴',
        '小轿车 🚗',
        '摩托车 🏍️',
        '巴士 🚌',
        '卡车 🚛'
    ]

    let option = {
        grid: {
            top: '20%',
            left: '30%',
            bottom: '20%'
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'Monaco'
            },
            data: label,
        },
        xAxis: {
            type: 'value',
            min: 0,
            max: 10,
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
        },
        series: [
            {
                name: label[0],
                data: [1, 2, 3, 4, 5],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220,220,220,0.05)'
                },
                barCategoryGap: 7,
                itemStyle: {
                    emphasis: {
                        barBorderRadius: 7
                    },
                    normal: {
                        barBorderRadius: 7,
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 0, 0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 1 0 0则代表渐变色从正下方开始
                            [
                                {offset: 0, color: '#f87d12'},
                                {offset: 0.5, color: '#f6860f'},
                                {offset: 1, color: '#f8a30f'}
                            ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示柱状图的位置
                        )

                    }
                }
            },
        ]
    };


    return (
        <div>
            <SubTitle titleName={"机车检测"}/>
            <ReactEcharts
                option={option}
                style={{
                    width: 290,
                    height: 180
                }}
            />
        </div>
    )
}

export default VehicleLineBar