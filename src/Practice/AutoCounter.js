import React, { useEffect, useState } from 'react'

function AutoCounter() {
    const [count, setCount] = useState(0)

    const start = ()=>{

     let intervel=  setInterval(() => {
         setCount((count)=>{
          return count + 1
         }) 
      }, 1000);
      document.querySelector(".start").setAttribute("disabled", true)

      document.querySelector(".stop").addEventListener("click", ()=>{
        clearInterval(intervel)
        console.log(intervel)
      })
    }
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={start} className='start'>Start</button>
        <button className='stop'>Stop</button>
        
    </div>
  )
}

export default AutoCounter