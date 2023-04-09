import React, { useEffect, useState } from 'react'
import TodoAdd from './TodoAdd'
import TodoMain from './TodoMain'

function TodoApp(props) {
    const[task, setTask]= useState([
        {
            id:1,
            complete: true,
            task: "Take dose"
        },
        {
            id:2,
            complete: false,
            task: "Do Complete work"
        },
    ])
   
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(task))

    },[task])

    // useEffect(()=>{
    //    const t =JSON.parse(localStorage.getItem("todos"))
    //    setTask(()=>t)
    // },[])
    
    const addTask = (task) => {
        setTask(tasks => {
            return [
                ...tasks,
                task
            ]
        })
    };

  return (
    <div>
        <TodoAdd addTask={addTask}/>
        {
            task.map(ele=> <TodoMain key={ele.id} ele={ele}/>)
        }
        
    </div>
  )
}

export default TodoApp