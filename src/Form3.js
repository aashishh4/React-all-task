import { useState } from "react";
function Form3()
{
  const[age,setage]=useState()
  const[msg,setmsg]=useState("")
 function change(e)
 {
    age>=60?setmsg("overage"):age>=25?setmsg("eligibal"):setmsg("waiting")
    e.preventDefault()
 }
  return(
    <div>
      <h1>{msg}</h1>
      <form onSubmit={change}>
        age<input type="number" onChange={(e)=>setage(e.target.value)}></input><br></br>
        <input type="submit"></input>
      </form>
    </div>
  )
}
export default Form3