import { faGithub, faInstagram, faLinkedinIn, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Platform {
   name: string;
   icon: IconDefinition;
   url: string;
}

const SocialMedia = () => {
   const platforms = [
      {
         name: "Github",
         icon: faGithub,
         url: "https://www.github.com/M-Ainurridho",
      },
      {
         name: "Instagram",
         icon: faInstagram,
         url: "https://www.instagram.com/ainurridho_7/",
      },
      {
         name: "Linkedin",
         icon: faLinkedinIn,
         url: "https://www.linkedin.com/in/muhammad-ainurridho-56840b27b/",
      },
   ];
   return (
      <div className="flex gap-x-4 justify-center md:justify-start">
         {platforms.map((platform: Platform) => (
            <Link key={platform.name} href={platform.url} className="h-8 w-8 border border-green-400 rounded-md flex items-center justify-center hover:shadow-md hover:shadow-green-400 duration-100" target="_blank">
               <FontAwesomeIcon icon={platform.icon} className="h-5 text-green-400" />
            </Link>
         ))}
      </div>
   );
};

export default SocialMedia;
