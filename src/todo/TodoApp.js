import React from 'react'
import TodoAdd from './TodoAdd'
import TodoMain from './TodoMain'

function TodoApp(props) {

    const task = [
        {
            id:1,
            complete: false,
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
        <TodoAdd task11={"task"}/>
        {/* <TodoAdd name={"musharraf"}/> */}
        <TodoMain name={"musharraf"}/>
        <TodoMain/>
    </div>
  )
}

export default TodoApp