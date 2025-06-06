import axios from 'axios';
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
function Login(){
const nav=useNavigate();
    const handleLogin=()=>{
        axios.post("http://localhost:8000/login",{email,password}).
        then((res)=>{
            if(res.data==="success")
            {
                localStorage.setItem("email",email);
                    nav("/task")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }


    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    return(
        <div className="rcontainer">
            <h1>Login</h1>
            <div className="rcontent">
               
                <label name="email">Email:</label>
                <input
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
                placeholder="Enter the email.." />
                <br/>
                <label name="password">Password:</label>
                <input
                type="password"
              value={password}
                onChange={(e)=>setPassword(e.target.value)}
                name="password"
                placeholder="Enter the password.." />

                <button onClick={handleLogin}>Login</button>
            </div>

  

        </div>
    )
}
export default Login;