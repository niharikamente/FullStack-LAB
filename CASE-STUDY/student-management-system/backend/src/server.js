import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Student } from './models/Student.js';

// Resolve DNS SRV query issues on Windows
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch {
  // Use default system DNS if override fails
}

// Ensure .env is loaded regardless of execution directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  process.env.FRONTEND_ORIGIN,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5174',
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
  })
);

app.use(express.json());

// In-memory fallback if MongoDB is not connected
const memoryStudents = [
  { id: '1', name: 'Aarav Sharma', email: 'aarav@example.com', course: 'Computer Science', rollNumber: 'CS101' },
  { id: '2', name: 'Mira Patel', email: 'mira@example.com', course: 'Information Technology', rollNumber: 'IT102' },
];

let isDbConnected = false;

// Connect to MongoDB Atlas
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('⚠️ MONGODB_URI not found in environment variables. Using in-memory fallback.');
    return;
  }

  try {
    await mongoose.connect(uri);
    isDbConnected = true;
    console.log('✅ Connected to MongoDB Atlas successfully');

    // Seed default students if collection is empty
    const count = await Student.countDocuments();
    if (count === 0) {
      await Student.insertMany([
        { name: 'Aarav Sharma', email: 'aarav@example.com', course: 'Computer Science', rollNumber: 'CS101' },
        { name: 'Mira Patel', email: 'mira@example.com', course: 'Information Technology', rollNumber: 'IT102' },
      ]);
      console.log('🌱 Seeded sample students into MongoDB Atlas');
    }
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    console.error('💡 Tip: Ensure your current IP is whitelisted in MongoDB Atlas Network Access (or set to 0.0.0.0/0).');
  }
};

mongoose.connection.on('disconnected', () => {
  isDbConnected = false;
  console.warn('⚠️ MongoDB disconnected.');
});

mongoose.connection.on('connected', () => {
  isDbConnected = true;
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    database: isDbConnected ? 'MongoDB Atlas' : 'in-memory-fallback',
  });
});

// GET /api/students - List all students
app.get('/api/students', async (_req, res) => {
  try {
    if (isDbConnected) {
      const students = await Student.find().sort({ createdAt: -1 });
      return res.json(students);
    }
    return res.json(memoryStudents);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// POST /api/students - Add a student
app.post('/api/students', async (req, res) => {
  const { name, email, course, rollNumber } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  try {
    if (isDbConnected) {
      const newStudent = await Student.create({
        name,
        email,
        course: course || 'General',
        rollNumber: rollNumber || '',
      });
      return res.status(201).json(newStudent);
    }

    // In-memory fallback
    const newStudent = {
      id: String(Date.now()),
      name,
      email,
      course: course || 'General',
      rollNumber: rollNumber || '',
    };
    memoryStudents.unshift(newStudent);
    return res.status(201).json(newStudent);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// PUT /api/students/:id - Update student
app.put('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, course, rollNumber } = req.body;

  try {
    if (isDbConnected) {
      const updated = await Student.findByIdAndUpdate(
        id,
        { name, email, course, rollNumber },
        { new: true, runValidators: true }
      );
      if (!updated) return res.status(404).json({ error: 'Student not found.' });
      return res.json(updated);
    }

    const index = memoryStudents.findIndex((s) => s.id === id);
    if (index === -1) return res.status(404).json({ error: 'Student not found.' });
    memoryStudents[index] = { ...memoryStudents[index], name, email, course, rollNumber };
    return res.json(memoryStudents[index]);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// DELETE /api/students/:id - Delete student
app.delete('/api/students/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (isDbConnected) {
      const deleted = await Student.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ error: 'Student not found.' });
      return res.json({ message: 'Student deleted successfully.', id });
    }

    const index = memoryStudents.findIndex((s) => s.id === id);
    if (index === -1) return res.status(404).json({ error: 'Student not found.' });
    const [deleted] = memoryStudents.splice(index, 1);
    return res.json({ message: 'Student deleted successfully.', id: deleted.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

connectDB();

app.listen(port, () => {
  console.log(`Student API listening on port ${port}`);
});
