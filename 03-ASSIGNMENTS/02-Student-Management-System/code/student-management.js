// Select database
use("collegeDB");

// Create collection
db.createCollection("students");

// Insert students
db.students.insertMany([
    {
        rollNo: "23CM001",
        name: "Ravi Kumar",
        branch: "CSE-AIML",
        year: 3,
        marks: 90,
        email: "ravi@example.com"
    },
    {
        rollNo: "23CM002",
        name: "Priya Sharma",
        branch: "CSE-AIML",
        year: 3,
        marks: 92,
        email: "priya@example.com"
    },
    {
        rollNo: "23CM003",
        name: "Arjun Reddy",
        branch: "CSE",
        year: 2,
        marks: 68,
        email: "arjun@example.com"
    },
    {
        rollNo: "23CM004",
        name: "Sneha Rao",
        branch: "ECE",
        year: 3,
        marks: 45,
        email: "sneha@example.com"
    }
]);

// Display all students
db.students.find();

// Students from CSE-AIML
db.students.find({ branch: "CSE-AIML" });

// Students scoring more than 75
db.students.find({ marks: { $gt: 75 } });

// Search by roll number
db.students.find({ rollNo: "23CM001" });

// Students in year 3
db.students.find({ year: 3 });

// Update marks
db.students.updateOne(
    { rollNo: "23CM001" },
    { $set: { marks: 90 } }
);

// Update email
db.students.updateOne(
    { rollNo: "23CM001" },
    { $set: { email: "ravi.kumar@example.com" } }
);

// Delete student
db.students.deleteOne({ rollNo: "23CM005" });

// Sort students by marks in descending order
db.students.find().sort({ marks: -1 });

// Create index on rollNo
db.students.createIndex({ rollNo: 1 });

// Display indexes
db.students.getIndexes();

// Real-time queries

// Students scoring above 80
db.students.find({ marks: { $gt: 80 } });

// Students scoring below 50
db.students.find({ marks: { $lt: 50 } });

// Highest-scoring student
db.students.find().sort({ marks: -1 }).limit(1);

// Students from CSE
db.students.find({ branch: "CSE" });

// Students sorted according to marks
db.students.find().sort({ marks: -1 });