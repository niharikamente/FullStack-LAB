// Student class
  class Student {
    constructor(name, rollNo, department, cgpa) {
      this.name = name;
      this.rollNo = rollNo;
      this.department = department;
      this.cgpa = cgpa;
    }
  }

  // Create object with user-provided values
  const student1 = new Student("Niharika", "A24126552097", "CSE (AI & ML)", 8.88);

  // DOM selection
  const btn = document.getElementById("showProfileBtn");
  const container = document.getElementById("profileContainer");

  // Event handling
  btn.addEventListener("click", function () {
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