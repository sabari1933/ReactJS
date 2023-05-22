import React from "react";
import "./Congrats Card.css"
import cardbg from "./card-bg.png";
import profile from "./card-profile.png";
import watch from "./card-watch.png";

function Card(){
    return(
        <>
        <div className="card1">
            <h1 className="head">Congratulations</h1>
            <div className="tech">
                <img src={profile} alt=""/>
                <h2>Kiran V</h2>
                <p>vishnu institute of Computer Education and Technology,Bhimavaram</p>
                <img src={watch} alt=""/>
            </div>
        </div>
        </>
    );
}
export default Card;