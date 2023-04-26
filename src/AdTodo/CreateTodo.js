import React, { useState } from 'react'
import Task from './Task';

function CreateTodo(props) {
  const [value, setValue] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    props.addTask1({
      task: value,
      status: false
    })
    setValue("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add to do' 
        value={value} 
        onChange={(e)=> setValue(e.target.value)}/>
        <input type="submit" value="Add" />
      </form>
      
    </div>
  )
}

export default CreateTodo