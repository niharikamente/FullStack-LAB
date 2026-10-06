import React from "react";

import Home from "./components/Home";
import Student from "./components/Student";
import Course from "./components/Course";
import About from "./components/About";
import Contact from "./components/Contact";
import Faculty from "./components/Faculty";

function App() {
  return (
    <div className="app">

      <h1>Student Management System</h1>

      <Home />

      <Student />

      <Course />

      <About />

      <Contact />

      <Faculty />

    </div>
  );
}

export default App;