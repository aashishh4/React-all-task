import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";

function Formt11(){
    const [data,setdata]=useState();

    const initialValues={
        name:"",age:""
    }

    function Formvalidate(values){
        const errors={}
        if(!values.name){
            errors.name = "name is required";
        }
        if(!values.age){
            errors.age="Age is required"
        }
        return errors;

    }
    function handleForm(values,actions){
      //  console.log(values)
        const obj={
            Name:values.name,
            Age:values.age
        }
        console.log(obj)
        axios
        .post("https://jsonplaceholder.typicode.com/users",obj)
        .then((Response)=>{
           // console.log(Response)
            setdata(Response.data)
        })
        .catch(error => {
            console.error("Error:", error);
        });
        actions.resetForm();
    }
   console.log(data )

    return(
        <div>
            <Formik 
            initialValues={initialValues}
            validate={Formvalidate}
            onSubmit={handleForm}>
                <Form>
                    <label>Name</label>
                    <Field type="text" name="name" placeholder="Enter name"/><br/>
                    <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                    <label>Age</label>
                    <Field type="text" name="age" placeholder="Enter Age"/><br/>
                    <ErrorMessage name="age" component="div" style={{ color: "red" }} />
                    <button type="submit">submit</button>
                </Form>
            </Formik>
        </div>
    )
}export default Formt11;