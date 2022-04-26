import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#ee6c4d]'>BIRYANI-RANI.</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                <div className='flex justify-evenly md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>About</h6>
                    <ul>
                        <li className='py-2 text-sm'>Our Story</li>
                        <li className='py-2 text-sm'>Our Vision</li>
                        <li className='py-2 text-sm'>Our Suppliers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Masalas</h6>
                    <ul>
                        <li className='py-2 text-sm'>Selection Process</li>
                        <li className='py-2 text-sm'>Cooking Techniques</li>
                        <li className='py-2 text-sm'>FAQs</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Shop</h6>
                    <ul>
                        <li className='py-2 text-sm'>Subscription</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Testimonials</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer