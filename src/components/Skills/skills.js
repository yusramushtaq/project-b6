import React from 'react'
import'./skills.css';
import UIDesign from '../../assets/ui design.png'
import WebDesign from '../../assets/th (3).png'
import AppDesign from '../../assets/app design.png'

const Skills = () =>{
    return(
        <section id='skills'>
        <span className='skillTitle'>What I Do</span><br/>
        <span className='SkillDesc'>As a web developer, I possess a strong proficiency in creating dynamic and user-friendly websites that adhere to the principles of responsive design and minimalism. My expertise lies in HTML, CSS, and JavaScript, allowing me to build clean, efficient code that enhances user experience across various devices and platforms.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I design intuitive user interfaces that enhance user experience.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>I create visually stunning and responsive websites that captivate users.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>I develop user-friendly mobile applications that are both functional and engaging.</p>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Skills