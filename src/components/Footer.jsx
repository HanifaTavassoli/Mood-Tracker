import logo from "../assets/images/logo-white.png";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#bde2ea"
      d="m0 32 34.3 48C68.6 128 137 224 206 245.3c68.3 21.7 137-32.3 205-42.6C480 192 549 224 617 240c68.7 16 137 16 206-16 68.4-32 137-96 206-90.7 68.1 5.7 137 79.7 205 96 68.9 15.7 137-26.3 172-48l34-21.3v160H0Z"
    ></path>
  </svg>

      <footer className="bg-calm-blue">
        <div className="px-4 md:px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <h3 className="font-semibold text-gray-700 mb-2">Quick Links</h3>
            <Link to="/" className="text-gray-600 hover:text-[#26abac]">Home</Link>
            <Link to="/features" className="text-gray-600 hover:text-[#26abac]">Features</Link>
            <Link to="/blog" className="text-gray-600 hover:text-[#26abac]">Services</Link>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <img
            src={logo}
            alt="Mood Tracker logo"
            className="block rounded-full w-20"
          />
          <div className="flex justify-center items-center gap-6">
            <a href="https://t.me/YourUsername" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-[#26abac] text-2xl cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/YourUsername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#26abac] text-2xl cursor-pointer" />
            </a>
            <a href="https://wa.me/YourPhoneNumber" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-[#26abac] text-2xl cursor-pointer" />
            </a>
            <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[#26abac] text-2xl cursor-pointer" />
            </a>
          </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-end gap-2">
            <h3 className="font-semibold text-gray-700 mb-2">Contact</h3>
            <p className="text-gray-600">Email: info@moodtracker.com</p>
            <p className="text-gray-600">Phone: +93 700 123 456</p>
            <p className="text-gray-600">Herat, Afghanistan</p>
          </div>
        </div>

        <p className="text-center font-light py-5 text-gray-600 text-sm sm:text-base">
          &copy; 2025 Mood Tracker; All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
