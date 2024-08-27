import Skills from "./skills";

const About = () => {
   return (
      <section id="about" className="bg-neutral-900 px-8 py-6 md:px-16 lg:px-32">
         <article className="mb-8">
            <header className="mb-3">
               <h2 className="text-center text-2xl font-semibold">About</h2>
            </header>

            <p className="text-center font-light tracking-wide mb-2">
               I am a fullstack developer, I am a hard worker and like to learn new things. proven by my achievements in several programming languages that I am quite good at, such as JavaScript, Python and PHP. Even though I have learned
               quite a lot, I will never stop developing myself to be better every day.
            </p>
         </article>

         <Skills />
      </section>
   );
};

export default About;
