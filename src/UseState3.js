import { useState } from "react";
function UseState3(){
    const [data,setdata]=useState(0)
    console.log(data)
     
    return(
        <div>
            <h1>my data is:{data}</h1>
            <button onClick={()=>setdata(data+1)}>submit</button>
        </div>
    )
}export default UseState3