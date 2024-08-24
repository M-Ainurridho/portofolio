import Link from "next/link";

const NavLinks = () => {
   const navs = [
      {
         nav: "Home",
         href: "#",
      },
      {
         nav: "About me",
         href: "#about",
      },
      {
         nav: "Service",
         href: "#service",
      },
   ];

   return (
      <div className="nav-links flex items-center gap-x-12">
         {navs.map((nav) => (
            <Link href={nav.href} key={nav.nav} className="relative hover:text-green-400 after:content[''] after:h-[1px] after:bg-green-300 after:duration-200 after:w-0 after:mx-auto hover:after:block hover:after:w-1/2 duration-100">
               {nav.nav}
            </Link>
         ))}
         
      </div>
   );
};

export default NavLinks;
