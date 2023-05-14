import React from 'react'
import { Switch } from '@mui/material'

function AddDark() {
  return (
    <div>
        <Switch checked={offset}
         onChange={()=>setOffset(!offset)}
         defaultChecked />
         <h2>Dark Mode</h2>
         <div>This is Dark Mode</div>
    </div>
  )
}

export default AddDark