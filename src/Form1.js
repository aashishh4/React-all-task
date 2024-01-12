 import { useState } from 'react';

 function Form1() {

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [address, setAddress] = useState('');
   const [email, setEmail] = useState('');

   function change(e) {
     e.preventDefault()
     const as={
       firstName:firstName,
       lastName:lastName,
       address:address,
       email:email
     }

     
     console.log('First Name:', firstName);
     console.log('Last Name:', lastName);
     console.log('Address:', address);
     console.log('Email:', email);
     console.log(as)
   };
   return (
     <div>
       <h1>Basic Form</h1>
       <form onSubmit={change}>

         First Name <input type="text" placeholder="First Name"  onChange={(e) => setFirstName(e.target.value)} /><br></br>
         Last Name<input type="text" placeholder="Last Name"  onChange={(e) => setLastName(e.target.value)} /> <br />

         Address <input type="text" placeholder="Address"  onChange={(e) => setAddress(e.target.value)} /><br></br>
         Email <input type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/> <br />

         <button type="submit">Submit</button>
       </form>
     </div>
   );
 }

 export default Form1;
