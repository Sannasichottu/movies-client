import { useFormik } from "formik";
import * as yup from 'yup';

// const validateForm = (values) => {
//   const errors = {}
  
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address';
//   }
  
//  if(values.password.length < 8){
//    errors.password = "Please provide a longer password";
   
//  }
//  console.log(errors)
//    return errors;
// }

const formValidaionSchema= yup.object({
  email:yup.string().min(5),
})

export function BasicForm() {

  const formik = useFormik({
    initialValues: {email:'', password:''},
    // validate: validateForm,
    validationSchema: formValidaionSchema,
    onSubmit: (values) => {
      console.log("onSumbit", values)
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email" 
          placeholder="Enter your email" />

{formik.errors.email && formik.touched.email && formik.errors.email}
      <input 
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password" 
          placeholder="Enter your number" />

{ formik.errors.password && formik.touched.password && formik.errors.password}
      <button type="submit">submit</button>
    </form>
  );
}
