import { useState } from "react";
function Toggle()
{
    const [data,setdata]=useState(true)
    console.log(data);

    return(
        <div>
            {
                data?<h1>welcome</h1>:<h1>goodbye</h1>
            }
            <button onClick={()=>setdata(!data)}>Toggle</button>
        </div>
    )
}export default Toggle