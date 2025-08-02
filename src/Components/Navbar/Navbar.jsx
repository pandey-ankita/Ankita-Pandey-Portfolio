import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import theme from '../../assets/about-theme.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [menu, setMenu] = useState("home")
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className="navbar">
            <img src={logo} alt="" height="100px" />
            <RiMenu3Fill size="30px" onClick={openMenu} className='nav-mob-open' />
            <ul ref={menuRef} className="nav_menu">
                <IoClose size="30px" onClick={closeMenu} className='nav-mob-close' />
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={theme} height="40px" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p></AnchorLink>{menu === "about" ? <img src={theme} height="40px" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={theme} height="40px" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>My Work</p></AnchorLink>{menu === "work" ? <img src={theme} height="40px" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={theme} height="40px" /> : <></>}</li>
            </ul>
            <div className="nav_connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect With Me</AnchorLink>
            </div>
        </div>
    )
}

export default Navbar