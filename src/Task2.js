import { Formik, Field, Form, ErrorMessage } from "formik";

function Task2() {
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
    } else if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}/.test(values.password)) {
      errors.password = "Password must be at least 10 characters and include letters, numbers, and special characters";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\+91[0-9]{10}$/.test(values.mobile)) {
      errors.mobile = "Mobile number should start with +91 and have 10 digits";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    if (!values.city) {
      errors.city = "City is required";
    } else if (!/^[A-Z][A-Za-z]*$/.test(values.city)) {
      errors.city = "City should be all capital letters and alphabets only";
    }

    if (!values.zipcode) {
      errors.zipcode = "Zipcode is required";
    } else if (!/^[0-9]{6}$/.test(values.zipcode)) {
      errors.zipcode = "Zipcode should have 6 digits and only numbers";
    }

    return errors;
  }

  function handleSubmit(values ,actions) {
    
    console.log("Form values:", values);
    actions.resetForm();
  }
 

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form>
          {/* Your form fields */}
          {/* ... */}
          <label>Name:</label>
          <Field name="name" type="text" placeholder="Full Name" /><br></br>
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />

          <label>Email:</label>
          <Field name="email" type="email" placeholder="Your Email" /><br></br>
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <label>Password:</label>
          <Field name="password" type="password" placeholder="Your Password" /><br></br>
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <label>Mobile:</label>
          <Field name="mobile" type="text" placeholder="Your Mobile" /><br></br>
          <ErrorMessage name="mobile" component="div" style={{ color: "red" }} />

          <label>Address:</label>
          <Field name="address" type="text" placeholder="Your Address" /><br></br>
          <ErrorMessage name="address" component="div" style={{ color: "red" }} />

          <label>Address2:</label>
          <Field name="address2" type="text" placeholder="Your Address2" /><br></br>
          <ErrorMessage name="address2" component="div" style={{ color: "red" }} />

          <label>City:</label>
          <Field as="select" name="city">
            <option value="">Select City</option>
            <option value="INDORE">Indore</option>
            <option value="BHOPAL">Bhopal</option>
            <option value="SATNA">Satna</option>
          </Field><br></br>
          <ErrorMessage name="city" component="div" style={{ color: "red"  }} />

          <label>Zipcode:</label>
          <Field name="zipcode" type="text" placeholder="Your Zipcode" /><br></br>
          <ErrorMessage name="zipcode" component="div" style={{ color: "red" }} />

          <button type="submit">Submit</button>
        

         
        </Form>
      </Formik>
    </div>
  );
}

export default Task2;
