import React, { useEffect, useState } from 'react'
const Form = ({addTask,single,editid,updateTask}) => {

    const [task,setTask] = useState("")
    
    useEffect(()=>{
        setTask(single?.task)
    },[single])

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id : Date.now(),
            task,
            status : "pending"
        }
        if(editid){
            updateTask(obj)
        }else{
            addTask(obj)  
        }                            
        setTask("")
    }

    

  return (
    <div align="center">
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
            Task : <input type="text" onChange={ (e) => setTask(e.target.value) } value={task || ''}/><br></br><br></br>
            <input type='submit'/>
        </form>
    </div>
  )
}
export default Form
