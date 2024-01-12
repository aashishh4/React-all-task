import React, { useState } from "react";

function Form6() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [msg, setMsg] = useState(0);

  function change(e) {
    e.preventDefault();
    setMsg(parseInt(num1) + parseInt(num2));
  }

  return (
    <div>
      <input type="number" onChange={(e) => setNum1(e.target.value)} /><br />
      <input type="number" onChange={(e) => setNum2(e.target.value)} /><br />
      
      <button onClick={change}>ok</button><br/>
      {msg}
    </div>
  );
}

export default Form6;
