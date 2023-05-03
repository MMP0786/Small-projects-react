import React, { useState } from 'react'
import "./ColorShadow.css"
import { Switch } from '@mui/material'

function ColorShadow() {
  const [hori, setHori] = useState(0)
  const [ver, setVer] = useState(10)
  const [blur, setBlur] = useState(0)
  const [color, setColor]= useState("black")
  const [offset, setOffset] = useState(true)
  return (
    <div className='containor'>
        <div>
            <div><input type="range" name="" id="" value={hori} onChange={(e)=> setHori(e.target.value)} min={-20} max={20} /> </div>
            <div><input type="range" name="" id="" value={ver} onChange={(e)=> setVer(e.target.value)} min={-20} max={20} /> </div>
            <div><input type="range" name="" id="" value={blur} onChange={(e)=> setBlur(e.target.value)} min={0} max={50} /> </div>
            <div><input type="color" name="" id="" value={color} onChange={(e)=> setColor(e.target.value)} min={0} max={50} /> </div>
            
            <div> <span>OffSet</span><Switch checked={offset} onChange={()=>setOffset(!offset)}  defaultChecked /><span>InSet</span></div>

        </div>
        <div className='box' style={{boxShadow:`${offset ?"inset":""}  ${hori}px ${ver}px ${blur}px ${color}`}}>box shadow</div>
    </div>
  )
}

export default ColorShadow