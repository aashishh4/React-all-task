import { ErrorMessage, Field, Form, Formik } from "formik";

function Ashishsir() {
  const initialValues = {
    num: ""
  };

  

    function validateForm(values) {
        const errors = {};
      
        if (!values.num) {
          errors.num = "Number is required";
        } else if (!["6", "7", "8", "9"].includes(values.num[0])) {
          errors.num = "The first digit should start with any of these digits: 6, 7, 8, or 9";
        } else if (!/^\d{10}$/.test(values.num)) {
          errors.num = "Number should be 10 digits without spaces";
        }
      
        return errors;
      }
      

  const handleForm = (values, actions) => {
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
          <label>Mobile:</label>
          <Field type="text" name="num" placeholder="Enter your number" /><br />
          <ErrorMessage name="num" component="div" style={{ color: "red" }} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Ashishsir;
