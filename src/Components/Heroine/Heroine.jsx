import React from 'react'
import "./Heroine.css"
import profile_image from './../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from "./../../assets/Ankita_Pandey.pdf"
const Heroine = () => {

    const handleResumeDownload = () => {
        const confirmDownload = window.confirm("Do you want to download the resume?");
        if (confirmDownload) {
            const link = document.createElement("a");
            link.href = resume;
            link.download = "Ankita_Pandey_Resume.pdf";
            link.click();
        }
    }

    return (
        <div id='home' className="heroine">
            <img src={profile_image} alt="" height="300px" style={{ borderRadius: "50%" }} />
            <h1><span>I'm Ankita Pandey,</span>frontend developer</h1>
            {/* write a introduction about me p tag */}
            <p>"Aspiring Front-End Developer | Creative & Curious | Passionate about clean design and building user-friendly web experiences"</p>
            <div className="heroine-action">
                <div className="heroine-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with we</AnchorLink></div>
                <div className="heroine-resume" onClick={handleResumeDownload}>My Resume</div>
            </div>
        </div>
    )
}

export default Heroine