import React from 'react'
import "./Services.css"
import theme from '../../assets/about-theme.png'
import Services_Data from "./../../assets/service_data"
import arrow_icon from "../../assets/arrow_icons.png"
const Services = () => {
    return (
        <div id='services' className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Services