import React from "react";
import { useState } from "react";
import Mango from './mango1.png'
import Banana from './banana1.png'
function Fruits() {
    const [fruits1, setFruits1] = useState(0)
    const [fruits2, setFruits2] = useState(0)
    return (
        <>
            <div className=" container bg-warning pb-3 pt-3">
           
                <div className=" d-flex row text-center bg-light m-5">
                <h3 className="text-center col-lg-12">Mango counter<span className="text-dark">{fruits1}</span> Banana counter<span className="text-dark">{fruits2}</span></h3>
                    <div className="col-lg-6">
                        <img src={Mango}className="col-lg-12" alt="" />
                        <button type="button" className="bg-primary text-center" onClick={() => { setFruits1(fruits1 + 1) }}>count</button>
                    </div>
                    <div className="col-lg-6">
                        <img src={Banana}className="col-lg-12" alt="" />
                        <button type="button" className="bg-primary text-center" onClick={() => { setFruits2(fruits2 + 1) }}>count</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Fruits;