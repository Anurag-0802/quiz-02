import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../account/Register";
import StudentLogin from "../account/studentLogin";

export default function App() {
  return (
    <Routes>
      <Route path="/Login" element={<StudentLogin />} />
      <Route path="/" element={<StudentLogin />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}
