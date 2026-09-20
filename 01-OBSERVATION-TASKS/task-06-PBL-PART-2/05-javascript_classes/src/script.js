// Create a Student class
class Student {

    // Constructor initializes object properties
    constructor(name, rollNumber, course) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.course = course;
    }

    // Method to display student details
    getDetails() {
        return `
            Name: ${this.name}<br>
            Roll Number: ${this.rollNumber}<br>
            Course: ${this.course}<br>
        `;
    }
}

// Create multiple objects from the same class
const student1 = new Student(
    "Niharika",
    101,
    "CSE"
);

const student2 = new Student(
    "Rahul",
    102,
    "ECE"
);

const student3 = new Student(
    "Priya",
    103,
    "AI & ML"
);

// Display objects
document.getElementById("output").innerHTML =
    "<h3>Student 1</h3>" +
    student1.getDetails() +
    "<hr>" +

    "<h3>Student 2</h3>" +
    student2.getDetails() +
    "<hr>" +

    "<h3>Student 3</h3>" +
    student3.getDetails();