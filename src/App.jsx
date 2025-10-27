import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup/signup";
import Login from "./Pages/Login/login";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;


