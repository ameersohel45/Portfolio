import React, { useState } from 'react'
import './navbar.css';
import logo from'./logoReal.png'
import contactImg from '../../assests/contact.png'
import menu from '../../assests/menu.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const[showMenu,setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>HOME</Link>
        <Link className="desktopMenuListItem" activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}>ABOUT</Link>
       <Link className="desktopMenuListItem" activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}>PROJECT</Link>
        <Link className="desktopMenuListItem" activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}>CONTACT</Link>
        
      </div>
      <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}>
        <img src={contactImg} alt="" className="desktopMenuImg"  />Contact ME </button>


      <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
        <Link className="listItem" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>HOME</Link>
        <Link className="listItem" activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>About</Link>
        <Link className="listItem" activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>PROJECT</Link>
        
        <Link className="listItem" activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar;