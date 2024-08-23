import NavBrand from "./nav-brand";
import NavLinks from "./nav-links";

const Navbar = () => {
   return (
      <nav className="px-32 py-6">
         <div className="wrapper flex justify-between items-center">
            <NavBrand />

            <NavLinks />
         </div>
      </nav>
   );
};

export default Navbar;
