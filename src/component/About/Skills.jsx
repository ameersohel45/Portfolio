import React from 'react'
import "./Skills.css"
import UIDesign from "./ui-design.png";

import AppDesign from "./app-design.png";
import javaNew from './javaNew.png';
const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">About Me 🧑‍💻</span>
            <spna className="skillDesc">Hey there! I’m a fresh <i>aspiring </i>software developer, excited to dive into the world of coding. I’ve been learning Java, Spring Boot, React, and Python, and I’m eager to put my skills to work. I love solving problems and building projects that make a difference.</spna>
            <div className="skillBars">
                <div className="skillbar">
                    <img src={UIDesign} alt="Uidesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>HTML5 CSS JavaScript React</p>
                    </div>
                </div>

                <div className="skillbar">
                    <img src={javaNew} alt="WebDesign" className="skillBarImg" id='java'/>
                    <div className="skillBarText">
                        <h2>Programming Languages</h2>
                        <p>Java - Hibernate SpringBoot JDBC , Python </p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={AppDesign} alt="AppDesugn" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>DataBase</h2>
                        <p>MySQL OracleSQl</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills