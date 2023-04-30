import React, { useEffect, useState } from 'react'
import CreateTodo from "./CreateTodo"
import Task from "./Task"

function Todo() {
  const [tasks, setTasks]= useState([
   
  ])
  const addTask = (index)=>{
    setTasks((task1)=>{
      const newTask = [...task1]
      newTask[index].status= true
      return newTask
    })
  }
  const addTask1 = (value)=>{
    setTasks((task)=>{
      const newTask = [...task, value]
      return newTask
    })
  }

  const removeTask = (index)=>{
    setTasks(task=>{
      const newTask = [...task]
      newTask.splice(index, 1)
      return newTask
    })
  }

  const editTask = (index)=>{
    setTasks((task1)=>{
      const newTask = [...task1]
      newTask[index].status= true
      return newTask
      
    })
  }

  useEffect(()=> {
    localStorage.setItem("tak", JSON.stringify(tasks))
  }, [tasks])

  useEffect(()=> {
    let t = localStorage.getItem("tak")
    t=JSON.parse(t)
    setTasks(t) 
    
    console.log("tasks", tasks)                                            
    console.log(t)                                            
  },[])
  return (
    <div>
      <CreateTodo addTask1={addTask1} />
      {tasks.map((task, index)=><Task  removeTask={removeTask} addTask={addTask} {...task} key={index} index={index}/> )}
    </div>
  )
}

export default Todo