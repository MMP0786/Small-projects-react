import React from 'react'

function TodoMain(props) {
    
  return (
    <div style={{border: "1px solid ", maxWidth:"50%", margin:"auto", }}>
      {props.ele.task} <button>{props.ele.complete ? "Completed": "Complete"}</button> <button>Edit</button>
   </div>
  )
}

export default TodoMain