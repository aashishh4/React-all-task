import { Link } from "react-router-dom";
function Navi()
{
    return(
        <div>
            <Link to="/">home</Link><br/>
            <Link to="/about">about</Link><br/>
            <Link to="/contact">contact</Link>
        </div>
    )
}export default Navi;