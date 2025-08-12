import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleToggle = () => setIsOpen(!isOpen);

    const handleLinkClick = (section) => {
        setActiveSection(section);
        setIsOpen(false); // Close menu on click (mobile view)
    };

    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 md:space-x-4 space-y-4 md:space-y-0 p-4 md:p-0'>
            {['home', 'courses', 'about', 'pricing', 'quiz', 'questions'].map((section) => (
                <li key={section}>
                    <a
                        href={`#${section}`}
                        onClick={() => handleLinkClick(section)}
                        className={`block py-2 pr-4 pl-3 duration-200 ${
                            activeSection === section ? 'text-yellow-400' : 'text-gray-300'
                        } hover:text-yellow-400 lg:p-0`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        
        <header className='bg-black text-white py-6 px-4 fixed top-0 left-0 right-0 z-10 '>
            <div className='container mx-auto flex justify-between items-center h-full'>
                
                
                {/* Clickable Logo */}
                <div>
                <div>
                <h1 className="text-2xl font-bold max-w-[120px]"> <span className='text-yellow-400'>DMG</span><span className='text-red-600'>GERMANY</span></h1>
            </div>
                </div>

                {/* Navigation Links */}
                <div className='hidden md:flex flex-grow justify-center'>
                    <nav>{navLinks}</nav>
                </div>

                {/* Contact Button */}
                <div className='hidden md:block'>
                    <a href="#contact" className='text-black bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded'>
                        Contact
                    </a>
                </div>

                {/* Hamburger Menu */}
                <div className='block md:hidden'>
                <button
    onClick={handleToggle}
    className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-xl'
>
    {isOpen ? "✖" : <HiMenuAlt3 className='w-6 h-6' />}
</button>

                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className='absolute top-full left-0 w-full bg-black z-20 md:hidden'>
                    {navLinks}
                    <div className='p-4'>
                        <a href="#contact"
                            onClick={() => setIsOpen(false)}
                            className='block text-center text-black bg-yellow-200 hover:bg-yellow-400/90 px-4 py-2 rounded'
                        >
                            Contact Us
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
