import React, {useState , useContext} from "react";

import UserContext from "../Context/UserContext"

function Login(){

    const [username,setUsername]= React.useState("");
    const [password,setPassword]= React.useState("");

    const {setUser} =useContext(UserContext)

    const HandleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password}) 
    }
    
    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
            {"  "}
            <input type="text" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button onClick={HandleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
