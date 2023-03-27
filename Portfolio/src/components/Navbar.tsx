
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5CDB95] text-[#05386B]">
      <div>
        <img src={logo} alt="Home Logo" className="HomeLogo" />
      </div>
      <ul className="hidden md:flex">
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={15}/> : <FaTimes />}
      </div>
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#5CDB95] flex flex-col justify-center items-center'}>
        <li className="py-5 text-4xl">About</li>
        <li className="py-5 text-4xl">Experience</li>
        <li className="py-5 text-4xl">Work</li>
        <li className="py-5 text-4xl">Contact</li>
        <li className="py-5 text-4xl">Resume</li>
      </ul>
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
