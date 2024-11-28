import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { studentDelete, viewStudent } from '../redux/action/studentAction';


const View = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(viewStudent())
  },[])

  const students = useSelector(state => state.student.studentList);

  //student delete
  const deleteStudent = (stid) => {
     dispatch(studentDelete(stid))
     alert("delete student");
  }

  return (
    <div align="center">
      <h2>View User</h2>
      <table border={1}>
        <thead>
          <tr>
            <td>Grid</td>
            <td>Name</td>
            <td>Phone</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            {
              students &&  Object.entries(students).map(([key,value])=>{
                    return (
                      <tr key={key}>
                        <td>{key}</td>
                          <td>{value.name}</td>
                          <td>{value.phone}</td>
                          <td>
                            <button onClick={ () => deleteStudent(key) }>Delete</button> || 
                            <button onClick={ () => navigate(`/edit`,{state : [key,value]}) }>Edit</button>
                          </td>
                      </tr>
                    )
                })
            }
        </tbody>
      </table>
      <Link to={`/`}>Add</Link>
    </div>
  )
}

export default View
