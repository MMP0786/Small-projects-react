import React from 'react'

function CreateTodo() {
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