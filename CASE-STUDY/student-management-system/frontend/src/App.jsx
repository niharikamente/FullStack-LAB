import React, { useEffect, useState } from 'react';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [dbStatus, setDbStatus] = useState('Connecting...');
  const [searchTerm, setSearchTerm] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    rollNumber: '',
  });

  // Editing state
  const [editingId, setEditingId] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/students`);
      if (!response.ok) throw new Error(`API returned ${response.status}`);
      const data = await response.json();
      setStudents(data);
      setError('');
    } catch {
      setError('Could not load students. Check that the backend API is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  const fetchHealth = async () => {
    try {
      const response = await fetch(`${API_URL}/api/health`);
      if (response.ok) {
        const data = await response.json();
        setDbStatus(data.database || 'Connected');
      }
    } catch {
      setDbStatus('Offline');
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchHealth();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Name and Email are required.');
      return;
    }

    try {
      if (editingId) {
        // Update existing student
        const response = await fetch(`${API_URL}/api/students/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Failed to update student');
        const updated = await response.json();
        setStudents((prev) => prev.map((s) => (s.id === editingId ? updated : s)));
        setEditingId(null);
      } else {
        // Create new student in MongoDB
        const response = await fetch(`${API_URL}/api/students`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Failed to create student');
        const created = await response.json();
        setStudents((prev) => [created, ...prev]);
      }

      setFormData({ name: '', email: '', course: '', rollNumber: '' });
      setError('');
    } catch (err) {
      alert(err.message || 'Operation failed');
    }
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setFormData({
      name: student.name || '',
      email: student.email || '',
      course: student.course || '',
      rollNumber: student.rollNumber || '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', email: '', course: '', rollNumber: '' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student record?')) return;

    try {
      const response = await fetch(`${API_URL}/api/students/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete student');
      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      alert(err.message || 'Delete failed');
    }
  };

  const filteredStudents = students.filter((s) => {
    const term = searchTerm.toLowerCase();
    return (
      (s.name && s.name.toLowerCase().includes(term)) ||
      (s.email && s.email.toLowerCase().includes(term)) ||
      (s.course && s.course.toLowerCase().includes(term)) ||
      (s.rollNumber && s.rollNumber.toLowerCase().includes(term))
    );
  });

  return (
    <main>
      <div className="header-row">
        <div>
          <p className="eyebrow">Student Management System</p>
          <h1>Students</h1>
          <p className="intro">Manage records with MongoDB Atlas cloud persistence.</p>
        </div>
        <div className="badge">
          <span className="badge-dot"></span>
          <span>Database: {dbStatus}</span>
        </div>
      </div>

      {error && (
        <div className="error-banner" role="alert">
          {error}
        </div>
      )}

      {/* Add / Edit Form */}
      <div className="form-card">
        <h2>{editingId ? 'Edit Student Record' : 'Add New Student'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="rollNumber"
              placeholder="Roll Number (e.g. CS101)"
              value={formData.rollNumber}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="course"
              placeholder="Course (e.g. Computer Science)"
              value={formData.course}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="submit" className="btn btn-primary">
              {editingId ? 'Save Changes' : '+ Add Student to MongoDB'}
            </button>
            {editingId && (
              <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search by name, email, roll no..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="students-count">
          Showing {filteredStudents.length} of {students.length} students
        </span>
      </div>

      {/* Student List */}
      {loading ? (
        <p className="empty-state">Loading students from MongoDB...</p>
      ) : filteredStudents.length === 0 ? (
        <div className="empty-state">
          {searchTerm ? 'No students matched your search.' : 'No students found. Add your first student above!'}
        </div>
      ) : (
        <ul className="student-list">
          {filteredStudents.map((student) => (
            <li key={student.id} className="student-item">
              <div className="student-info">
                <div className="student-main-line">
                  <span className="student-name">{student.name || 'Student (No Name)'}</span>
                  {student.rollNumber && <span className="tag-roll">{student.rollNumber}</span>}
                  {student.course && <span className="tag-course">{student.course}</span>}
                </div>
                <div className="student-sub-line">
                  <span>{student.email || 'No email provided'}</span>
                </div>
              </div>
              <div className="student-actions">
                <button
                  type="button"
                  className="btn btn-edit"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
