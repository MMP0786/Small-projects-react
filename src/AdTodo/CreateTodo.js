import React from 'react'

function CreateTodo() {
  const handleSubmit = ()=>{
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add to do'/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default CreateTodo