import { Link } from "react-router-dom";

function Navemp()
{
    return(
    <div>
         <Link to="viewone">Viewone</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
             <Link to="changepwd">changepwd</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
             <Link to="logout">Logout</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
    </div>

    );
}
export default Navemp;