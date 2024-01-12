import { useEffect, useState } from "react";

function UseEffect2(){
    const [data ,setdats]=useState(0);
    useEffect(()=>{
        console.log("useEffect is called")
    },[ ]);

    return(
        <div>
           <h1> my data is: {data}</h1>
           <button onClick={()=>setdats(data+1)}>useEffect</button>
        </div>
    )
}export default UseEffect2