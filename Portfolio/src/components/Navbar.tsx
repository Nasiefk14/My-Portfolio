import { useState } from "react";
import Logo from "../assets/Logo.jpeg";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#05386B] text-[#5CDB95]">
      <div><Link to="landing" smooth={true} duration={500}>
        <img src={Logo} alt="Home Logo" className={` cursor-pointer ${nav ? "blur-sm" : ""} w-[70px]`}/>
        </Link>
      </div>
      <ul className="hidden md:flex text-[#edf5e1] ">
        <li className="hover:text-[#5CDB95]"><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li className="hover:text-[#5CDB95]"><Link to="code" smooth={true} duration={500}>&lt;Code/&gt;</Link></li>
        <li className="hover:text-[#5CDB95]"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        <li className="hover:text-[#5CDB95]">CV</li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        <Hamburger toggled={nav} toggle={setNav} />
      </div>
      <ul
        className={`absolute top-0 right-0 w-[75%] h-screen bg-[#064583] flex flex-col justify-center items-center ease-in-out duration-300 ${
          nav ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <li className="py-5 text-1xl"><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li className="py-5 text-1xl">&lt;Code/&gt;</li>
        <li className="py-5 text-1xl">Contact</li>
        <li className="py-5 text-1xl">CV</li>
      </ul>
    </div>
  );
};

export default Navbar;