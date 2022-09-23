import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchRegister } from "../../../api";
import "./signup.css";

console.log(fetchRegister);
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
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
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema: SignupSchema,
      onSubmit: async (values, bag) => {
        console.log(values);
        // try {
        //   const registerData=await fetchRegister({email:values.email,password:values.password})
        //   console.log(registerData);
        // } catch (error) {

        // }
      },
    });
  //hataları bunla yakıalayabiliyorum
  // console.log(errors);

  return (
    <div>
      <h1 className="title-reg text-center mt-5">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName && (
                <div className="error">{errors.firstName}</div>
              )}
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName && (
                <div className="error">{errors.lastName}</div>
              )}
            </div>
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
            <div className="mb-3">
              <label className="form-label">Password Confirm</label>
              <input
                type="password"
                className="form-control"
                name="passwordConfirm"
                onChange={handleChange}
                value={values.passwordConfirm}
                onBlur={handleBlur}
              />
              {errors.passwordConfirm && touched.passwordConfirm && (
                <div className="error">{errors.passwordConfirm}</div>
              )}
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
