import React from 'react'
import "./Page.css"
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import Lights from '../components/Lights'
import img_me_ from "../image/me.jpg"
const Home = () => {
  return (
    <div className='main-content'>
        <div className="home section ">
            <Lights/>
            <div className="pad-mag-top">
        <div className="container">
            <div className="row mt-5">
                <div className="home-info col-12 col-md-7 " data-aos="fade-up">
                    <h3 className="hello">Hello , my name is <span>Hamza Ramadan .</span></h3>
                    <h3 className="profession">I' m a <span className="typing">
                    <Typewriter
            words={["Web Developer.","","Web Desginer.","Player Football."]}
            loop={40}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={80}
            delaySpeed={1000}
            
          /></span></h3>
                    <p>I' m a web Desiner with extensive experience for over 1 year. My expertise is to 
                        creat and websit design , graphic design and many more......
                    </p>
                    <Link to={"/About"} className="btns">More About Me</Link>
                </div>
                <div className="home-img col-12 col-md-5">
                    <img data-aos="flip-up" src={img_me_} alt="" />
                </div>
            </div>
        </div></div>
</div>
</div>
  )
}

export default Home