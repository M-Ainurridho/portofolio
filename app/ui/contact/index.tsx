import Image from "next/image";
import ContactForm from "./forms";

const Contact = () => {
   return (
      <section id="contact" className="bg-neutral-800 px-32 py-16">
         <div className="flex justify-beetwen">
            <div className="contact-image basis-[45%] h-20">
               <Image src="/images/brands/envelope-mail.png" width={450}  height={450} alt="email"/>
            </div>
            <ContactForm />
         </div>
      </section>
   );
};

export default Contact;