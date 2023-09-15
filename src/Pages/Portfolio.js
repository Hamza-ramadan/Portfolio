import React from 'react'
import img_shop from "../image/shop.png"
import gym from "../image/gym.png"
import hospital from "../image/hospital.png"
import cyporg from "../image/cyporg.png"
import { BiLogoReact } from 'react-icons/bi';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className='main-content'>
        <div className="Portfolio section ">
        <div className="container">
                    <div className="main-title">
                        <h3>Portfolio:</h3>
                    </div>
                    <div className="react-section">
                        <div className="title-tow">
                            <h4><VscDebugBreakpointLog className='svg-11'/>React Js <BiLogoReact className='svg-22'/>:</h4>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-4 "data-aos="zoom-in">
                                <div className="react-box">
                                    <div  className="img-link">
                                        <img src={img_shop} alt="" />
                                        <a href='https://e-commerce-application-and-shop.netlify.app' className="viwe">
                                            
                                            <h2>view</h2>
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href='https://e-commerce-application-and-shop.netlify.app'><span>1-</span> E Commerce App.</a>
                                        <h6><span>-</span> Tango Store For Buying Product.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4" data-aos="zoom-in">
                                <div className="react-box">
                                    <div  className="img-link">
                                        <img src={gym} alt="" />
                                        <a href='https://life-gym22.netlify.app/' className="viwe">
                                            
                                            <h2>view</h2>
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href='https://life-gym22.netlify.app/'><span>2-</span> Life Gym.</a>
                                        <h6><span>-</span> Gym and fitness center.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4" data-aos="zoom-in">
                                <div className="react-box">
                                    <div  className="img-link">
                                        <img src={hospital} alt="" />
                                        <a href='https://healthcare-hospital.netlify.app' className="viwe">
                                            
                                            <h2>view</h2>
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href='https://healthcare-hospital.netlify.app'><span>3-</span> HealthCare Hospital.</a>
                                        <h6><span>-</span> For reservations and inquiries at the Hospital</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4" data-aos="zoom-in">
                                <div className="react-box">
                                    <div  className="img-link">
                                        <img src={cyporg} alt="" />
                                        <a href='https://platform-cyborg.netlify.app' className="viwe">
                                            
                                            <h2>view</h2>
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href='https://platform-cyborg.netlify.app'><span>4-</span> Platform CYBORG.</a>
                                        <h6><span>-</span> For Live Broadcasting Of Games.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Portfolio