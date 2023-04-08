import React from 'react'
import TodoAdd from './TodoAdd'
import TodoMain from './TodoMain'

function TodoApp(props) {

    const task = [
        {
            id:1,
            complete: true,
            task: "Take dose"
        },
        {
            id:2,
            complete: false,
            task: "Do Complete the home work"
        },
    ]

  return (
    <div>
        <TodoAdd />
        {
            task.map(ele=> <TodoMain key={ele.id} ele={ele}/>)
        }
        
    </div>
  )
}

export default TodoApp