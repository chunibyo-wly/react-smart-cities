import React from 'react';
import './App.css';
import FullScreenContainer from "@jiaminghi/data-view-react/es/fullScreenContainer";
import Header from "./components/Header";
import Video from "./components/Video";
import MapScene from "./components/Map";

function App() {
    return (
        <FullScreenContainer>
            <div className="parent">
                <div className="div1">
                    <Header/>
                </div>
                <div className="div2"/>
                <div className="div3"/>
                <div className="div4"/>
                <div className="div5 div-grid">
                    <MapScene/>
                </div>
                <div className="div6 div-grid">
                    <Video/>
                </div>
                <div className="div7"/>
                <div className="div8"/>
                <div className="div9"/>
            </div>
        </FullScreenContainer>
    );
}

export default App;
