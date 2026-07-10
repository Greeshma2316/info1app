import { Link } from "react-router-dom";

function Navbar()
{
    return(

        <div>
            <Link to="/login">Login</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
             <Link to="/home">Home</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
             <Link to="/contact">Contact</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            
        </div>


    );
}

export default Navbar;