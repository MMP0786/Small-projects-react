import React from 'react'

function Task(props) {
  console.log(props)
  return (
    <div>
      <span>{props.task}</span> 
      {props.status && <button>Mark Complete</button>}
      {!props.status && <button style={{background:'green'}} >Complete</button>}
      {!props.status && <button style={{background:'red'}}>Remove</button>}
    </div>
  )
}

export default Task