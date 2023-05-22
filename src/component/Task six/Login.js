import React from "react";
import './Login.css';
import Laptop from './laptops-png.png';
import { Email, Https } from '@mui/icons-material';
function Login() {
    return (
        <>
           <div className="logindiv1 p-5 container-fluid">
            <div className="bg-white container row rounded p-5">
                <div className="col-lg-6">
                    <img className="col-lg-8 d-flex mr-auto ml-auto" src={Laptop}/>
                </div>
                <div className="col-lg-6 row mr-0">
                    <div className="col-lg-2"></div>
                    <div className=" mr-auto ml-auto col-lg-8">
                    <h1>Member Login</h1>
                    <div className="inputdivs   mt-5 d-flex">
                    <Email />
                    <input className="textBox1 col-lg-10" type="text" placeholder="Email"/>
                    </div><br/>
                    <div className="inputdivs  d-flex">
                    <Https />
                    <input className="textBox1 col-lg-10" type="password" placeholder="Password"/>
                    </div><br/>
                    <div>
                    <button className="btn btn-success btn-black col-lg-12 but">Login</button>
                    </div>
                    <p className="text-center">Forgot<span className="text-success">Username/Password?</span></p>
                    <p className="text-success text-center">Create Account</p>
                    </div>
                   
                    
                </div>
            </div>
           </div>
        </>
    );
}
export default Login;
