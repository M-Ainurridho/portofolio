import NavBrand from "./nav-brand";
import NavLinks from "./nav-links";

const Navbar = () => {
   return (
      <nav className="px-8 py-6 md:px-16 lg:px-32 relative">
         <div className="flex justify-between items-center">
            <NavBrand />

            <NavLinks />
         </div>
      </nav>
   );
};

export default Navbar;
