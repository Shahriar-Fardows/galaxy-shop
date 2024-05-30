import { Navbar } from "keep-react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {

 // 1st nav menu links 
  const NavLinks = <>
    <li><NavLink to="/" className="text-white hover:text-green-500">Home</NavLink> </li>
    <li><NavLink to="/" className="text-white hover:text-green-500">All Product</NavLink> </li>
    <li><NavLink to="/" className="text-white hover:text-green-500">Home</NavLink> </li>
    <li><NavLink to="/" className="text-white hover:text-green-500">Home</NavLink> </li>
    <li><NavLink to="/" className="text-white hover:text-green-500">Home</NavLink> </li>

  </>

  // 2nd nav menu links
  const NavIcon = <>
    <li><NavLink to="/" className="text-white">Home</NavLink> </li>
    <li><NavLink to="/" className="text-white"></NavLink> </li>
    <li><NavLink to="/" className="text-white">Add Product</NavLink> </li>
  </>

  return (
    <Navbar className="bg-black">
      <section className="container mx-auto py-2 flex items-center justify-between  ">
        <div >
          <ul className="lg:flex hidden items-center justify-between gap-8">
            {NavLinks}
          </ul>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
            <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Try it free</span>
            </button>
          </div>
          <ul className="lg:flex hidden items-center justify-between gap-5">
            {/* {NavIcon} */}
          </ul>
        </div>
      </section>
    </Navbar>
  );
};

export default Header;