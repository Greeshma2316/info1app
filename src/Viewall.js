import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Viewall()
{
    const navigate=useNavigate();
    const [ldetails,setldetails] = useState("");

    useEffect(()=>{
        if(sessionStorage.getItem('adinfo')!=null)
        {
            setldetails(sessionStorage.getItem('adinfo'));
        }
    else
      navigate('/login');

    },[navigate]);
    return(

        <div>
            <h1>Welcome to : {ldetails} </h1>
            <h2>Viewall component</h2>
        </div>
    );
}

export default Viewall;