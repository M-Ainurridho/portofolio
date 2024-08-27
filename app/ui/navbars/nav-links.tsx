"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

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
      nav: "Contact",
      href: "#contact",
   },
];
const NavLinks = () => {
   const [collapse, setCollapse] = useState<Boolean>(false);

   return (
      <>
         {!collapse ? (
            <>
               <div className="hidden md:flex md:items-center md:gap-x-12">
                  {navs.map((nav) => (
                     <Link
                        href={nav.href}
                        key={nav.nav}
                        className="relative hover:text-green-400 after:content[''] after:h-[1px] after:bg-green-300 after:duration-200 after:w-0 after:mx-auto hover:after:block hover:after:w-1/2 duration-100"
                     >
                        {nav.nav}
                     </Link>
                  ))}
               </div>
               <Bars3Icon className="w-8 cursor-pointer md:hidden" onClick={() => setCollapse(!collapse)} />
            </>
         ) : (
            <>
               <div className="absolute top-0 right-0 py-6 px-8 bg-neutral-900 md:hidden">
                  <XMarkIcon className="w-8 cursor-pointer" onClick={() => setCollapse(!collapse)} />
               </div>
               <SideNav />
            </>
         )}
      </>
   );
};

const SideNav = () => {
   return (
      <aside className="absolute top-20 left-0 right-0 bg-neutral-900 z-40">
         {navs.map((nav) => (
            <Link href={nav.href} key={nav.nav} className="block text-center py-3 hover:bg-neutral-700/50 duration-100 md:hidden">
               {nav.nav}
            </Link>
         ))}
      </aside>
   );
};

export default NavLinks;
