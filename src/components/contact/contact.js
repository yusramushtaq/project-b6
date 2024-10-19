import React,{ useRef} from 'react';
import'./contact.css';
import Facebook from '../../assets/facebook.png'
import Microsoft from '../../assets/th.png'
import Adobe from '../../assets/adobe.png'
import FacebookI from '../../assets/f.1.png'
import Instagram from '../../assets/i.2.png'
import TwitterX from '../../assets/5fd0t.3.png'
import Youtube from '../../assets/y.4.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_es8cc4h', 'template_h44tb6e', form.current, {
            publicKey: 'i94CHX6_3oZSX4A6aHtOC',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset()
              alert('email sent !')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id='contactPage'>
            <div id='clients'>
            <h1 className='contactPageTitle'> My clients</h1>
            <p className='clientDesc'>
                I had the opportunity to work with a diverse group of companies.
                some of the notable companies I have worked with inclues
            </p>
            <div className='clientImgs '>
                <img src={Facebook} alt='   Client' className='clientImg'/>
                <img src={Microsoft} alt='Client' className='clientImg'/>
                <img src={Adobe} alt='Client' className='clientImg'/>
                
            </div>
            </div>
            <div id='contact'>
             <h1 className='contactPageTitle'>Contact Me</h1>
             <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
              <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='Links'>
                    <img src={FacebookI} alt='FacebookI' className='Link'/>
                    <img src={Instagram} alt='Instagram' className='Link'/>
                    <img src={TwitterX} alt='TwitterX' className='Link'/>
                    <img src={Youtube} alt='Youtube' className='Link'/>
                </div>
              </form>
            </div>
        </section>
        
    )
}
export default Contact