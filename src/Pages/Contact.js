import React from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { GiTreasureMap } from 'react-icons/gi';
import { MdOutlineMailLock } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div  className='main-content'>
        <div className="contact section"  id="contact">
                <div className="container">
                    <div className="main-title">
                        <h3>Contact Me:</h3>
                    </div>
                    <div className="contact-boxs">
                    <div className="contact-box">
                        <h2>Have You Any Quiestions ?</h2>
                        <h3>I'M AT YOUR SERVICES .</h3>
                    </div>
                    <div className="contact-boxs-icons">
                        <div className="contact-boxs-icon">
                            <BiPhoneCall/>
                            <h4>call us on</h4>
                            <p>+20117585124</p>
                        </div>
                        <div className="contact-boxs-icon">
                            <GiTreasureMap/>
                            <h4>office</h4>
                            <p>shoubra,cairo</p>
                        </div>
                        <div className="contact-boxs-icon">
                            <MdOutlineMailLock/>
                            <h4>email</h4>
                            <p>hahar067@gmail.com</p>
                        </div>
                        <div className="contact-boxs-icon">
                            <CgWebsite/>
                            <h4>websit</h4>
                            <p>www.flex.com</p>
                        </div>
                    </div>
                    <div className="contact-box">
                        <h2>SEND ME AN EMAIL </h2>
                        <h3>I'M VERY RESPOSIVE TO MESSAGES .</h3>
                    </div>
                    <div className="contact-box-inputs">
                        <div className="contact-box-input">
                            <input type="text" placeholder="Name" name="name" />
                            <input type="email" placeholder="Email" name="email" />
                        </div>
                        <input className="subject" type="text" placeholder="subject" name="subject"/>
                        <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
                        <button className="btns">send message!</button>
                    </div>
                    </div>
                </div>
            </div>
        <Footer/>

    </div>
  )
}

export default Contact