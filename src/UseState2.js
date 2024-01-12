import { useState } from "react";

function UseState2(){

    const [data,setdata]=useState("red");

    return(
        <div>
            <h1>{data}</h1>
            <button onClick={()=>setdata("blue")}>blue</button>
            <button onClick={()=>setdata("green")}>green</button>
            <button onClick={()=>setdata("red")}>red</button>
            <button onClick={()=>setdata("black")}>black</button>
            <button onClick={()=>setdata("yellow")}>yellow</button>
        </div>
    )
}export default UseState2