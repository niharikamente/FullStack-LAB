import Student from "./Student";
import { useState } from "react";

function App() {

  // State for input
  const [name, setName] = useState("");

  // State for mouse event
  const [message, setMessage] = useState("Move your mouse here");

  // 1. onClick event
  function handleClick() {
    alert("Welcome to the Student Management System!");
  }

  // 2. onChange event
  function handleChange(event) {
    setName(event.target.value);
  }

  // 3. onMouseEnter event
  function handleMouseEnter() {
    setMessage("Mouse entered!");
  }

  // 4. onMouseLeave event
  function handleMouseLeave() {
    setMessage("Mouse left!");
  }

  // 5. onKeyDown event
  function handleKeyDown(event) {
    console.log("Key pressed:", event.key);
  }

  // 6. onSubmit event
  function handleSubmit(event) {
    event.preventDefault();
    alert("Student form submitted!");
  }

  return (
    <div>

      <h1>Student Management System</h1>

      {/* onClick */}
      <button onClick={handleClick}>
        Click Me
      </button>


      {/* onChange */}
      <h2>Student Name</h2>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter student name"
      />

      <p>Student Name: {name}</p>


      {/* onMouseEnter and onMouseLeave */}
      <h2
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {message}
      </h2>


      {/* onKeyDown */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Press any key"
      />


      {/* onSubmit */}
      <form onSubmit={handleSubmit}>

        <h2>Student Registration</h2>

        <input
          type="text"
          placeholder="Enter student name"
        />

        <button type="submit">
          Submit
        </button>

      </form>


      {/* Student Component */}
      <Student />

    </div>
  );
}

export default App;