import React from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], "Password does not match")
      .required("Required"),
  });

function SignUp() {
    const formik = useFormik({
        initialValues: {
          email:'',
          password:'',
          passwordConfirm:'',
        },
        validationSchema:SignupSchema,
        onSubmit:async(values,bag)=>{
            console.log(values);
        },
    
       
        })

      

  return (
    <div>
      <h1 className="text-center mt-5">Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
            <div className="row">
        <div className="mb-3">
          <label 
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password Confirm
          </label>
          <input
            type="password"
            className="form-control"
            name="passwordConfirm"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
            onBlur={formik.handleBlur}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Register
        </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
