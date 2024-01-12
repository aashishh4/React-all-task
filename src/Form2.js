import { useState } from "react";
function Form2()
{
  const [email,setemail]=useState()
  const[pass,setpass]=useState()
  const[msg,setmsg]=useState()
  function change(e)
  {
    email==="ram"?pass==="1234"?setmsg("welcome"+email):setmsg("worng password"):pass==="1234"?setmsg("worng Email"):setmsg("worng Email and password")
    e.preventDefault()
  }

  return(
    <div>
      <h1>{msg}</h1>
      <form onSubmit={change}>
      <label>Email</label>
      <input type="text" onChange={(e)=>setemail(e.target.value)}/><br/>
      <label>password:</label>
      <input type="text" onChange={(e)=>setpass(e.target.value)}/><br/>
      <input  type="submit"></input>
      </form>
    </div>
  )
}
export default Form2