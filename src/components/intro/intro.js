import React from 'react';
import './intro.css';
import bg from '../../assets/profile.png';
import btnImg from '../../assets/hie me 2.png'
import {Link} from 'react-scroll';
 const Intro = () =>{
    return (
        <section id='intro'>
            <div className='introContent'>
               <span className='Hello'>Hello,</span>
               <span className='introText'>I'm <span className='introName'>Yusra</span> <br/> Website Designer</span>
               <p className='introPara'>I am a web designer with the experience and passion to bring<br/> impactful changes to the IT world.</p>
               <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    )
 }

 export default Intro;