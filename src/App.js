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
import {Row, Col} from "antd";
import 'antd/dist/antd.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personList: [{}],
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
            }
        }
    }

    componentDidMount() {
        setInterval(() => this.getBoxData(), 5000)
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
                console.log(result)
                this.setState({personList: result})
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
                                        <PersonCard pedestrianAttribute={this.state.personList[0]}/>
                                        <PersonCard pedestrianAttribute={this.state.personList[0]}/>
                                        <PersonCard pedestrianAttribute={this.state.personList[0]}/>
                                        <PersonCard pedestrianAttribute={this.state.personList[0]}/>
                                    </Row>
                                    <div style={{height: 10}}/>
                                    <Row justify={'center'} align={'middle'}>
                                        <PersonCard pedestrianAttribute={this.state.personList[0]}/>
                                        <PersonCard pedestrianAttribute={this.state.personList[0]}/>
                                        <PersonCard pedestrianAttribute={this.state.personList[0]}/>
                                        <PersonCard pedestrianAttribute={this.state.personList[0]}/>
                                    </Row>
                                </div>
                            </div>
                            <div className="div6 div-grid">
                                <FunnelSummary/>
                                <LineSummary/>
                            </div>
                        </div>
                    </ReactParticleLine>
                </FullScreenContainer>
            </div>
        );
    }
}

export default App;
