import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props)
{
    const [uname,setuname]= useState("");
    const [pwd, setpwd]=useState("");
    const [info,setinfo]=useState("");
    const navigate = useNavigate();

    const LoginCheck = () =>{
        if(uname==="Admin" && pwd==="@123")
        {
            props.setloginStatus("admin");
            sessionStorage.setItem("adinfo" , "Administrator");
            navigate("/viewall");
        }
        else if(uname==="greeshma" && pwd==="@@123")
        {
            props.setloginStatus("emp");
             sessionStorage.setItem("empinfo" , uname);
            navigate("/viewone");
        }
        else
            setinfo("Please check username / password");
       
    }
        return(

        <div>
            <p style={{textAlign:"center"}}> 
            <h2>Login component</h2>
            <label>Username</label><br/>
            <input type="text" name="txtname" onChange={(e)=>{setuname(e.target.value)}}/>
            <br/>

            <label>Password</label><br/>
            <input type="password" name="txtpwd" onChange={(e)=>{setpwd(e.target.value)}}/>
            <br/>
            <input type="button" value="Submit" onClick={LoginCheck}/>
            </p>
            <h2>{info}</h2>
            
        </div>
    );
}

export default Login;