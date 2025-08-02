import React from 'react'
import './Contact.css'
import theme from '../../assets/about-theme.png'
// import mail from '../../assets/mail.png'
import { CiMail } from "react-icons/ci";
// import location from '../../assets/location.png'
import { FaLocationDot } from "react-icons/fa6";
// import call from '../../assets/call.png'
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "8feeb9d8-bde6-4674-8f75-9bae0192d955");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, dolor!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            {/* <img src={CiMail} alt="" /> */}
                            <CiMail />
                            <p>ankitapandey182002@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FaPhoneAlt />
                            <p>9004526697</p>
                        </div>
                        <div className="contact-detail">
                            {/* <img src={location} alt="" /> */}
                            <FaLocationDot />
                            <p>Mumbai</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='sumbit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact