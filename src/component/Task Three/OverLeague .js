import React from "react";
import csk from "./csk-img.png";
import rcb from "./rcb.avif";
import './OverLeague.css';

function Super() {
    return (
        <>
            <div className="back33">

                <h1 className="head" > Super Over League</h1>
                <div className="rck">
                    <img className="rcb" src={rcb} alt="" />
                    <img className="csk" src={csk} alt="" />
                </div>
            </div>

        </>
    );
}
export default Super;
