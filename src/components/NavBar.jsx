import { useState } from "react";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import resume from "../assets/resume.pdf";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed z-10 top-0 left-0 w-full px-4 md:px-12 lg:px-16 py-4 md:py-6 bg-black bg-opacity-70 backdrop-blur-md text-white flex items-center justify-between">
      <a href="#home" className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 hover:scale-110 transition-transform">Bhavani Kumar</a>
      <ul className="hidden md:flex gap-6 md:gap-12 text-sm md:text-xl font-semibold">
        <li className="hover:opacity-80 hover:scale-110 transition-transform">
          <a href="#home">Home</a>
        </li>
        <li className="hover:opacity-80 hover:scale-110 transition-transform">
          <a href="#tech">Tech</a>
        </li>
        <li className="hover:opacity-80 hover:scale-110 transition-transform">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:opacity-80 hover:scale-110 transition-transform">
          <a href="#project">Projects</a>
        </li>
        <li className="hover:opacity-80 hover:scale-110 transition-transform">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <ul className="hidden md:flex gap-4 md:gap-6 text-lg md:text-2xl">
        <li className="ring-2 ring-white p-1 rounded-md hover:opacity-80 hover:scale-110 transition-transform" title="Linkedin">
          <a href="https://www.linkedin.com/in/bhavani-kumar-sedamkari/">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="ring-2 ring-white p-1 rounded-md hover:opacity-80 hover:scale-110 transition-transform" title="GitHub">
          <a href="https://github.com/BhavaniKumarSedamkari">
            <FaGithub />
          </a>
        </li>
        <li className="ring-2 ring-white p-1 rounded-md hover:opacity-80 hover:scale-110 transition-transform" title="Send Email">
          <a href="mailto:sbhavanikumar2016@gmail.com">
            <SiGmail />
          </a>
        </li>
        <li className="ring-2 ring-white p-1 rounded-md hover:opacity-80 hover:scale-110 transition-transform" title="Download Resume">
          <a href={resume} download="BhavaniKumarResume.pdf">
            <FaDownload />
          </a>
        </li>
      </ul>

      <div className="md:hidden">
        <button className="text-white text-2xl hover:opacity-80" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-6 py-6 shadow-lg">
          <a href="#home" className="hover:opacity-80 hover:scale-110 transition-transform" onClick={toggleMobileMenu}>
            Home
          </a>
          <a href="#tech" className="hover:opacity-80 hover:scale-110 transition-transform" onClick={toggleMobileMenu}>
            Tech
          </a>
          <a href="#experience" className="hover:opacity-80 hover:scale-110 transition-transform" onClick={toggleMobileMenu}>
            Experience
          </a>
          <a href="#project" className="hover:opacity-80 hover:scale-110 transition-transform" onClick={toggleMobileMenu}>
            Projects
          </a>
          <a href="#contact" className="hover:opacity-80 hover:scale-110 transition-transform" onClick={toggleMobileMenu}>
            Contact
          </a>
          <div className="flex gap-6 text-xl">
            <a href="https://www.linkedin.com/in/bhavani-kumar-sedamkari/"
              className="hover:opacity-80 hover:scale-110 transition-transform"
              title="Linkedin">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/BhavaniKumarSedamkari"
              className="hover:opacity-80 hover:scale-110 transition-transform"
              title="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:sbhavanikumar2016@gmail.com"
              className="hover:opacity-80 hover:scale-110 transition-transform"
              title="Send Email">
              <SiGmail />
            </a>
            <a href={resume}
              download="BhavaniKumarResume.pdf"
              className="hover:opacity-80 hover:scale-110 transition-transform"
              title="Download Resume">
              <FaDownload />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
