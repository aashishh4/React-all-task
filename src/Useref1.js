import { useRef } from "react";

function Useref1(){
    const inf=useRef();
    console.log(inf);

    function change(){
        inf.current.style.color="red";
    }

    return(
        <div>
            <input type="text" ref={inf}/>
            <button onClick={change}>change</button>
        </div>
    )
}export default Useref1; 