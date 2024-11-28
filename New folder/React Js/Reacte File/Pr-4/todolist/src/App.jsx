import { useState } from 'react'
import Form from './Form'
import Table from './Table'

function App() {

  const [record,setrecord] = useState([])
  const addTodo = (data) =>{
    let old = [...record,data]
    setrecord(old)
  }

  const deletetodo = (id)=>{
    setrecord(record.filter(task => task.id != id));
  }


  return (
    <>
      <Form 
        addTodo={addTodo}
      />
      <Table
        Todo={record}
        deletetodo={deletetodo}
      />
    </>
  )
}

export default App
