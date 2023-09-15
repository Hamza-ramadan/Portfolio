import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./components.css"
import { HiHomeModern } from 'react-icons/hi2';
import { FaUserInjured } from 'react-icons/fa6';
import { RiServiceLine } from 'react-icons/ri';
import { DiCodeigniter } from 'react-icons/di';
import { BsHeadset } from 'react-icons/bs';
import { BsTextParagraph } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
const Navi = () => {
  const navref = useRef();
    // const buttonrefnone = useRef();
    // const buttonrefshow = useRef();
    const showNav = () =>{
       navref.current.classList.toggle("responsive-nav");
      //  buttonrefnone.current.classList.toggle("responsive-button");
      //  buttonrefshow.current.classList.toggle("responsive-button-show");
    }
  return (
    <div>
        <button onClick={showNav} className='showww'><BsTextParagraph/></button>

        <div ref={navref} className="asid">
        <div className="container">
        <div className="">
          <div className="headerrr">
            <button onClick={showNav} className='closeeee'><AiOutlineClose/></button>
            
            <div className="logo">
                <Link to={"/"}  href="#"><span>F</span>lex</Link >
                
            </div>
            
            <ul className="nav">
                <li><NavLink to={"/"}><HiHomeModern/>Home</NavLink ></li>
                <li><NavLink to={"/About"}><FaUserInjured/>About</NavLink ></li>
                <li><NavLink to={"/Services"}><RiServiceLine/>Services</NavLink ></li>
                <li><NavLink to={"/Portfolio"}><DiCodeigniter/>Portfolio</NavLink ></li>
                <li><NavLink to={"/Contact"}><BsHeadset/>Contact</NavLink ></li>
            </ul>
        </div></div>
        </div>
    </div>
    </div>
  )
}

export default Navi;