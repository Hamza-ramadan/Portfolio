import React, { useRef } from 'react'
import moon from "../image/moon.png"
import syn from "../image/sun.png"
const DarkMood = () => {
    const moonss = useRef();
    const nsun = useRef();

const darkest = () => {
    document.querySelector("body").classList.toggle("dark");
    moonss.current.classList.toggle("button-mmoon");
    nsun.current.classList.toggle("button-sunn");
}


  return (
    <div>
        <div className="mod">
        <button ref={moonss} onClick={darkest} className='moon'><img src={moon} alt="" /></button>
        <button ref={nsun} onClick={darkest} className='sun'><img src={syn} alt="" /></button>
        </div>
    
    </div>
  )
}

export default DarkMood
