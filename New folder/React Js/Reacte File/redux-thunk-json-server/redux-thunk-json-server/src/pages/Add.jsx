import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/action/userAction'
import { Link, useNavigate } from 'react-router-dom'

const Add = () => {
    const dispatch = useDispatch()  
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            name : name,
            phone : phone
        }
        dispatch(addUser(obj))
        alert("User add")
        navigate('/view')
    }

  return (
    <div align="center">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
            Name : <input type="text" onChange={ (e) => setName(e.target.value) } value={name}/>
            Phone : <input type="text" onChange={ (e) => setPhone(e.target.value) } value={phone}/>
            <input type="submit" />
        </form>
        <Link to={`/view`}>View</Link>
    </div>
  )
}

export default Add
