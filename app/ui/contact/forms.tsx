"use client";

import { FormEvent, useState } from "react";

const ContactForm = () => {
   const sendMail = (e: any) => {
      e.preventDefault();

      const data = {
         name: e.target[0].value,
         email: e.target[1].value,
         subject: e.target[2].value,
         description: e.target[3].value,
      };

      window.location.href = "mailto:m.ainurridho11@gmail.com" +
         (data?.subject && `?subject=${data.subject}`) +
         (data?.description && `&body=${data.description}`)
   };

   return (
      <div className="contact-form basis-[55%] ">
         <form onSubmit={sendMail}>
            <InputField type="text" name="name" placeholder="Your Name" required={true} />
            <InputField type="email" name="email" placeholder="Your Email" required={true} />
            <InputField type="text" name="subject" placeholder="Subject" />
            <div className="mb-4">
               <textarea
                  name="description"
                  placeholder="Your Description"
                  rows={8}
                  className="resize-none w-full py-3 px-4 border-b-4 border-green-300 rounded-t-md bg-neutral-900/50 text-neutral-300 focus:outline-0 focus:ring-1 focus:ring-green-300 focus:shadow focus:shadow-green-400"
               ></textarea>
            </div>
            <div className="bg-green-400 hover:bg-green-500 duration-100 text-center py-2 rounded-md cursor-pointer">
               <button type="submit">Contact me</button>
            </div>
         </form>
      </div>
   );
};

const InputField = ({ type, name, placeholder, autoComplete = "off", required = false }: any) => {
   return (
      <div className="mb-4">
         <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full py-3 px-4 border-b-4 border-green-300 rounded-t-md bg-neutral-900/50 text-neutral-300 focus:outline-0 focus:ring-1 focus:ring-green-300 focus:shadow focus:shadow-green-400"
            autoComplete={autoComplete}
            required={required}
         />
      </div>
   );
};

export default ContactForm;
