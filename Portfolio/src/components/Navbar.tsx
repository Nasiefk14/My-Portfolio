import { useState } from "react";
import logo from "../assets/Logo.png";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#05386B] text-[#5CDB95]">
      <div>
        <img src={logo} alt="Home Logo" className={` ${nav ? "blur-sm" : ""} w-[75px]`}/>
      </div>
      <ul className="hidden md:flex">
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        <Hamburger toggled={nav} toggle={setNav} />
      </div>
      <ul
        className={`absolute top-0 right-0 w-[75%] h-screen bg-[#064583] flex flex-col justify-center items-center ease-in-out duration-300 ${
          nav ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <li className="py-5 text-1xl">About</li>
        <li className="py-5 text-1xl">Experience</li>
        <li className="py-5 text-1xl">Work</li>
        <li className="py-5 text-1xl">Contact</li>
        <li className="py-5 text-1xl">Resume</li>
      </ul>
    </div>
  );
};

export default Navbar;