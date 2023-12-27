import React from 'react';
import { Images } from '../../../constants';

const Subscribe = () => {
  return (
    <>
    <svg className='w-full h-auto mb-0'
     viewBox="0 0 2160 263" fill="none"
     xmlns="http://www.w3.org/2000/svg">
        <path id="Wave" fillRule="evenodd" clipRule="evenodd"
            d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="#0D2436" />
    </svg>

  <section className='relative bg-dark-hard px-5 pb-7'>
    <div className='grid grid-cols-12 md:place-items-center'>
      <div className='w-full col-span-12 space-y-4 md:col-span-6'>
        <h1 className='text-white font-bold text-2xl md:text-center'>Get weekly mail on Latest stories and Updates</h1>
          <div className='w-full max-w-[500px] md:flex space-y-3 mx-auto mt-12 md:space-y-0 md:space-x-3 items-center justify-center'>
            <input type="text" className='w-full rounded-md p-2 placeholder:text-dark-soft' placeholder='Your Email'/>
            <button className='md:w-fit md:whitespace-nowrap rounded-md p-2 text-white bg-blue-700'>
              Get Started
            </button>
          </div>
        <p className='text-sm font-bold text-gray-500 md:text-center'>Get a response daily at 9am.</p>
      </div>
        <div className='hidden md:col-span-6 md:order-first md:block rounded-xl mb-12'>
          <div className="w-3/4 mx-auto relative ">
          <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.09] absolute -bottom-[10%] -left-[8%]" />
              <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
            <img src={Images.Socials} alt="Socials" className='rounded-xl object-cover w-full h-auto md:h-46 lg:h-60'/>
            <div className='py-3'>
              <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                Future of Work
              </h2>
              <p className="text-dark-light mt-3 text-sm md:text-lg">
                      Majority of peole will work in jobs that don’t exist today.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
   </section>
   </>
  )
}

export default Subscribe;