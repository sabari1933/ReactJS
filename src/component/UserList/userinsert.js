import React,{useState,useEffect} from "react";
import axios from 'axios';

 export function UserInsert(){
    const signup = (event) => {
        event.preventDefault();
        var config = {headers:{"enctype":"multipart/form-data"}};
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var emailId = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phone").value;
        var dob = document.getElementById("dob").value;
        var gender = document.getElementById("gender").value;
        var password = document.getElementById("pwt").value;
       
            let userInfo = {
                "firstName": firstName,
                "lastName": lastName,
                "gender": gender,
                "dob": dob,
                "emailId": emailId,
                "phoneNumber": phoneNumber,
                "password": password
            }

   
        axios.post('http://localhost:8080/auth/insert',userInfo,config)
            .then((res) => {
                console.log(res);
               alert("success");
            })
   

    }
    return(
    <>
  <div className="sign-div ">
            <form action="#" className="form-sign">
                <h2 className="head">Register Here</h2>
                <div className="user-box">
                    <label className="">First Name *</label> <br />
                    <input type="text" id="fname" name="fname"/><br />
                </div>
                <div className="user-box">
                    <label>Last Name *</label> <br />
                    <input type="text" id="lname" name="lname"/> <br />
                </div>
                <div className="user-box">
                    <label> Email *</label><br />
                    <input type="email" id="email" name="email"/><br />
                </div>
                <div className="user-box">
                    <label>Phone Number *</label><br />
                    <input type="number" name="phone" id="phone"/><br />
                </div>
                <div className="user-box">
                    <label>Date of Birth </label><br />
                    <input type="date" id="dob" name="dob"/><br />
                </div>
                <div className="user-box">
                    <label>Gender </label><br />
                    <input type="text" id="gender" name="gender"/><br />
                </div>
                <div className="user-box">
                    <label>Password *</label><br />
                    <input type="password" name="pwt" id="pwt"/><br />
                </div>
              
                <button className="sbtn" onClick={signup}>Submit</button>
            </form>
            </div>
    </>
    );
}