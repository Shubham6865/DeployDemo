import React from 'react'
import logo from "../assets/logocrop.png"

const Footer = () => {
  return (
    <footer>
        <div>
      <img src={logo} alt="" />
      <p>@all right reserved</p>
    </div>
    <div>
        <h5>follow Us</h5>
        <div>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shubhamparade" >LinkedIn</a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Shubham6865" >Github</a> 
            <a target="blank"  href="https://www.instagram.com/shubham_._sp_._" >Instagram</a>
        </div>
    </div>
    </footer>
  )
}

export default Footer
