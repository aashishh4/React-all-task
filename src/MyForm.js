import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

function MyForm() {
  return (
    <div>
      <Formik
        initialValues={{ name: "", address: "", mobile: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(10, "Minimum 10 characters")
            .max(15, "Maximum 15 characters")
            .required("This field is required"),

          address: Yup.string()
            .min(10, "Minimum 10 characters")
            .max(15, "Maximum 15 characters")
            .required("This field is required"),

          mobile: Yup.string()
            .min(10, "Minimum 10 characters")
            .max(10, "Maximum 10 characters")
            .required("This field is required"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          actions.resetForm();
        }}
      >
        <Form>
          <label>Name:</label>
          <Field type="text" name="name" placeholder="Enter name" /><br />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />

          <label>Address:</label>
          <Field type="text" name="address" placeholder="Enter address" /><br />
          <ErrorMessage name="address" component="div" style={{ color: "red" }} />

          <label>Mobile:</label>
          <Field type="number" name="mobile" placeholder="Enter number" /><br />
          <ErrorMessage name="mobile" component="div" style={{ color: "red" }} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default MyForm;
