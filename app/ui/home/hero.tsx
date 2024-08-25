import SocialMedia from "./social-media";
import Image from "next/image";

const Hero = () => {
   return (
      <section id="hero" className="px-32 py-6 flex justify-between items-center grow">
         <div className="hero-intro">
            <div>
               <p className="text-2xl mb-1 flex items-center">
                  <span>HELLO</span>
                  <span className="inline-block w-16 h-[1px] bg-white ms-2"></span>
               </p>
               <h1 className="text-5xl mb-1">
                  <strong>
                     I&apos;m <span className="inline-block text-green-400">Muhammad Ainurridho</span>
                  </strong>
               </h1>
               <p>Web Developer & Student</p>
               <button className="bg-green-400 hover:bg-green-500 duration-100 text-white px-4 py-2 rounded-full mt-4 mb-12">Download CV</button>
            </div>

            <SocialMedia />
         </div>
         <div style={{ perspective: "100px" }}>
            <div
               className="w-[350px] h-[350px] bg-neutral-900 rounded-3xl overflow-hidden"
               style={{
                  boxShadow: "5px 5px 3px #4ade80",
                  transform: "rotateY(-1.5deg)",
               }}
            >
               <Image width={300} height={300} src="/images/avatars/photo.png" alt="Photo" className="mx-auto" />
            </div>
         </div>
      </section>
   );
};




export default Hero;
