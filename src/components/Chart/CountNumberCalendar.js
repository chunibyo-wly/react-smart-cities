import * as React from "react";
import SubTitle from "../SubTitle";
import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";

function CountNumberCalendar() {
    function getVirtulData(year) {
        year = year || '2020';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate(year + '-09-12');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
            data.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 10000)
            ]);
        }
        return data;
    }

    var data = getVirtulData();

    let option = {
        gird: {
            top: '10%',
            left: '50%'
        },
        calendar: [
            {
                left: 'center',
                top: 'center',
                range: ['2020-07-01', '2020-10-30'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#000',
                        width: 4,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    color: '#323c48',
                    borderWidth: 1,
                    borderColor: '#111'
                },
                dayLabel: {
                    color: 'rgba(255, 255, 255, 0.8)'
                },
                monthLabel: {
                    color: 'rgba(255, 255, 255, 0.8)'
                },
                yearLabel: {
                    show: false
                }
            },
        ],
        series: [
            {
                name: '步数',
                type: 'scatter',
                coordinateSystem: 'calendar',
                data: data,
                symbolSize: function (val) {
                    return val[1] / 500;
                },
                itemStyle: {
                    color: '#ddb926'
                }
            }
        ]
    };

    return (
        <div>
            <SubTitle titleName={"每日流量"}/>
            <ReactEcharts
                option={option}
                style={{
                    width: 430,
                    height: 220
                }}
            />
        </div>
    )
}

export default CountNumberCalendar