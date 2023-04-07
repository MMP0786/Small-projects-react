import React from 'react'

function TodoMain(props) {
    
  return (
    <div>
        <div>my name is Musharraf</div>
        <h1>{props.name}</h1>
        {props.task11}
        {/* {props.task.map(ele=> <div>{ele.task}</div>)} */}
    </div>
  )
}

export default TodoMain