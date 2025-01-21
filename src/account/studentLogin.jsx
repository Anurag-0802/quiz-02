import { MdOutlineMailLock } from "react-icons/md";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import * as yup from "yup";
import Input from "./Input";
import Button from "./Button";

function StudentLogin() {
  const [activeRole, setActiveRole] = useState("student");

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {handleSubmit,values,handleChange,errors,handleBlur,touched,isValid,} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  function callLoginApi(values) {
    console.log("Sending Data", values.email, values.password);
  }

  return (
    <div className="h-screen flex flex-col items-center bg-violet-100 justify-center">
      <div>
        <div className="bg-purple-500 p-3 rounded-t-md">
          <h1 className="text-white font-bold text-3xl mb-3">Quizzers</h1>
          <p className="text-white text-sm">
            "Unlock your knowledge. Start your journey today!"
          </p>
        </div>
        <div className="bg-white p-6 rounded-b-lg shadow-md">
          <h1 className="font-medium text-center mb-4">Welcome Back</h1>
          <div className="w-full p-1.5 mb-3 bg-gray-200 rounded-lg flex justify-between">
            <button
              type="button"
              onClick={() => setActiveRole("student")}
              className={`w-6/12 rounded-md transition duration-500 ${
                activeRole === "student" ? "bg-white" : ""
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setActiveRole("teacher")}
              className={`w-6/12 rounded-md transition duration-500 ${
                activeRole === "teacher" ? "bg-white" : ""
              }`}
            >
              Teacher
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <Input label="email address" id="email" value={values.email} name="email" type="email" onBlur={handleBlur} onChange={handleChange} touched={touched.email} error={errors.email} icon={MdOutlineMailLock} placeholder="Enter your Email" />
            </div>

            <div>
              <Input label="password" id="password" value={values.password} name="password" type="password" onBlur={handleBlur} onChange={handleChange} touched={touched.password} error={errors.password} icon={CiLock} placeholder="Enter your Password" />
            </div>

            <div className="text-sm flex items-center justify-between mt-3 mb-5">
              <div>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="text-black ml-2">
                  Remember me
                </label>
              </div>
              <Link to="/" className="text-blue-600">
                Forgot password?
              </Link>
            </div>

            {activeRole==="student" ? <Button type="submit" disabled={!isValid} message="Sign in as a Student" /> : <Button type="submit" disabled={!isValid} message="Sign in as a Teacher" />}  
            <div className="flex text-sm mt-2">
              <p>Don't have an account?</p>
              <Link to="/Register" className="text-blue-600 ml-2">
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;