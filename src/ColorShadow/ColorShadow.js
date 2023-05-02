import React, { useState } from 'react'
import "./ColorShadow.css"

function ColorShadow() {
  const [hori, setHori] = useState(0)
  const [ver, setVer] = useState(10)
  const [blur, setBlur] = useState(0)
  const [color, setColor]= useState("black")
  return (
    <div className='containor'>
        <div>
            <div><input type="range" name="" id="" value={hori} onChange={(e)=> setHori(e.target.value)} min={-20} max={20} /> </div>
            <div><input type="range" name="" id="" value={ver} onChange={(e)=> setVer(e.target.value)} min={-20} max={20} /> </div>
            <div><input type="range" name="" id="" value={blur} onChange={(e)=> setBlur(e.target.value)} min={0} max={50} /> </div>
            <div><input type="color" name="" id="" value={color} onChange={(e)=> setColor(e.target.value)} min={0} max={50} /> </div>

        </div>
        <div className='box' style={{boxShadow:`${hori}px ${ver}px ${blur}px ${color}`}}>box shadow</div>
    </div>
  )
}

export default ColorShadow