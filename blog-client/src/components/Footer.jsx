import React from 'react'
import { Images } from '../constants'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaTelegramPlane,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-dark-hard text-soft-gray space-y-5 p-10'>
        <footer className=''>
        <div className='grid grid-cols-10 gap-4 md:grid-cols-12'>
            <div className='col-span-10 order-last flex flex-col items-center space-y-6 md:col-span-4 md:-order-1 md:items-start'>
                <img src={Images.Logo} className='w-9' alt="Logo"/>
                <p className='text-center text-sm my-auto md:text-left'>Build a modern and creative website with Esoteric</p>
                <div className='flex justify-around order-last h-auto gap-2'>
                <ul className='flex space-x-2 list-none'>
                    <li>
                        <a href="/"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="/"><FaFacebook/></a>
                    </li>
                    <li>
                        <a href="/"><FaTwitter/></a>
                    </li>
                    <li>
                        <a href="/"><FaInstagram/></a>
                    </li>
                    <li>
                        <a href="/"><FaTelegramPlane/></a>
                    </li>
                </ul>
                </div>
            </div>

            <div className='col-span-5 md:col-span-4'>
                <span className='font-bold text-lg'>Products</span>
                <ul className='list-none'>
                <li><a href="/">Landing Page</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">Documentation</a></li>
                <li><a href="/">Referral Program</a></li>
                <li><a href="/">Pricing</a></li>
                </ul>
            </div>
            <div className='col-span-5 md:col-span-4'>
                <span className='font-bold text-lg'>Services</span>
                <ul className='list-none'>
                <li><a href="/">Documentation</a></li>
                <li><a href="/">Design  </a></li>
                <li><a href="/">Themes</a></li>
                <li><a href="/">Illustrations</a></li>
                <li><a href="/">UI Kit</a></li>
                </ul>
            </div>
            <div className='col-span-5 md:col-start-5 md:col-span-4'>
                <span className='font-bold text-lg'>Company</span>
                <ul className='list-none'>
                <li><a href="/">About</a></li>
                <li><a href="/">Terms</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Careers</a></li>
                </ul>
            </div>
            <div className='col-span-5 md:col-span-4'>
                <span className='font-bold text-lg'>More</span>
                <ul className='list-none'>
                <li><a href="/">Documentation</a></li>
                <li><a href="/">License</a></li>
                <li><a href="/">Changelog</a></li>
                </ul>
            </div>
            <div className='hidden md:block lg:block col-span-12 items-center'>
                <div className='w-1/3 mx-auto justify-between items-center flex flex-col'>
                    <img src={Images.Heart} className="w-[2em] my-5" alt="heart logo"/>
                    <p className='font-bold whitespace-nowrap'>Copyright © 2023. Crafted with love.</p>
                </div>
            </div>
            </div>
        </footer>
    </section>
  )
}

export default Footer