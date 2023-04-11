import React, { useState } from 'react'

function One(props) {
    const [user, setUser]= useState(props.name1)
    const handleClick = ()=>{
       console.log("first")
       if(user=="Musharraf"){
        setUser("panwar")
       }else{
        setUser("Musharraf")
        
        {{props.data()}}
       }
    }
  return (
    <div>
        <h2>{user}</h2>
        <p>this is para</p>
        <button onClick={handleClick}> click</button>
        <button onClick={props.data}> click</button>
    </div>
  )
}

export default One