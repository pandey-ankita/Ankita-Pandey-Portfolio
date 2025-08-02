import React from 'react'
import './About.css'
import theme from '../../assets/about-theme.png'
import profile_image from './../../assets/profile_img.jpg'
const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_image} alt="" height="365px" width="300px" style={{ borderRadius: "2%" }} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> An aspiring front-end developer with a passion for clean design and user-friendly web experiences. Focused on building responsive websites.</p>
                        <p>Always curious, creative, and eager to learn new technologies. On a journey to turn ideas into interactive and meaningful digital experiences.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>ReactJs</p> <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p> <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MySQL</p> <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1 >Completed Front-End Developer Course</h1>
                    <p >from JSpiders</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Project completed</p>
                </div>


            </div>
        </div>
    )
}

export default About