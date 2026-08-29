// Student class
class Student {
  constructor(name, rollNo, department, cgpa) {
    this.name = name;
    this.rollNo = rollNo;
    this.department = department;
    this.cgpa = cgpa;
  }
}

// DOM selection
const form = document.getElementById("studentForm");
const container = document.getElementById("profileContainer");

// Event handling — build the object from form input on submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading on submit

  // Read the values the user typed in
  const name = document.getElementById("nameInput").value;
  const rollNo = document.getElementById("rollInput").value;
  const department = document.getElementById("deptInput").value;
  const cgpa = document.getElementById("cgpaInput").value;

  // Create the object with the user-provided values
  const student1 = new Student(name, rollNo, department, cgpa);

  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "profile-card";

  const title = document.createElement("h2");
  title.textContent = "Student Profile";
  card.appendChild(title);

  const fields = [
    { label: "Name", value: student1.name },
    { label: "Roll No", value: student1.rollNo },
    { label: "Department", value: student1.department },
    { label: "CGPA", value: student1.cgpa }
  ];

  fields.forEach(field => {
    const p = document.createElement("p");
    const label = document.createElement("span");
    label.className = "label";
    label.textContent = field.label + " :";
    p.appendChild(label);
    p.appendChild(document.createTextNode(field.value));
    card.appendChild(p);
  });

  container.appendChild(card);
});