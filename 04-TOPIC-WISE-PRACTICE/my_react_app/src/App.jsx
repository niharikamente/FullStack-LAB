import studentImage from "./assets/student.png";
import "./App.css";

function App() {
  const imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/050/894/408/small/young-woman-teacher-teaching-cartoon-character-illustration-of-teacher-explaining-in-front-of-the-board-free-vector.jpg";
  function showMessage() {
        alert("Button clicked!");
    }

  return (
    <>
      <h1 className="heading">Welcome to React</h1>

      <h2>Student Information</h2>
      <p>Name: Neha</p>
      <p>Department: CSE</p>
      <p>Year: 3rd</p>
      <img src={studentImage} alt="Student" width="200" height="200" />
      <img src={imageUrl} alt="Teacher" width="200" height="200" />
      <button onClick={showMessage}>Click Me</button>
    </>
  );
}

export default App;
