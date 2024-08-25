import Navbar from "./ui/navbars";
import Hero from "./ui/hero";
import About from "./ui/about";
import Contact from "./ui/contact";
import Footer from "./ui/footer";

export default function LandingPage() {
   return (
      <main className="text-white">
         <div id="home" className="min-h-screen bg-neutral-800 flex flex-col">
            <Navbar />
            <Hero />
         </div>

         <About />
         <Contact />
         <Footer />
      </main>
   );
}
