import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, getUser } from '../redux/action/userAction';

const View = () => {
    const dispatch = useDispatch();
    const record = useSelector(state => state.user.users);
    useEffect(()=>{
        dispatch(getUser())
    },[])

    const handleDelete = (id) => {
       dispatch(deleteUser(id))
    }

  return (
    <div align="center">
        <h2>View User</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Srno</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    record.map((u,i)=>{
                        return (
                            <tr key={u.id}>
                                <td>{++i}</td>
                                <td>{u.name}</td>
                                <td>{u.phone}</td>
                                <td>
                                    <button onClick={ () => handleDelete(u.id) }>Delete</button>
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
