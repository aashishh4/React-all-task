import React, { useState } from "react";
import axios from "axios";

function Axios1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [response, setResponse] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    
    axios
      .post("https://reqres.in/api/login", {
        email: name,
        password: age
      })
      .then((result) => {
        setResponse(result.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(name, age);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Axios1;
