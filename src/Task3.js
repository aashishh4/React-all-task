

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Task3() {
  return (
    <div>
      <h1>Form Validation Example</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          mobile: '',
          address: '',
          address2: '',
          city: '',
          zipcode: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required("Name is required")
            .matches(/^[A-Za-z]+$/, "Name should contain only alphabets"),
          email: Yup.string()
            .required("Email is required")
            .email("Invalid email address"),
          password: Yup.string()
            .required("Password is required")
            .matches(
              /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}/,
              "Password must be at least 10 characters and include letters, numbers, and special characters"
            ),
          mobile: Yup.string()
            .required("Mobile number is required")
            .matches(/^\+91[0-9]{10}$/, "Mobile number should start with +91 and have 10 digits"),
          address: Yup.string()
            .required("Address is required")
            .matches(/^[a-zA-Z0-9\s]*$/, "Address should be alphanumeric with no special characters"),
          address2: Yup.string()
            .required("Address is required")
            .matches(/^[a-zA-Z0-9\s]*$/, "Address should be alphanumeric with no special characters"),
          city: Yup.string()
            .required("City is required")
            .matches(/^[A-Z]+$/, "City should only contain capital letters"),
          zipcode: Yup.string()
            .required("Zipcode is required")
            .matches(/^[0-9]{6}$/, "Zipcode should have 6 digits and only numbers"),
        })}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          console.log(JSON.stringify(values, null, 2));
          actions.resetForm();
        }}
      >
        <Form>
          <label>Name:</label>
          <Field type="text" name="name" placeholder="Enter your name" /><br/>
          <ErrorMessage name="name" component="div" className="error" />

          <label>Email:</label>
          <Field type="email" name="email" placeholder="Enter email" /><br/>
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <label>Password:</label>
          <Field type="password" name="password" placeholder="Enter password" /><br/>
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <label>Mobile:</label>
          <Field type="text" name="mobile" placeholder="Enter number" /><br/>
          <ErrorMessage name="mobile" component="div" style={{ color: "red" }} />

          <label>Address:</label>
          <Field type="text" name="address" placeholder="Enter address" /><br/>
          <ErrorMessage name="address" component="div" style={{ color: "red" }} />

          <label>Address2:</label>
          <Field type="text" name="address2" placeholder="Enter address2" /><br/>
          <ErrorMessage name="address2" component="div" style={{ color: "red" }} />

          <label>City:</label>
          <Field type="text" name="city" placeholder="Enter city" /><br/>
          <ErrorMessage name="city" component="div" style={{ color: "red" }} />

          <label>Zipcode:</label>
          <Field type="text" name="zipcode" placeholder="Enter zipcode" /><br/>
          <ErrorMessage name="zipcode" component="div" style={{ color: "red" }} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Task3;

