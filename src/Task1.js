import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";

function Task1() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    address2: "",
    city: "",
    zipcode: "",
  };

  function validateForm(values) {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z]+$/.test(values.name)) {
      errors.name = "Name should contain only alphabets";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      !/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must be at least 10 characters and include letters, numbers, and special characters";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\+91[0-9]{10}$/.test(values.mobile)) {
      errors.mobile =
        "Mobile number should start with +91 and have 10 digits";
    }

    if (!values.address) {
      errors.address = "Address is required";
    } else if (!/^[a-zA-Z0-9\s]*$/.test(values.address)) {
      errors.address =
        "Address should be alphanumeric with no special characters";
    }
    if (!values.address2) {
      errors.address = "Address is required";
    } else if (!/^[a-zA-Z0-9\s]*$/.test(values.address2)) {
      errors.address =
        "Address should be alphanumeric with no special characters";
    }

    if (!values.city) {
      errors.city = "City is required";
    } else if (!/^[A-Z]+$/.test(values.city)) {
      errors.city = "City should only contain capital letters";
    }

    if (!values.zipcode) {
      errors.zipcode = "Zipcode is required";
    } else if (!/^[0-9]{6}$/.test(values.zipcode)) {
      errors.zipcode = "Zipcode should have 6 digits and only numbers";
    }

    return errors;
  }

  function handleForm(values,actions){
    console.log(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleForm}
      >
        <Form>
          <label>Name:</label>
          <Field type="text" name="name" placeholder="Enter name" /><br />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />

          <label>Email:</label>
          <Field type="email" name="email" placeholder="Enter email" /><br />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <label>Password:</label>
          <Field type="password" name="password" placeholder="Enter password" /><br />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <label>Mobile:</label>
          <Field type="text" name="mobile" placeholder="Enter number" /><br />
          <ErrorMessage name="mobile" component="div" style={{ color: "red" }} />

          <label>Address:</label>
          <Field type="text" name="address" placeholder="Enter address" /><br />
          <ErrorMessage name="address" component="div" style={{ color: "red" }} />

          <label>Address2:</label>
          <Field type="text" name="address2" placeholder="Enter address2" /><br />
          <ErrorMessage name="address2" component="div" style={{ color: "red" }} />

          <label>City:</label>
          <Field type="text" name="city" placeholder="Enter city" /><br />
          <ErrorMessage name="city" component="div" style={{ color: "red" }} />

          <label>Zipcode:</label>
          <Field type="text" name="zipcode" placeholder="Enter zipcode" /><br />
          <ErrorMessage name="zipcode" component="div" style={{ color: "red" }} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Task1;
