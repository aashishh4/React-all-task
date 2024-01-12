import { useState,useEffect } from "react";
function UseEffect()
{
    const[ data,setdata]=useState(0)
    const[count,setcount]=useState(100)

    useEffect(()=>{console.log("UseEffect is called")},[])
    return(
        <div>
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={()=>setdata(data+1)}>data</button>
            <button onClick={()=>setcount(count+1)}>count</button>
        </div>
    )
}export default UseEffect;