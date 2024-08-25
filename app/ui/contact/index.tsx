import ContactForm from "./forms";

const Contact = () => {
   return (
      <section id="contact" className="bg-neutral-800 px-32 py-16">
         <div className="flex justify-beetwen">
            <div className="contact-image basis-[50%] h-20"></div>
            <ContactForm />
         </div>
      </section>
   );
};

export default Contact;
