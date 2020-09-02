import React from 'react';
import './App.css';
import FullScreenContainer from "@jiaminghi/data-view-react/es/fullScreenContainer";
import Header from "./components/Header";
import Video from "./components/Video";
import MapScene from "./components/Map";
import CountNumber from "./components/Chart/CountNumber"
import ReactParticleLine from 'react-particle-line';
import VehicleLineBar from "./components/Chart/VehicleLineBar";
import FunnelSummary from "./components/Chart/FunnelSummary";
import CountNumberCalendar from "./components/Chart/CountNumberCalendar";
import LineSummary from "./components/Chart/LineSummary";
import PersonCard from "./components/Card";
import {Row} from "antd";
import 'antd/dist/antd.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personList: [],
            pedestrianAmount: {
                child: 0,
                teenager: 0,
                adult: 0,
                oldPeople: 0
            },
            vehicleAmount: {
                trunk: 0,
                bus: 0,
                motorcycle: 0,
                car: 0,
                bicycle: 0
            },
            pedestrianAmountList: [0, 0, 0, 0, 0, 0, 0, 0],
            vehicleAmountList: [0, 0, 0, 0, 0, 0, 0, 0]
        }
    }

    componentDidMount() {
        setInterval(() => this.getBoxData(), 5000)
    }

    countNumber(resultList, key, value) {
        let cnt = 0
        for (let i = 0; i < resultList.length; ++i) {
            if (resultList[i] && key in resultList[i] && resultList[i][key] === value) cnt++
        }
        return cnt
    }

    sumNumber(resultMap) {
        let sum = 0;
        for (let key in resultMap) sum += resultMap[key]
        return sum;
    }

    pushNumber(_list, _item) {
        _list.shift()
        _list.push(_item)
        return _list
    }

    getBoxData() {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("/box", requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .then(result => {
                while ((8 - result.length) > 0) result.push(undefined)
                this.setState({
                    personList: result,
                    pedestrianAmount: {
                        child: this.countNumber(result, "age", "小孩"),
                        teenager: this.countNumber(result, "age", "青年"),
                        adult: this.countNumber(result, "age", "成人"),
                        oldPeople: this.countNumber(result, "age", "老人")
                    },
                    vehicleAmount: {
                        trunk: 0,
                        bus: 0,
                        motorcycle: 0,
                        car: 0,
                        bicycle: 0
                    }
                })

                let tempList = this.pushNumber(this.state.pedestrianAmountList, this.sumNumber(this.state.pedestrianAmount))
                console.log(tempList)
                this.setState({
                    pedestrianAmountList: tempList
                })
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div>
                <FullScreenContainer>
                    <ReactParticleLine
                        lineWidth={0.1}
                        dotsNumber={50}
                        dotsDistance={100}
                        hoverEffect={false}
                    >
                        <div className="parent">
                            <div className="div1">
                                <Header/>
                            </div>
                            <div className="div2 div-grid">
                                <div style={{
                                    marginTop: "10%"
                                }}>
                                    <Video/>
                                </div>
                            </div>
                            <div className="div3 div-grid">
                                <CountNumber pedestrianAmount={this.state.pedestrianAmount}/>
                                <VehicleLineBar vehicleAmount={this.state.vehicleAmount}/>
                            </div>
                            <div className="div4 div-grid">
                                <MapScene/>
                                <CountNumberCalendar/>
                            </div>
                            <div className="div5 div-grid">
                                <div
                                    style={{
                                        marginTop: 10
                                    }}
                                >
                                    <Row justify={'center'} align={'middle'}>
                                        {
                                            this.state.personList
                                                .slice(0, 4)
                                                .map(person => <PersonCard pedestrianAttribute={person}/>)
                                        }
                                    </Row>
                                    <div style={{height: 10}}/>
                                    <Row justify={'center'} align={'middle'}>
                                        {
                                            this.state.personList
                                                .slice(4, 8)
                                                .map(person => <PersonCard pedestrianAttribute={person}/>)
                                        }
                                    </Row>
                                </div>
                            </div>
                            <div className="div6 div-grid">
                                <FunnelSummary
                                    pedestrianAmount={this.state.pedestrianAmountList[this.state.pedestrianAmountList.length - 1]}/>
                                <LineSummary
                                    pedestrianAmountList={this.state.pedestrianAmountList}
                                    vehicleAmountList={this.state.vehicleAmountList}
                                />
                            </div>
                        </div>
                    </ReactParticleLine>
                </FullScreenContainer>
            </div>
        );
    }
}

export default App;
