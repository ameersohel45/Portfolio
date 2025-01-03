import React from 'react'
import Portfolio1 from "./portfolio-1.png";
import Portfolio2 from "./portfolio-2.png";
import Portfolio3 from "./portfolio-3.png";
import Portfolio4 from "./portfolio-4.png";

import './works.css'

const Works = () => {
    return (
        <section id='works'>
            <h1 className='workstitle'>Projects</h1>
            <span className='worksDesc'>Projects that are done by me 🚀</span>
            <div className='worksImgs'>
           
                <a href="https://github.com/ameersohel45" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio1} alt="" className='worksImg' />
                </a>
                <a href="https://github.com/ameersohel45" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio2} alt="" className='worksImg' />
                </a>
                <a href="https://github.com/ameersohel45" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio3} alt="" className='worksImg' />
                </a>
                <a href="https://github.com/ameersohel45" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio4} alt="" className='worksImg' />
                </a>
               
            </div>
            <button className='workBtn'> <a href="https://github.com/ameersohel45" target="_blank" rel="noopener noreferrer">
               See More
            </a>
               </button>
        </section>
    )
}

export default Works