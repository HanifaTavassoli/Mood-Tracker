import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
function Navbar() {
  return (
    <nav
      className="flex items-center justify-center w-2xl rounded-full px-3 mx-auto lg:shadow-md lg:shadow-sky-500/50 bg-white text-black lg:fixed lg:left-1/2 lg:transform lg:-translate-x-1/2 mt-5 font-montserrat"
      aria-label="Global"
    >
      <div className="hidden lg:flex">
        <NavLink to="/" className="mr-3">
          <span className="sr-only">Mood Tracker</span>
          <img src={logo} alt="logo" className="w-18 rounded-full" />
        </NavLink>
      </div>
      <div className="hidden lg:flex w-full justify-center">
        <ul className="flex items-center justify-around w-full lg:gap-x-12">
          <li>
            <NavLink to="/" className="">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="#about" className="">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="#services" className="">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="#contact" className="">
              Contact
            </NavLink>
          </li>
          <li>
            {/* <button className="px-4 py-2 cursor-pointer rounded-full bg-calm-blue transition-colors duration-300">
              Sign up
              </button> */}
            <NavLink
              to="/signup"
              className="px-4 py-2 cursor-pointer rounded-full bg-cyan-600/80 hover:bg-cyan-600 transition-colors duration-300"
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <!-- Mobile menu toggle button --> */}
      <div className="flex items-center w-full px-4 py-2 lg:hidden bg-gray-100/50 text-black fixed top-0 justify-between">
        <NavLink to="/">
          <span className="sr-only">Mood Tracker</span>
          <img src="" alt />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
