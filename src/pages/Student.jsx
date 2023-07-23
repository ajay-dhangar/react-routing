import React, { useState } from 'react'

function Student() {
  const [data] = useState([
    {
      name: 'Ajay',
      age: 22,
      course: 'MERN',
      batch: 'June',
      change: 'Edit',
    },
    {
      name: 'Vjay',
      age: 24,
      course: 'MERN',
      batch: 'November',
      change: 'Edit',
    },
    {
      name: 'Ram',
      age: 23,
      course: 'MERN',
      batch: 'August',
      change: 'Edit',
    },
    {
      name: 'Shyam',
      age: 21,
      course: 'MERN',
      batch: 'April',
      change: 'Edit',
    },
    {
      name: 'Raj',
      age: 20,
      course: 'MERN',
      batch: 'March',
      change: 'Edit',
    },
    {
      name: 'Dev',
      age: 25,
      course: 'MERN',
      batch: 'September',
      change: 'Edit',
    },
    {
      name: 'Pawan',
      age: 21,
      course: 'MERN',
      batch: 'February',
      change: 'Edit',
    }
  ])
  return (
    <div>
      <div className="container">
        <div className="main">
          <h2>Students Details</h2>
          <button className='add-new-student'>Add New Student</button>
        </div>
        <table className='students-table' border='1px'>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.course}</td>
                  <td>{item.batch}</td>
                  <td className='edit-item'>{item.change}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Student
