import React from 'react'
import { GiMoneyStack } from 'react-icons/gi';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { MdScreenshotMonitor } from 'react-icons/md';
import { IoIosColorFill } from 'react-icons/io';
import { BiCodeAlt } from 'react-icons/bi';
import { BiSolidMessageAltError } from 'react-icons/bi';
import Footer from '../components/Footer';
const Services = () => {
  return (
    <div className='main-content'>
        <div className="services section ">
        <div className="container">
                    <div className="main-title">
                        <h3>Services:</h3>
                    </div>
                    <div className="services-boxs">
                        <div className="services-box" data-aos="flip-up">
                        <div className="iiii"><HiOutlineDevicePhoneMobile/></div>
                            <h1>mobile site</h1>
                            <p>responsive web with all phones and easy to use on devices</p>
                        </div>
                        <div className="services-box" data-aos="flip-up">
                        <div className="iiii"><MdScreenshotMonitor/></div>
                            <h1>responsive web</h1>
                            <p>responsive web with all computers and easy to use on devices</p>
                        </div>
                        <div className="services-box" data-aos="flip-up">
                        <div className="iiii"><IoIosColorFill/></div>
                            <h1>beautiful colors</h1>
                            <p>Comfortable colors for the eye and wonderful, the art of choosing colors</p>
                        </div>
                        <div className="services-box" data-aos="flip-up">
                        <div className="iiii"><BiCodeAlt/></div>
                            <h1>simble code</h1>
                            <p>Simple and easy code that you can use at any time and modify it</p>
                        </div>
                        <div className="services-box" data-aos="flip-up">
                        <div className="iiii"><BiSolidMessageAltError/></div>
                            <h1>not error </h1>
                            <p>There are no mistakes in the work because of the great experience</p>
                        </div>
                        <div className="services-box" data-aos="flip-up">
                        <div className="iiii"><GiMoneyStack/></div>
                            <h1>win money</h1>
                            <p>You can create a website to earn money and benefit others</p>
                        </div>
                    </div>
                    </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Services