import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function MyForm1() {
  return (
    <div>
      <Formik
        initialValues={{ name: "", name1: "", num: "", Email: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(5, 'Minimum 5 characters')
            .max(10, 'Name must be 10 characters or less')
            .required('This field is required'),
          name1: Yup.string()  
            .min(5, 'Minimum 5 characters')
            .max(10, 'Name must be 10 characters or less')
            .required('This field is required'),
          num: Yup.string()
            .max(10, "Number must be 10 characters or less")
            .required("This field is required"),
          Email: Yup.string()
            .min(10, 'Minimum 10 characters')
            .max(20, 'Email must be 20 characters or less')
            .required('This field is required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
        
            First Name <Field name="name" type="text" placeholder="Enter first name" /><br></br>
            <ErrorMessage name="name" component="div" style={{ color: "red" }} />
          

          
            Last Name <Field name="name1" type="text" placeholder="Enter last name" /><br></br>
            <ErrorMessage name="name1" component="div" style={{ color: "red" }} />
          

          
            Number <Field name="num" type="text" placeholder="Enter your number" /><br></br>
            <ErrorMessage name="num" component="div" style={{ color: "red" }} />
          

          
            Email <Field name="Email" type="text" placeholder="Enter your email" /><br></br>
            <ErrorMessage name="Email" component="div" style={{ color: "red" }} />
          

          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default MyForm1;
