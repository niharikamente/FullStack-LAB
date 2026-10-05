import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import Students from "./components/Students";
import Courses from "./components/Courses";
import Student from "./components/Student";

function App() {

  return (
    <BrowserRouter>

      <nav>

        <Link to="/">Home</Link>{" | "}

        <Link to="/students">Students</Link>{" | "}

        <Link to="/courses">Courses</Link>{" | "}

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/students/:id"
          element={<Student />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;