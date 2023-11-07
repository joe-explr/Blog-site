import React from 'react';
import { Images } from '../../../constants';

const tags = ["Design", "User Experience", "User Interface"]

const Hero = () => {
  return (
    <section className='container p-7'>
        <div className='flex justify-evenly'>
            <div className='flex flex-col justify-center gap-y-10 items-center lg:items-start'>
                <div className='w-3/4 '>
                    <h1 className=' text-2xl lg:text-5xl '>Read the most Interesting articles in Tech, Crypto and AI</h1>
                    <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-8 w-full'>
                    <div className='lg:w-1/2'>
                        <input type="text" className='w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2 rounded-full'/>
                    </div>
                    <button className='p-2 bg-primary text-white rounded-full lg:w-1/6'>Search</button>
                </div>
                <div className='flex justify-start gap-x-6 flex-wrap'>
                    <span className='inline-block font-bold'>Popular Tags:</span>
                    <ul className='flex flex-wrap gap-x-3'>
                        {tags.map((tag)=>(
                            <li className='p-1 text-red-500 bg-blue-100 opacity-0.5 font-bold rounded-lg'>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='hidden lg:block'>
                <img src={Images.Hero} alt="Hero Image"/>
            </div>
        </div>
    </section>
  )
}

export default Hero