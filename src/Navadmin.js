import { Link } from "react-router-dom";

function Navadmin()
{
    return(

        <div>
            <Link to="viewall">Viewall</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
             <Link to="register">Register</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
             <Link to="logout">Logout</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        </div>

    );
}

export default Navadmin;