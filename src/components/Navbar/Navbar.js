import React, { useState, useEffect } from 'react'
import './Navbar.css'
import netflix from './netflix.png'
import avatar from './avatar.jpg'

function Navbar() {
    const [show, handleShow] = useState(false);
    // adding scroll listener
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        }
    },[])
    return (
        // always gonna have navbar, but if show is true, use the other classname
        <div className={`navbar ${show && "nav-black"}`}>
            <img className="logo" src={netflix} alt="" />

            <img className="avatar" src={avatar} alt="" />
        </div>
    )
}

export default Navbar
