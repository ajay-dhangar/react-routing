import React, { useState } from 'react';
import './Student.css'

function Student() {
  const initialFormState = {
    name: '',
    age: '',
    course: '',
    batch: '',
    change: 'Edit',
  };

  const [data, setData] = useState([
    {
      name: 'Ajay',
      age: 22,
      course: 'MERN',
      batch: 'June',
      change: 'Edit',
    },
    // ... other student data ...
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNewStudent = () => {
    setFormData(initialFormState);
    setShowForm(true);
    setEditIndex(null);
  };

  const handleEditStudent = (index) => {
    setFormData(data[index]);
    setShowForm(true);
    setEditIndex(index);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name && formData.age && formData.course && formData.batch) {
      if (editIndex === null) {
        // Add new student
        setData([...data, formData]);
      } else {
        // Edit existing student
        const updatedData = [...data];
        updatedData[editIndex] = formData;
        setData(updatedData);
      }
      setShowForm(false);
      setEditIndex(null);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="main">
          <h2>Students Details</h2>
          <button className="add-new-student" onClick={handleAddNewStudent}>
            Add New Student
          </button>
        </div>
        <table className="students-table" border="1px">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td className="edit-item" onClick={() => handleEditStudent(index)}>
                  {item.change}
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <br />
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
            <br />
            <label>Course:</label>
            <input type="text" name="course" value={formData.course} onChange={handleChange} />
            <br />
            <label>Batch:</label>
            <input type="text" name="batch" value={formData.batch} onChange={handleChange} />
            <br />
            <button type="submit">{editIndex === null ? 'Add' : 'Update'}</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Student;
