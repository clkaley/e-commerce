import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchLogin } from "../../../api";


const SigInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

function SignIn() {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
  useFormik({
    initialValues: {
      email: "",
      password: "",  
    },
    validationSchema: SigInSchema,
    onSubmit: async (values, bag) => {
      console.log(values);
        try {
          const registerData=await fetchLogin(values)
          console.log(registerData);
        } catch (error) {

        }
    },
  });
//hataları bunla yakıalayabiliyorum
// console.log(errors);
  return (
    <div>
           <h1 className="title-reg text-center mt-5">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
          
            <button type="submit" className="btn btn-danger">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default SignIn