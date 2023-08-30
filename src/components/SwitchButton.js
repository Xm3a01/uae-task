import React from "react";
import "./Style.css"

const SwitchButton = () => {
    return (
        <div className="container">
        <label className="switch">
            <input  type="checkbox"/>
            <span className="slider"/>
            <div className="toggle-control">
                <div className="cover-container">
                {/* <div className="cover-round"> */}
                  <span className="image-toggle"></span>
                {/* </div> */}
                </div>
            </div>
        </label>
        </div>
    )
}

export default SwitchButton;