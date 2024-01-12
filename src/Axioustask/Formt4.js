import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";

function Formt4() {
    const [data1, setdata1] = useState();

    const initialValues = {
        email: "",
        pass: ""
    }
    function validateForm(prop) {
        const errors = {};
        if (!prop.email) {
            errors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(prop.email)) {
            errors.email = "Invalid email address";
        }
        if (!prop.pass) {
            errors.pass = "Password is required";
        }
        return errors;
    }

    function handleForm(prop,actions){
        const obj={
            email: prop.email,
            password:prop.pass,
        }
        console.log(obj);
        axios
        .post("https://jsonplaceholder.typicode.com/users", obj)
        .then((Response)=>{
            setdata1(Response.data);
            console.log(Response);
            alert(Response.status)
        })
        .catch(error => {
            console.error("Error:", error);
        });
        actions.resetForm();
    }
    console.log(data1)

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={handleForm}
            >
                <Form>
                    <label>Email</label>
                    <Field type="text" name="email" placeholder="Enter Email" /><br />
                    <ErrorMessage name="email" component="div" style={{ color: "red" }} />

                    <label>Password</label>
                    <Field type="text" name="pass" placeholder="Enter password" /><br />
                    <ErrorMessage name="pass" component="div" style={{ color: "green" }} />

                    <button type="submit">submit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default Formt4