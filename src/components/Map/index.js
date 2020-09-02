import React from "react";
import SubTitle from "../SubTitle";

function MapScene() {


    return (
        <div>
            <SubTitle titleName={"实时地图"}/>
            <iframe title={"定位"} src={"/Map.html"} scrolling={'no'}
                    style={{
                        border: 0,
                        width: 440,
                        height: 200,
                        margin: 10
                    }}
            />
        </div>
    )
}

export default MapScene

