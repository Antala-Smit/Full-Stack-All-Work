import React from 'react'
const Table = ({ todoList, completeTodo, deleteTask, editTask }) => {


    return (
        <div align="center">
            <h1>View Todo</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map((t) => {
                            return (
                                <tr key={t.id}>
                                    <td>{t.id}</td>
                                    <td>{t.task}</td>
                                    <td>{t.status}</td>
                                    <td>
                                        <button disabled={t.status === "completed"} onClick={() => completeTodo(t.id)}>
                                            Complete
                                        </button> ||
                                        <button onClick={() => deleteTask(t.id)}>Delete</button> ||
                                        <button onClick={() => editTask(t.id)}>Edit</button>
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
