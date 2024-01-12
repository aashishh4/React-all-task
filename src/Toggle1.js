import { useState } from "react";

function Toggle1(){
    const [data ,setdata]=useState(false);
    console.log("data"+data)



    return(
        <div>
            {
                data?<h1>show</h1>:<h1> </h1>
            }
            <button onClick={()=>setdata(!data)}>Toggle1</button>
        </div>
    )
}export default Toggle1;