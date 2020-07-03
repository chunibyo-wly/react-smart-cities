import React from "react";

function MapScene() {
    return (
        <div>
            <iframe title={"定位"} src={"/Map.html"} scrolling={'no'} style={{border: 0, width: 460, height: 420}}/>
        </div>
    )
}

export default MapScene

