import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[6rem] px-4 bg-white'>
            <h1 className='text-4xl text-center text-bold my-6'> Subscription Plans</h1>
            <div className="w-max-[1240px] mx-auto grid md:grid-cols-3 gap-8">

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>


                    <h2 className='text-2xl font-bold text-center py-8'>Single</h2>
                    <p className='text-center text-4xl font-bold'>$40</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'> Perfect portion size for one </p>
                        <p className='py-2 border-b mx-8'>  Choose 2-4 meals per week </p>

                    </div>
                    <button className='bg-[#ee6c4d] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>

                    <h2 className='text-2xl font-bold text-center py-8'>Family</h2>
                    <p className='text-center text-4xl font-bold'>$85</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Generous family sized portions </p>
                        <p className='py-2 border-b mx-8'>  Choose 4-6 meals per week  </p>

                    </div>
                    <button className='bg-[#ee6c4d] text-[black] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>

                    <h2 className='text-2xl font-bold text-center py-8'>Bigger Families </h2>
                    <p className='text-center text-4xl font-bold'>$150</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'> Perfect for bulk cooking or larger families </p>
                        <p className='py-2 border-b mx-8'>  Choose 6-10 meals per week  </p>
                    </div>
                    <button className='bg-[#ee6c4d] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>


            </div>
        </div>
    )
}

export default Cards