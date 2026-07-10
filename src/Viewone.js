import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Viewone()
{

     const navigate=useNavigate();
    const [udetails,setudetails] = useState("");

    useEffect(()=>{
            if(sessionStorage.getItem('empinfo')!=null)
            {
                setudetails(sessionStorage.getItem('empinfo'));
            }
        else
          navigate('/login');
    
        },[]);
        
                
    return(

        <div>
            <h1>Welcome to : {udetails} </h1>
            <h2>Viewone component</h2>
        </div>
    );
}

export default Viewone;