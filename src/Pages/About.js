import React from 'react'
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import Footer from '../components/Footer';

const About = () => {

function Number({n}){
    const {number} = useSpring({
        from:{ number :0 },
        number : n ,
        delay: 200,
        config:{mass:1 ,tension:20 , friction:20},
    });
    return <animated.div className="dgggg">{number.to((n) => n.toFixed(0))}</animated.div>
}
function Widddhha({w}){
    const number = useSpring({
        from: {
            width:"0%"
          },
          to: {
            width:`${w}%`
          }
        
      
    });
    return <animated.div  style={number} className="progress-in"></animated.div >
}




  return (
    <div>
        <div className='main-content'>
        <div className="about section " id="about">
                <div className="container">
                    <div className="row">
                        <div className="main-title">
                            <h3>About Me:</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-content" >
                            <div className="row">
                            <div className="about-text col-12" data-aos="zoom-in">
                                <h3>I'm Hamza Ramadan <span>Web Developer.</span></h3>
                                <p>I respect my superiors at work and show loyalty to my job and the company , 
                                I present positive attitudes towards the employer and my colleagues in the company , I put organizational business interest before personal interest , 
                                I abide by the limits of my duties and position honestly , I am a hardworking and reliable person , I can solve problems , I'm serious at work , 
                                I am always energetic and eager to learn new skills , I am flexible in my time being able to work in the evenings and on the weekends, 
                                I always come up with new creative ideas and ....</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="personal-info col-12 col-md-7 " data-aos="fade-right">
                                <div className="row" >
                                    <div className="info-item col-12 col-sm-6">
                                        <p>Birthday : <span>20 Feb 2002</span> <span className='spantow'>.</span></p>
                                    </div>
                                    <div className="info-item col-12 col-sm-6">
                                        <p>Country : <span>Egypt</span> <span className='spantow'>.</span></p>
                                    </div>
                                    <div className="info-item col-12 col-sm-6">
                                        <p>Age : <span>21 Years</span> <span className='spantow'>.</span></p>
                                    </div>
                                    <div className="info-item col-12 col-sm-6">
                                        <p>Gmail : <span>hahar067@gmail.com</span> <span className='spantow'>.</span></p>
                                    </div>
                                    <div className="info-item col-12 col-sm-6">
                                        <p>Living : <span>Shoubra Masr,cairo</span> <span className='spantow'>.</span></p>
                                    </div>
                                    <div className="info-item col-12 col-sm-6">
                                        <p>phone : <span>+201117585124</span> <span className='spantow'>.</span></p>
                                    </div>
                                    <div className="info-item col-12 col-sm-6">
                                        <p>instgram : <span>Hamza_Ramadan_22</span> <span className='spantow'>.</span></p>
                                    </div>
                                    <div className="info-item col-12 col-sm-6">
                                        <p>Degree : <span>Computer Scince</span> <span className='spantow'>.</span></p>
                                    </div>
                                    <div className="info-item col-12 col-sm-6">
                                        <p>Linked in : <span>hamza ramadan</span> <span className='spantow'>.</span></p>
                                    </div>
                                    <div className="info-item col-12 col-sm-6">
                                        <p>Snapchat : <span>hamza_r2022383</span> <span className='spantow'>.</span></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="buttons">
                                        <Link href="#" className="btns">Download CV</Link>
                                        <Link href="#contact" className="btns">Hire Me</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="skills col-12 col-md-5">
                                <div className="row">
                                    <div className="skills-item col-12">
                                        <h5>HTML</h5>
                                        <div className="progress">
                                            <Widddhha w={95}/>
                                            {/* <Widthhaa w={100}/> */}
                                            {/* <span className="progress-in" data-width="90%"></span> */}
                                            <div className="skills-precent"><Number n={95} />%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item">
                                        <h5>CSS</h5>
                                        <div className="progress">
                                        <Widddhha w={85}/>
                                            <div className="skills-precent"><Number n={85} />%</div>
                                            
                                        </div>
                                    </div>
                                    <div className="skills-item">
                                        <h5>JS</h5>
                                        <div className="progress">
                                        <Widddhha w={75}/>
                                            <div className="skills-precent"><Number n={75} />%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item">
                                        <h5>Sass</h5>
                                        <div className="progress">
                                        <Widddhha w={80}/>
                                            <div className="skills-precent"><Number n={80} />%</div>
                                        </div>
                                        
                                    </div>
                                    <div className="skills-item">
                                        <h5>Bootstrap</h5>
                                        <div className="progress">
                                        <Widddhha w={95}/>
                                            <div className="skills-precent"><Number n={95} />%</div>
                                        </div>
                                        
                                    </div>
                                    <div className="skills-item">
                                        <h5>Reactj Js</h5>
                                        <div className="progress">
                                        <Widddhha w={86}/>
                                            <div className="skills-precent"><Number n={86} />%</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="education  col-12 col-md-6">
                                <h3 className="title">Education :</h3>
                                <div className="row">
                                    <div className="timelnie-box">
                                        <div className="timelnie shadow-dark" data-aos="flip-left">
                                            <div className="time-line-item">
                                                <div className="dot"></div>
                                                <h3 className="time-data">
                                                    <i className="fa-solid fa-calendar"></i>2020 - 2024
                                                </h3>
                                                <h4 className="timeline-title">
                                                    Master's in Computer Scince
                                                </h4>
                                                <p>I studied computers at the private Thebes Academy after High School .</p>
                                            </div>
                                        </div>
                                        <div className="timelnie shadow-dark" data-aos="flip-left">
                                            <div className="time-line-item">
                                                <div className="dot"></div>
                                                <h3 className="time-data">
                                                    <i className="fa-solid fa-calendar"></i>2021 - Now
                                                </h3>
                                                <h4 className="timeline-title">
                                                    learning from youtube
                                                </h4>
                                                <p>C++ , java , Algorithm , Data Structure , Object oriented and In addition to university materials</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="experience col-12 col-md-6" data-aos="flip-right">
                                <h3 className="title">Experience :</h3>
                                <div className="row">
                                    <div className="timelnie-box">
                                        <div className="timelnie shadow-dark ">
                                            <div className="time-line-item">
                                                <div className="dot"></div>
                                                <h3 className="time-data">
                                                    <BsEmojiSmileUpsideDown/>Sorry no any Experience
                                                </h3>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
</div> 
<Footer/>

</div>
    </div>
  )
}

export default About