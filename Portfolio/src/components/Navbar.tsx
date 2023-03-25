import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5CDB95] text-[#05386B]'>
            <div>
                <img src={logo} alt="Home Logo" className='HomeLogo' />
            </div>
            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skils</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='hidden'>
                <FaBars />
            </div>
            <ul className='hidden'>
            <li>Home</li>
                    <li>About</li>
                    <li>Skils</li>
                    <li>Work</li>
                    <li>Contact</li>
            </ul>
        </div>
    )
};

export default Navbar;
