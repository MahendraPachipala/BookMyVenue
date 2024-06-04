import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UserLogin=()=>{
  const [message,setmessage] = useState("Login");
  const [logindata,setlogindata] = useState(
    {
        email:'',
        password:'',
    }
  )

  const navigate = useNavigate();
  const handleChange = (event)=>{
    setlogindata({
      ...logindata,
      [event.target.name]: event.target.value
    });
 }
 
  const  handleSubmit = async() => {
    try {
        const response = await axios.post('http://localhost:4000/login', logindata);
        if(response.data.success){
          navigate("/home");
        }
    } catch (error) {
        setmessage(error.response.data.message);
    }
  }
    return (
        <div>
            <h1>Login</h1>
            <input type = "email" name = "email" placeholder = "Enter Your Email" value = {logindata.email} onChange = {handleChange}></input><br/>
            <input type = "password" name = "password" placeholder = "Enter Your password" value = {logindata.password} onChange = {handleChange} ></input><br/>
            <button type = "submit" onClick={handleSubmit}>Submit</button>
            {message && <p>{message}</p>}
        </div>
        
    )
}

export default UserLogin;