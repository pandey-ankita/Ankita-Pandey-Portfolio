import React from 'react'
import "./MyWork.css"
import theme from '../../assets/about-theme.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from "../../assets/arrow_icons.png"

const MyWork = () => {
    const handleImageClick = (link) => {
    const confirmVisit = window.confirm("Do you want to visit this project on GitHub?");
    if (confirmVisit) {
      window.open(link, "_blank"); 
    }
  };
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme} alt="" />
            </div>
            <div className="mywork-contianer">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt={work.w_name}
                        onClick={() => handleImageClick(work.w_link)} />
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" height="35px" />
            </div>
        </div>
    )
}

export default MyWork