import { useState } from "react";
import Form from "./Form"
import Table from "./Table"

function App() {
  const [record,setRecord] = useState([])
  const [single,setSingle] = useState(null)
  const [editid,setEditid] = useState("")
  const addTask = (data) => {

      if(!data.task){
        alert("Task is blank")
        return false;
      }

      let duplicate = record.find((item)=>{
          return item.task === data.task
      })

      if(duplicate){
        alert("task is already exist")
      }else{
        setRecord([...record,data])
        alert("Task add")
      }

  }

  const completeTodo = (id) => {
    let statusup = record.map((val)=>{
      if(val.id == id){
          val.status = "completed"
      }
      return val
    })
    setRecord(statusup)
  }

  const deleteTask = (id) => {
    setRecord(record.filter(item => item.id != id));
  }

  const editTask = (id) => {
    let s = record.find(item => item.id == id);
    setEditid(id)
    setSingle(s) 
  }

  const updateTask = (data) => {
    let up = record.map((item)=>{
        if(item.id == editid){
            item.task = data.task
        }
        return item
    })
    setRecord(up)
    alert("Record successfully update")
    setEditid("")
  }

  return (
    <>
      <Form
          addTask={addTask}
          single={single}
          editid={editid}
          updateTask={updateTask}
      />
      <Table 
          todoList={record}
          completeTodo={completeTodo}
          deleteTask={deleteTask}
          editTask={editTask}
      />
    </>
  )
}

export default App
