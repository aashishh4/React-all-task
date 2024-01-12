import { useState } from "react";
function Form5()
{
  const[sub,setsub]=useState("")
  const[sub1,setsub1]=useState("")
  const[sub2,setsub2]=useState("")
  const[sub3,setsub3]=useState("")
  const[total,settotal]=useState("")
  const[per,setper]=useState("")
   function change(e)
   {
    settotal(parseInt(sub)+parseInt(sub1)+parseInt(sub2)+parseInt(sub3))
    setper(parseInt(total/400*100))
    e.preventDefault()
   }
  return(
    <div>
     total= <h1>{total}</h1>
     persent= <h1>{per}</h1>
     <form onSubmit={change}>
      hindi<input type="text" onChange={(e)=>setsub(e.target.value)}></input><br></br>
      Eng<input type="text" onChange={(e)=>setsub1(e.target.value)}></input><br></br>
      math<input type="text" onChange={(e)=>setsub2(e.target.value)}></input><br></br>
      Bio<input type="text" onChange={(e)=>setsub3(e.target.value)}></input><br></br>
      <input type="submit"></input>
     </form>
    </div>
  )
}
export default Form5