import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props)
{
  const navigate=useNavigate();
  const [x,setx] = useState(0);

  useEffect(()=>{
    sessionStorage.removeItem('adinfo');
    sessionStorage.removeItem('empinfo');
    props.setloginStatus("gen");
    navigate('/login');
  },[]);

    return(

        <div>
            <h1>This is logout Component</h1>
        </div>
    );
}

export default Logout;