const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");

// Get all students
function loadStudents() {
  fetch("/api/students")
    .then((response) => response.json())
    .then((students) => {

      studentTable.innerHTML = "";

      students.forEach((student) => {

        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.course}</td>
        `;

        studentTable.appendChild(row);
      });

    })
    .catch((error) => {
      console.log("Error loading students:", error);
    });
}


// Add a new student
studentForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;

  const studentData = {
    name: name,
    age: age,
    course: course
  };

  fetch("/api/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(studentData)
  })
    .then((response) => response.json())
    .then((student) => {

      alert("Student added successfully!");

      studentForm.reset();

      loadStudents();

    })
    .catch((error) => {
      console.log("Error adding student:", error);
    });

});


// Load students when page opens
loadStudents();