import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup/signup";
import Login from "./Pages/Login/login";
import { useEffect, useState } from "react";

function App() {
  const [usersData,setUsersData]=useState([]);
 
  const getUsersData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

useEffect(() => {
  getUsersData();
}, []);

  
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;


