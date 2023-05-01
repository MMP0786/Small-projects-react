import React from 'react'
import "./ColorShadow.css"

function ColorShadow() {
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