import React from 'react'

function TodoMain(props) {
    
  return (
    <div style={{border: "1px solid ", maxWidth:"50%", margin:"auto"}}>
      {props.ele.task}
   </div>
  )
}

export default TodoMain