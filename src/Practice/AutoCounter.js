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
        // console.log(intervel)
        document.querySelector(".start").removeAttribute("disabled")

      })
      document.querySelector(".reset").addEventListener("click", ()=>{
        clearInterval(intervel)
        setCount(0);
        // console.log(intervel)
        document.querySelector(".start").removeAttribute("disabled")

      })
    }
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={start} className='start'>Start</button>
        <button className='stop'>Stop</button>
        <button className='reset'>Reset</button>
        
    </div>
  )
}

export default AutoCounter