import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { studentAdd, updateStudent } from '../redux/action/studentAction';

const Edit = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("")

    useEffect(()=>{
        setName(location?.state[1]?.name)
        setPhone(location?.state[1]?.phone)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        let  obj = {
            grid : location.state[0],
            name : name,
            phone : phone
        }
        dispatch(updateStudent(obj))
        alert("student update");
        navigate('/view');
        
    }

  return (
    <div align="center">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
            Name : <input type="text" onChange={ (e) => setName(e.target.value) } value={name}/>
            Phone : <input type="text" onChange={ (e) => setPhone(e.target.value) } value={phone}/>
            <input type="submit" />
        </form>
        <Link to={`/view`}>View</Link>
    </div>
  )
}

export default Edit
