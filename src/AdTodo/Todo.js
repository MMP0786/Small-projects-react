import React, { useEffect, useState } from 'react'
import CreateTodo from "./CreateTodo"
import Task from "./Task"

function Todo() {
  const [value, setValue] = useState("")
  const [tasks, setTasks]= useState([
    {
      task: "Eating food",
      status: true
    },
    {
      task: "Eating Fruits",
      status: false
    }
   
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
// console.log(tasks)
  const editTask = (index)=>{
    setValue(()=>{
        // console.log(taskss)
      let value = tasks[index].task
      // console.log("val", value)
      return value;
      
    })
  }
// console.log(editTask())
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

  // const callback  = (childData )=>{
  //   let value = childData
  // }
  return (
    <div>
      <CreateTodo addTask1={addTask1} value={value} />
      {tasks.map((task, index)=><Task  editTask={editTask} removeTask={removeTask} addTask={addTask} {...task} key={index} index={index}/> )}
    </div>
  )
}

export default Todo