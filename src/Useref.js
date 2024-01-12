import { useRef, useState } from "react";

function Useref(){
    const [name,setname]=useState("miaa bhai");
    const inf=useRef();
    console.log("name"+name);
    console.log(inf);
    


    function reset(){
        setname("")
        inf.current.focus();
        inf.current.style.backgroundColor="";

    }
    function color(){
        inf.current.style.color="red";
        inf.current.style.backgroundColor="green";
    }

    return(
        <div>
            <input type="text" ref={inf} value={name} onChange={(e)=>setname(e.target.value)}/><br/>
            <button onClick={reset}>reset</button>
            <button onClick={color}>color</button>
        </div>
    )
}
export default Useref;