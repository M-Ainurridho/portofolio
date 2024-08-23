import Hero from "./ui/hero";
import Navbar from "./ui/navbars";

export default function LandingPage() {
   return (
      <main className="text-white">
         <div id="home" className="min-h-screen bg-neutral-800 flex flex-col">
            <Navbar />
            <Hero />
         </div>
      </main>
   );
}
