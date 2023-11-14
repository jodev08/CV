import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ldnk3ao', 'template_1xv0yjh', form.current, 'okmoeTX8P-SvewEa9')

    e.target.reset()
      
  };

  return (
    <section id='contact'>
      <h2>Contactez moi</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'></AiOutlineMail>
            <h4>Email</h4>
            <h5>j.stonskadev@gmail.com</h5>
            <a href='mailto:j.stonskadev@gmail.com' target='_blank'>Envoyer un message</a>
            
          </article>

          <article className='contact__option'>
          <BsMessenger className='contact__option-icon'></BsMessenger>
            <h4>Messenger</h4>
            <h5>Stonska Jordan</h5>
            <a href='https://facebook.com' target='_blank'>Envoyer un message</a>
            
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'></AiOutlineWhatsApp>
            <h4>WhatsApp</h4>
            <h5>+0123456789</h5>
            <a href='https://api.whatsapp.com/send?phone' target='_blank'>Envoyer un message</a>
            
          </article>
        </div>

        {/* formulaire de contact   */}

        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Nom' required />
          <input type='email' name='email' placeholder='Email' required/>
          <textarea name='message' rows="7" placeholder='Message' required/>
          <button type='submit' className='btn btn-primary'>Envoyer</button>

        </form>
      </div>

    </section>
  )
}

export default Contact