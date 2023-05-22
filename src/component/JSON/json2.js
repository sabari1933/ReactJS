import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Jsondata2(){

const [details,setDetails]=useState([]);
useEffect(()=>{

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>setDetails(data))
});

    return(
        <>
        <div className="row">
        {details.map((value,index)=>(
        <>
        <div className="card col-lg-4 " style={{width: '18rem'}} >
        <img src= {value.image} height="250"  className="card-img-top" alt="..."/>
        <div className="card-body  bg-primary">
            <h2 className="card-title" id="teamTitle">{value.title}</h2>
            <p className="card-text">{value.category}</p>
           <a href="#" className=" btn-primary">View....</a>
        </div>
    </div>
    
        </>
        ))}
        </div>
        
        </>
);
   
}
export default Jsondata2;