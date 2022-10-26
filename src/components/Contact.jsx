import {useEffect, useState} from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    
    const [showForm, setShowForm] = useState(true);

    const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY


   
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    // emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    
     setShowForm(false);

  };

  return (
    <div className="wrapper  h-[50vh] w-full align-center justify-center pb-10">
        <h3 className="text-center text-[3em]" >Get In Touch</h3>
        
     {
        showForm ? (
            

            <form ref={form} onSubmit={sendEmail} className=" flex flex-col justify-center w-[80%] align-center m-20">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" name="first_name" className="form-input px-3 py-2 rounded-md" required />
                </div>
                <div className="flex flex-col">
                <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" name="last_name" className="form-input px-3 py-2 rounded-md" required />
                </div>
                <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-input px-3 py-2 rounded-md" required />
                </div>
                <div className="flex flex-col">
                <label htmlFor="phone">
                    <div className="flex align-items">
                    Phone
                    <span className="ml-auto opacity-75">Optional</span>
                    </div>
                </label>
                <input type="tel" id="phone" name="phone" className="form-input px-3 py-2 rounded-md" />
                </div>
                <div className="flex flex-col col-span-2">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md" required />
                </div>
                <div className="flex flex-col col-span-2">
                <label htmlFor="subject">
                    <div className="flex align-items">
                    Message
                    <span className="ml-auto opacity-75">Max. 500 characters</span>
                    </div>
                </label>
                <textarea maxLength="500" rows="4" type="text" id="message" name="message" className="form-input px-3 py-2 rounded-md" required />
                </div>
            </div>
            <div className="flex justify-center py-4">
                <button type="submit" class="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500"value="send">
                Submit
                </button>
            </div>
        </form>

        ) :(
            <div className="thanks w-full flex flex-col justify-center align-center mt-10 text-center">
                <h4 className="font-bold">Message Sent</h4>
                <i className="ri-mail-send-line text-2xl"></i>
                <p>Thanks for getting in touch! I'll get back to you as soon as I can.</p>

            </div>
        )
     }
    
    

        
        
        
    </div>
  );
};



export default Contact