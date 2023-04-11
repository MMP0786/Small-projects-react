import React, { useEffect, useState } from 'react'

function AutoCounter() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        setInterval(() => {
           setCount((count)=>{
            return count +1
           }) 
        }, 1000);
        // setInterval(() => setCount(count=> count+1) , 2000);
    },[])
  return (
    <div>
        <p>{count}</p>
        <button>Start</button>
    </div>
  )
}

export default AutoCounter