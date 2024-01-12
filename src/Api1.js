import React, { useState, useEffect } from "react";

function Api1() {
  const [data1, setdata1] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setdata1(result);
      });
  }, []);

  return (
    <div>
        {
          data1.map((item,i)=>
          <h2 key={i}>
           <p>{item.id}</p> 
           <p> {item.name}</p>
           <p> {item.username}</p>
          </h2>)
        }
    </div>
  )
   
  }
export default Api1;
