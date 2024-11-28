import React, { useState } from 'react'

function Form({addTodo}) {
  const [task,setTask] = useState()
  const submit = (e) =>{
    e.preventDefault()
    let obj = {
      id: Date.now(),task
    }
    addTodo(obj)
    alert('added')
    setTask("")
  }

  return (
    <div align = 'center'>
        <h1>Recode</h1>
        <form onSubmit={submit}>
            Task: <input type='text' onChange={(e)=>setTask(e.target.value)} value={task}/><br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
