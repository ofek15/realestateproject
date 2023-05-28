import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactus.css'

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pwv4ccj', 'template_6mj5xij', form.current, '84QYpW_53LwfYXG5L')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          alert("The message has been received")
      }, (error) => {
          console.log(error.text);
          console.log("no sent")
      });
  };

  return (
    <div id='contactus-container'>
    <form id='contactus-form' ref={form} onSubmit={sendEmail}>
      <h1 id='h1-contactus'>Leave a message and we will get back to you as soon as possible</h1>
      <input type="text" className='input-form' name="user_name" placeholder=' enter your name...' />
      <input type="email" className='input-form' name="user_email" placeholder=' enter your email...' />
      <textarea name="message" className='input-form' placeholder=' write your message...' />
      <input type="submit" value="Send" id='submitemail-btn' />
    </form>
    </div>
  );
};
export default Contactus;