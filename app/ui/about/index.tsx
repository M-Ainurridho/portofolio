import Skills from "./skills";

const About = () => {
   return (
      <section id="about" className="bg-neutral-900 px-32 py-16">
         <article className="mb-8">
            <header className="mb-3">
               <h2 className="text-center text-2xl font-semibold">About</h2>
            </header>

            <p className="text-center font-light tracking-wide mb-2">
               I am a fullstack developer, I am a hard worker and like to learn new things. proven by my achievements in several programming languages that I am quite good at, such as JavaScript, Python and PHP. Even though I have learned
               quite a lot, I will never stop developing myself to be better every day.
            </p>

            {/* <blockquote className="italic font-medium flex items-center justify-center gap-x-3">
               <span className="inline-block h-[1px] w-20 bg-white"></span>
               Coding for Work, Fun, and Hobby
               <span className="inline-block h-[1px] w-20 bg-white"></span>
            </blockquote> */}
         </article>

         <Skills />
      </section>
   );
};

export default About;
