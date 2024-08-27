import Image from "next/image";
import ContactForm from "./forms";

const Contact = () => {
   return (
      <section id="contact" className="bg-neutral-800 px-8 py-6 md:px-16 lg:px-32">
         <header className="mb-4">
            <h2 className="text-center text-2xl font-semibold">Contact</h2>
         </header>

         <div className="flex justify-between">
            <div className="basis-[45%] hidden md:flex">
               <Image src="/images/brands/envelope-mail.png" width={450} height={450} alt="email" />
            </div>
            <ContactForm />
         </div>
      </section>
   );
};

export default Contact;
