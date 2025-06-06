import axios from 'axios';
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
function Register(){
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const nav=useNavigate();
    const handleRegister=()=>{
        axios.post("http://localhost:8000/register",{name,email,password}).
        then((res)=>{
            console.log(res);
            if(res.data=="success")
            {
                nav("/login");
            }
        }).
        catch((err)=>{
            console.log(err)
        });
    }
    return(
        <div className="rcontainer">
            <h1>Register</h1>
            <div className="rcontent">
                <label name="name">Name:</label>
                <input
                type="text"
               value={name}
               onChange={(e)=>setName(e.target.value)}
                name="name"
                placeholder="Enter the name.." />
                <br/>
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

                <button onClick={handleRegister}>Register</button>
            </div>

            <p>Already registered???</p>
            <button onClick={()=>nav("/login")}>Login</button>

        </div>
    )
}
export default Register;