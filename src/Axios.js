import { useState } from "react";
import axios from "axios";

function Axios() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleApi = () => {

    axios.post('http://143.110.254.91/chandigarh-sweets/public/api/login', {
        name: name,
        mob: mobile,
      })
      .then((result) => {
        console.log(result.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      Name: <input type="text" value={name} onChange={handleName} /><br /><br />
      Mobile: <input type="text" value={mobile} onChange={handleMobile} /><br /><br />
      <button onClick={handleApi}>Submit</button>
    </div>
  );
}

export default Axios;
