import React, { useState } from 'react'
import "./ColorShadow.css"

function ColorShadow() {
  const [hori, setHori] = useState(0)
  const [ver, setVer] = useState(0)
  const [blur, setBlur] = useState(0)
  return (
    <div className='containor'>
        <div>
            <div><input type="range" name="" id="" min={-200} max={200} /> </div>
            <div><input type="range" name="" id="" min={-200} max={200} /> </div>
            <div><input type="range" name="" id="" min={-200} max={200} /> </div>
        </div>
        <div>box shadow</div>
    </div>
  )
}

export default ColorShadow