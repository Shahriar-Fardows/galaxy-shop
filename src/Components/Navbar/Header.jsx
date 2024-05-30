import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import useAuthContext from "../../Context/useAuthContext";
const Header = () => {

  const { user } = useAuthContext();

  // 1st nav menu links 
  const NavLinks = <>
    <li><NavLink to="/" className="text-white hover:text-green-500">Home</NavLink> </li>
    <li><NavLink to="/" className="text-white hover:text-green-500">All Product</NavLink> </li>
    <li><NavLink to="/" className="text-white hover:text-green-500"> Brands</NavLink> </li>
    <li><NavLink to="/" className="text-white hover:text-green-500">All Product</NavLink> </li>


  </>

  // 2nd nav menu links
  const NavIcon = <>
    <li><NavLink to="/" className="text-white">Home</NavLink> </li>
    <li><NavLink to="/" className="text-white">Add Product</NavLink> </li>
  </>

  return (
    <div className="bg-black fixed top-0 left-0 right-0 z-50">
      <section className="flex items-center justify-between py-4 container mx-auto">
        {/* 1st nav menu  */}
        <div>
          <ul className="lg:flex hidden items-center justify-between gap-5">
            {NavLinks}
          </ul>
        </div>

        {/* web site logo   */}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* 2nd nav menu  */}
        <div>
          {
            user ?
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-black hover:text-white transition duration-300 rounded whitespace-nowrap bg-white hover:bg-black border focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Login Now</span>
          </button>
              :
              <ul className="lg:flex hidden items-center justify-between gap-5">
                {NavIcon}
              </ul>
          }
        </div>



      </section>
    </div>
  );
};

export default Header;