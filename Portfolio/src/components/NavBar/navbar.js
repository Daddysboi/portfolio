import React from 'react';
import './navbar.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import contactImg from "../../assets/contact.png"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' span={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' span={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='works' span={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='clients' span={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Clients</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      
      }}>
        <img src={contactImg} className='desktopMenuImg' alt='Contact'/>Contact Me
      </button>
    </nav>
  )
}

export default Navbar;

const users = {
  John : {
  name : 'john',
  age: 20},
  Friday : {
  name : 'Friday',
  age: 30},
  Aisha : {
  name : 'Aisha',
  age: 15},
  Dave : {
  name : 'Dave',
  age: 20}
}
