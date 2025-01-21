import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import * as yup from "yup";
import Input from "./Input";
import Button from "./Button";

function Register() {
  const [activeRole, setActiveRole] = useState("student");

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    FirstName: yup.string().required("FirstName is required"),
    LastName: yup.string().required("LastName is required"),
  });

  const {handleSubmit,values,handleChange,errors,handleBlur,touched,isValid,} = useFormik({
    initialValues: {
      email: "",
      password: "",
      FirstName:"",
      LastName:"",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  function callLoginApi(values) {
    console.log("Sending Data", values.FirstName,values.LastName,values.email, values.password);
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
          <form onSubmit={handleSubmit}>
            <div>
              <Input label="FirstName" id="FirstName" value={values.FirstName} name="FirstName" type="text" onBlur={handleBlur} touched={touched.FirstName} error={errors.FirstName} onChange={handleChange} icon={IoPersonOutline} placeholder="FirstName" />
            </div>
            <div>
              <Input label="LastName" id="LastName" value={values.LastName} name="LastName" type="text" onBlur={handleBlur} touched={touched.LastName} onChange={handleChange} error={errors.LastName} icon={IoPersonOutline} placeholder="LastName" />
            </div>
            <div>
              <Input label="email address" id="email" value={values.email} name="email" type="email" onBlur={handleBlur} onChange={handleChange} touched={touched.email} error={errors.email} icon={MdOutlineMailLock} placeholder="Email" />
            </div>
            <div>
              <Input label="password" id="password" value={values.password} name="password" type="password" onBlur={handleBlur} onChange={handleChange} touched={touched.password} error={errors.password} icon={CiLock} placeholder="password" />
            </div>

            <Button type="submit" disabled={!isValid} message="Register Me"/>

            <div className="flex justify-between text-sm mt-2">
              <p>Already Registered?</p>
              <Link to="/Login" className="text-blue-600 text-lg">
              <div className="flex justify-between text-md items-center">
                <IoPersonOutline/>
                <p className="ml-2 text-sm text-black">Login</p>
              </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;