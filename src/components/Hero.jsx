import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#ee6c4d] font-bold p-2'>
                    Cooking at home has never been easier.
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Get ready for homemade masala mixes
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-2xl  py-4'>
                        Now offering:
                    </p>
                    <Typed
                        className='md:text-4xl sm:text-3xl text-2xl font-bold md:pl-4 pl-2'
                        strings={['biryani', 'pulao', 'korma', 'nihari']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />

                </div>
                <p className='md:text-2xl text-xl text-[#eaf4f4]'>
                    We are constantly expanding our homemade, organic, preservative free masala selection!
                </p>

                <button
                    className='bg-[#ee6c4d] w-[200px] 
                rounded-lg font-medium 
                my-6 mx-auto py-3 text-black'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Hero