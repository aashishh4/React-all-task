import { ErrorMessage, Field, Form, Formik } from "formik";

function Task5() {
  const initialValues = {
    name: "",
    address: "",
  };

  function validateForm(values) {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z]+$/.test(values.name)) {
      errors.name = "Name should contain only alphabets";
    }

    if (!values.address) {
      errors.address = "Address is required";
    } else if (!/^[a-zA-Z0-9\s]*$/.test(values.address)) {
      errors.address = "Address should be alphanumeric with no special characters";
    }

    return errors;
  }

  function handleForm(values, actions) {
    console.log(values);
  
    actions.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleForm}
      >
        <Form>
          <label>Name</label>
          <Field type="text" name="name" placeholder="Enter name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} /><br />

          <label>Address</label>
          <Field type="text" name="address" placeholder="Enter address" />
          <ErrorMessage name="address" component="div" style={{ color: "green" }} /><br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Task5;
