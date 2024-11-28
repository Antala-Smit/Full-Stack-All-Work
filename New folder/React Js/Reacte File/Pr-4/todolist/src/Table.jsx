import React from 'react'

function Table({Todo,deletetodo}) {
  return (
    <div align='center'>
      <h1>View</h1>
      <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
              Todo.map((val)=>{
                return(
                  <tr key={val.id}>
                      <td>{val.id}</td>
                      <td>{val.task}</td>
                      <td>
                        <button onClick={() => deletetodo(val.id)}>Delete</button>
                      </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
