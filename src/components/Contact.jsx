import {useState} from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

   
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="wrapper  h-[50vh] w-full align-center border-2 border-red-100 justify-center ">

        <h3 className="text-center text-[3em]" >Get In Touch</h3>
        
        <form ref={form} onSubmit={sendEmail} className=" flex flex-col justify-center w-[25%] align-center">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
  );
};



export default Contact