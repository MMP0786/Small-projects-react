import React from 'react'

function Task(props) {
const handleMark = ()=>{
  props.addTask(props.index)
}

const removeTask = ()=>{
  props.removeTask(props.index)
}
const handleEdit = ()=>{
  props.editTask(props.index)
}
  return (
    <div style={{width:"50%", border:"1px solid black", margin:"10px auto", display:"flex", justifyContent:"space-between"}}>
     
     <span>{props.task}</span> 
      <div>
      {!props.status && <button onClick={handleMark}>Mark Complete</button>}
      {!props.status && <button style={{background:'grey'}} onClick={handleEdit}>Edit</button>}
      {props.status && <button style={{background:'green'}} >Complete</button>}
      {props.status && <button style={{background:'red'}} onClick={removeTask}>Remove</button>}

      </div>
    </div>
  )
}

export default Task