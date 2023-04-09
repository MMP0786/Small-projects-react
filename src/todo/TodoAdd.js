import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

function TodoAdd(props) {
const [add, setAdd] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
     props.addTask({
         task: add,
         id: uuid(),
         complete: false
       })
       setAdd("")
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" width={70} value={add} onChange={(e)=>setAdd(e.target.value)}/>
            <input type="submit" value={"Add"} />
        </form>
    </div>
  )
}

export default TodoAdd