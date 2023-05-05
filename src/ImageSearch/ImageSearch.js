import React, { useState } from 'react'
import "./ImageSearch.css"

function ImageSearch() {
    const [value, setValue] = useState("")
    // g9aPf75dMHkH7kC6sPudcz6T0HnzR-kakVip_dc1ZGw
    const createApp =()=>{
        fetch(`https://api.unsplash.com/photos/?client_id=g9aPf75dMHkH7kC6sPudcz6T0HnzR-kakVip_dc1ZGw&query=${value}`)
        .then(res=>res.json()
        ).then(data=>console.log(data))
    }
  return (
    <div className='containor'>
        <div>Search</div>
        <input type="search" value={value} onChange={(e)=> setValue(e.target.value)}  />
        <input type="submit" onClick={createApp} value="Search" />
    </div>
  )
}

export default ImageSearch