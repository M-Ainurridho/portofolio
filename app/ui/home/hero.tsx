import Link from "next/link";
import SocialMedia from "./social-media";
import Image from "next/image";

const Hero = () => {
   return (
      <section id="hero" className="px-8 py-6 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-center gap-y-8 md:grow">
         <div className="hero-intro order-2 md:order-1">
            <div className="text-center md:text-start">
               <p className="text-xl lg:text-2xl mb-1 hidden md:flex md:items-center">
                  <span>HELLO</span>
                  <span className="inline-block w-16 h-[1px] bg-white ms-2"></span>
               </p>
               <h1 className="text-3xl md:text-4xl lg:text-5xl mb-1">
                  <strong>
                     <span className="hidden me-2 md:inline-block">I&apos;m</span>
                     <span className="inline-block text-green-400">Muhammad Ainurridho</span>
                  </strong>
               </h1>
               <p>Web Developer & Student</p>
               <Link
                  href="https://drive.usercontent.google.com/u/0/uc?id=13sHxZUILQgCtRxVRZ6hjDpHsNyAEeZBj&export=download"
                  download
                  className="inline-block bg-green-400 hover:bg-green-500 duration-100 text-white px-4 py-2 rounded-full mt-4 mb-12"
               >
                  Download CV
               </Link>
            </div>

            <SocialMedia />
         </div>
         <div className="order-1 md:order-2" style={{ perspective: "100px" }}>
            <div
               className="w-72 h-72 lg:w-[350px] lg:h-[350px] bg-neutral-900 rounded-3xl overflow-hidden"
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
