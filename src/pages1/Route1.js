import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navi from "./Navi";
import { Routes,Route } from "react-router-dom";
function Route1()
{
    return(
        <div>
            <Navi/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                
            </Routes>
        </div>
    )
}
export default Route1;