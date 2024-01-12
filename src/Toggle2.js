import { useState } from "react";

 
 function Toggle2(){
  const [data,setdata]=useState(true);
  console.log(data)

  return(
    <div>
        {
            data?<h1>welcome</h1>:<h1>Goodbye</h1>
        }
        <button onClick={()=>setdata(true)}>welcome</button>
        <button onClick={()=>setdata(false)}>Goodbye</button>
    </div>
  )
 } export default Toggle2;