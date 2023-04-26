import React, { useState } from 'react'
import CreateTodo from "./CreateTodo"
import Task from "./Task"

function Todo() {
  const [tasks, setTasks]= useState([
    {
      task: "Reading book",
      status: true
    },
    {
      task: "Write book",
      status: false
    }
  ])
  return (
    <div>
      <CreateTodo/>
      {tasks.map((task, index)=><Task {...task} key={index} /> )}
    </div>
  )
}

export default Todo