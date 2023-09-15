import React from 'react'
import img from "../image/light.png"
import imgs from "../image/lights2.png"
const Lights = () => {
  return (
    <div>
        <div className=''>
        <img className='litst img-light-1' src={img} alt="" />
        <img className='litst img-light-2' src={img} alt="" />
        <img className='litstss img-light-1' src={imgs} alt="" />
        <img className='litstss img-light-2' src={imgs} alt="" />
    </div>
    </div>
  )
}

export default Lights