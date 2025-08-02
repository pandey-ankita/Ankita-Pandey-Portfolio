import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { IoPerson } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="top-left">
                    <img src={logo} alt="" height="100px" />
                    <p>Exploring front-end development & growing everyday - thank you for visiting!</p>

                </div>
                <div className="top-right">
                    {/* <div className="footer-email-input">
                        <IoPerson size="25px" />
                        <input type="email" placeholder='Enter Your Email' />
                    </div> */}
                    <div onClick={() => window.open("https://github.com/pandey-ankita", "_blank")} className="footer-github">
                        <IoLogoGithub size="20px" /> <p>GitHub</p> 
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="bottom-left">
                    <p> © 2025 Ankita Pandey • Portfolio built with React • Let's Connect!</p>
                </div>
                <div className="bottom-right">
                 <IoPerson size="25px" /> <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer