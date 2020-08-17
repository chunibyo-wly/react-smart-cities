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

function App() {
    return (
        <FullScreenContainer>
            {/*<ReactParticleLine*/}
            {/*    lineWidth={0.1}*/}
            {/*    dotsNumber={50}*/}
            {/*    dotsDistance={100}*/}
            {/*    hoverEffect={false}*/}
            {/*>*/}
            <div className="parent">
                <div className="div1">
                    <Header/>
                </div>
                <div className="div2 div-grid">
                    <div style={{
                        marginTop:"10%"
                    }}>
                        <Video/>
                    </div>
                </div>
                <div className="div3 div-grid">
                    <CountNumber/>
                    <VehicleLineBar/>
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
                            <PersonCard/>
                            <PersonCard/>
                            <PersonCard/>
                            <PersonCard/>
                        </Row>
                        <div style={{height: 10}}/>
                        <Row justify={'center'} align={'middle'}>
                            <PersonCard/>
                            <PersonCard/>
                            <PersonCard/>
                            <PersonCard/>
                        </Row>
                    </div>
                </div>
                <div className="div6 div-grid">
                    <FunnelSummary/>
                    <LineSummary/>
                </div>
            </div>
            {/*</ReactParticleLine>*/}
        </FullScreenContainer>
    );
}

export default App;
