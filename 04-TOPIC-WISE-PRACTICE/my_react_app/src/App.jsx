import studentImage from "./assets/student.png";
import "./App.css";

function App() {

  const headingStyle = {
        color: "blue",
        fontSize: "50px"
    };

  const name = "Niharika";
    const age = 19;
    const department = "CSM";

  const imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/050/894/408/small/young-woman-teacher-teaching-cartoon-character-illustration-of-teacher-explaining-in-front-of-the-board-free-vector.jpg";
  
  function showMessage() {
        alert("Welcome " + name);
    }

  return (
    // JSX Fragment--allows to group multiple JSX elements

    <>
      <h1 style={headingStyle} tabIndex={0}>Welcome to React</h1>

      {/* JSX with JavaScript Variables */}

      <h2 tabIndex={0}>Student Information</h2>
      <p tabIndex={0}>Name: {name}</p>
      <p tabIndex={0}>Age: {age}</p>
      <p tabIndex={0}>Department: {department}</p>

      {/* className in JSX */}

      <div className="image-container">

      {/* JSX Attributes */}

      <img src={studentImage} alt="Student" width="200" height="200" />

      {/* JSX Attributes with JavaScript Values */}\

      <img src={imageUrl} alt="Teacher" width="200" height="200" />
      </div>
      {/* JSX Events */}
      <button tabIndex={0} onClick={showMessage}>Click Me</button>
    </>
  );
}

export default App;
