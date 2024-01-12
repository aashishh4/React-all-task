import { useState } from "react";
function Form4()
{
    const[per,setper]=useState()
    const[msg,setmsg]=useState()
    function change(e)
    { e.preventDefault()
        per>=80?setmsg("GreatA"):per>=50?setmsg("GreatB"):per>=33?setmsg("GrateC"):setmsg("Fail")
    }

    return(
        <div>
            <label>Percentage:</label>
            <input type="number" onChange={(e)=>setper(e.target.value)}></input>
            <button onClick={change}>ok</button>
            <h1>{msg}</h1>
        </div>
    )
}export default Form4   