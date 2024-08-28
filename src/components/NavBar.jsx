import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Navbar */}
            <nav className="p-4 fixed top-0 left-0 w-full z-50 bg-[#FCF5F0] h-[10rem] flex items-center">
                <div className="container mx-auto flex justify-between items-center">
                    <img
                        className="w-[10rem] h-[2rem]"
                        src="https://framerusercontent.com/images/pFMtWM1eNHfgXIRN8bNbRIR5yEc.svg"
                        alt="Logo"
                    />
                    <button
                        onClick={toggleMenu}
                        className="text-grey focus:outline-none"
                    >
                        <GiHamburgerMenu className="w-[2rem] h-[2rem]" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#1A0A07]  transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >

                <div className="container mx-auto flex justify-between items-center">
                    <h1 className='text-white text-4xl mt-[3rem]'>Akram Studio</h1>
                    <button
                        onClick={toggleMenu}
                        className="text-grey focus:outline-none"
                    >
                        <GiHamburgerMenu className="w-[2rem] h-[2rem]" />
                    </button>
                </div>
                <div className="flex justify-end p-4">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl"
                    >
                        &times;
                    </button>
                </div>
                <div className="flex flex-col   h-full ml-[11rem] text-7xl font-serif ">
                    <a href="#" className="text-white  py-4" onClick={toggleMenu}>Home</a>
                    <a href="#" className="text-white  py-4" onClick={toggleMenu}>Agency</a>
                    <a href="#" className="text-white  py-4" onClick={toggleMenu}>Project</a>
                    <a href="#" className="text-white  py-4" onClick={toggleMenu}>Blog</a>
                    <a href="#" className="text-white  py-4" onClick={toggleMenu}>Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
