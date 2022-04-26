import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">

            <h1 className='w-full text-3xl font-bold text-[#ee6c4d]'> BIRYANI-RANI</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Story</li>
                <li className='p-4'>Shop</li>
                <li className='p-4'>Testimonials</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}

            </div>


            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#4a4e69] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#ee6c4d] m-4'>BIRYANI-RANI</h1>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Story</li>
                <li className='p-4 border-b border-gray-600'>Shop</li>
                <li className='p-4 border-b border-gray-600'>Testimonials</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>

    );
};

export default Navbar