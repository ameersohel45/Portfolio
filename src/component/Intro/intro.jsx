import React from 'react'
import './intro.css';
import bg from './myBg.png';
import { Link } from 'react-scroll';
import btnImg from './hireme.png';



const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">SOHEL</span><br></br>KodNest Intern</span>
        <p className="introPara">Java Full Stack Skilled Engineer</p>
        <Link> <button className='btn' onClick={()=>{
                  document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}>
                <img src={btnImg} alt="" className="btnImg"  />Hire Me </button></Link>
        {/* <button className='btn'><img src={btnImg} alt="" className='btnImg' />Hire Me</button> */}

      </div>
      <img src={bg} alt="" className='bg' />
    </section>
  )
}

export default Intro