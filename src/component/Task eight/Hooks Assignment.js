import React from "react";
import {useState} from "react";

function Hooks(){
const [count,setCount] = useState(0);

    return(
        <>
        <h1 className="text-center mt-5">{count}</h1>
        <div className="text-center">
        <button type="button"className="bg-success" onClick={() =>{setCount(count+1)}}>Increament</button>
        <button type="button"className="bg-danger" onClick={() =>{setCount(count-1)}}>Decreament</button>
        <button type="button"className="bg-primary" onClick={() =>{setCount(0)}}>Reset</button>
        </div>
        </>
    );
}
export default Hooks;