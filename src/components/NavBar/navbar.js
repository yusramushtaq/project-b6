import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/th (5).png'
import {Link} from 'react-scroll';
import Menu from '../../assets/th (4).png'

const Navbar = () => {
  const[showMenu,setShowMenu]= useState(false);
    return(
       <nav className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        
        <div className='desktopMenu'>
        <Link activeClass='active' to="intro" smooth={true} duration={500} spy={true} offset={-100} className='link desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to="skills" smooth={true} duration={500}  spy={true} offset={-100} className='link desktopMenuListItem'>About</Link>
        <Link activeClass='active' to="works" smooth={true} duration={500} spy={true} offset={-100} className='link desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to="clients" smooth={true} duration={500} spy={true} offset={-100} className='link desktopMenuListItem'>Clients</Link>
        </div>
         
    
       <button className='desktopMenuBtn' onClick ={() => {
        
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
       }}>
        <img src={contactImg} alt='Contact icon' className='desktopMenuImg'/>Contact Me</button>
        
        <img src={Menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to="into" smooth={true} duration={500} spy={true} offset={-100} className='ListItem'onClick={()=>setShowMenu(false)} >Home</Link>
          <Link activeClass='active' to="Skills" smooth={true} duration={500}  spy={true} offset={-100} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to="works" smooth={true} duration={500} spy={true} offset={-100} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to="clients" smooth={true} duration={500} spy={true} offset={-100} className='ListItem' onClick={()=>setShowMenu(false)}>Clients</Link>
          <Link activeClass='active' to="contact" smooth={true} duration={500} spy={true} offset={-100} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
       </nav>
    );
}

export default Navbar