import React from "react";
import './feedheart.css';
import heart from './emoji-heart-33.png';
function Heart(){
    return(
        <>
        <div className="container-fluid heart text-center p-5">
            <div className="bg-light heart2">
            <img src={heart}height={200} className="mt-3" alt=""/>
            <h4>Thank You...!</h4>
            <p>We will use your feedback to improve our customer support Performance...!</p>
            </div>
        </div>
        </>
    );
}
export default Heart;