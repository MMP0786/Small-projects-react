import React, { useEffect, useState } from 'react'

function AutoCounter1() {
    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     setInterval(() => {
    //         setCount(count=> count+1)
    //     }, 1000);
    // },[count])
    const handleStart =()=>{
     let intervel= setInterval(() => {
             setCount(count=> count+1)
           }, 1000);
        
    const btn1 = document.querySelector('.btn1')
    btn1.setAttribute("disabled", true);

    const btn2 = document.querySelector('.btn2')
           btn2.addEventListener("click", ()=>{
            clearInterval(intervel)
            btn1.removeAttribute("disabled")

           })

    const btn3 = document.querySelector('.btn3')
           btn3.addEventListener("click", ()=>{
            clearInterval(intervel);
            setCount(0)
            btn1.removeAttribute("disabled")
           })
    }
  return (
    <div>{count}
    <div><button className='btn1' onClick={handleStart}>Start</button></div>
    <div><button className='btn2' >Stop</button>
    <button className='btn3' >Reset</button></div>
    </div>
    
  )
}

export default AutoCounter1