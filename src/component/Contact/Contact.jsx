import React, { useRef } from 'react'
import './Contact.css';

import Instagram from './instagram.png';
import emailjs from '@emailjs/browser';
import github from './github.png';
import linkedin from './linkedin.png';

const Contact = () => {
  const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_hr4opdq', // Replace with your service ID
            'template_ixf3q1k', // Replace with your template ID
            form.current,       // Form reference
            'DclsLUDXdvl3NfI63' // Your public key as a string
        )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    e.target.reset();
                    alert('Email Sent!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

  return (
    
   <section id='contactPage'>
    {/* <div id="clients">
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius aliquam consectetur optio enim corporis laudantium commodi, quod est harum similique nulla quisquam sint quam autem! Assumenda incidunt id quod.
        </p>
        <div className='clientImgs'>
            <img src={Facebook} alt='cleint' className='clientImg' />
                  <img src={Walmart } alt='cleint' className='clientImg' />
                  <img src={ Adobe} alt='cleint' className='clientImg' />
                  <img src={ Microsoft} alt='cleint' className='clientImg' />

        </div>
    </div> */}
    <div id="contact">
              <h1 className='contactPageTitle'>Contact Me 📨</h1>
              <span className='contactDesc'>Lets connect !🔗</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name' required></input>
            <input type='email' className='email' placeholder='Your Email' name='from_email'></input>
            <textarea className='msg' name='message' rows="5" placeholder='Drop your message'></textarea>
            <button type="submit" value="send" className="submitBtn" >Submit</button>
            <div className="links">
                      <a href="https://github.com/ameersohel45" target="_blank" rel="noopener noreferrer">
                          <img src={github} alt="" className="link" id='git'/>
                      </a>
                      <a href="https://linkedin.com/in/sohel0007" target="_blank" rel="noopener noreferrer">
                          <img src={linkedin} alt="" className="link" />
                      </a>
                     
                      <a href="https://instgram.in" target="_blank" rel="noopener noreferrer">
                           <img src={Instagram} alt="" className="link" />
                      </a>
                      
                      
                     
            </div>

        </form>
    </div>
   </section>
  )
}

export default Contact