import React from "react";
import Logo from '../images/komlie-logo.png'

export default function Sidebar() {
    return (
        <section className='left-section'>
        <img src={Logo} alt="" className='logo' />
        <div className='middle-text'> 
          <p className='left-text'>Don't have a Komlie account yet?</p>
          <p className='left-button'>Sign Up</p>
        </div>
      </section>
    )
}