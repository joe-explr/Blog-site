import React from 'react'
import { useState } from 'react';
import {Images} from '../constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

const NavBarItems = [
    {name: "Home", type:"link"},
    {name: "Articles", type:"link"},
    {name: "Pages", type:"dropdown", item:["About us","Contact us"]},
    {name: "Pricing",type:"link"},
    {name: "FAQ",type:"link"}
]

const NavListItem= ({item}) => {
    const [dropDown,setdropDown] = useState(false);
    const toggleDropDown = () => {
        setdropDown((currState)=>{
            return (!currState);
        })
    }
    return (
    <li className='cursor-pointer relative group mx-1'>
       { item.type === "link" ? (<>
        <a href="/" className='mx-1 text-lg group-hover:text-red-500'>{item.name}</a>
        <span 
        className="absolute opacity-0 top-0
               group-hover:right-[95%]
             group-hover:text-red-500
               group-hover:opacity-100
               transition-all duration-300">
                /</span>
                </>
        ):(
        <>
        <button onClick={toggleDropDown} className=' text-lg group-hover:text-red-500 flex gap-x-2 items-center'>
            <span>{item.name}</span>
            <IoIosArrowDown />
        </button>
        <div className={`${dropDown ? "block":"hidden"} w-max mt-3  lg:absolute lg:bottom-0 lg:transform lg:translate-y-full group-hover:block border border-blue-100 rounded-lg`}>
            <ul className='flex flex-col gap-y-2'>
            {item.item.map((page)=>(
                <li className='hover:bg-dark-hard hover:text-white p-2'>
                    <a href="/">{page}</a>
                </li>
            ))}
            </ul>
        </div>
        </>
        )}
    </li>
)
}

const Header = () => {
    const [navBarVisible,setnavBarVisible] = useState(false);

    const setVisibility = () => {
        setnavBarVisible((state)=>(!state));
    };
  return (
   <header className='container flex justify-between items-center p-1 mx-auto mb-4'>
    <div className='w-10 h-10'><img src={Images.Logo} alt="Logo"/></div>
    <div className='lg:hidden z-50 ' onClick={setVisibility}>{ navBarVisible ? 
    (<AiOutlineClose className='h-7 w-10'/>):
    (<AiOutlineMenu className='h-7 w-10' />)
    }</div>
    <div className={`
    ${ navBarVisible ? "right-0":"-right-full" } z-49
      bg-dark-hard text-white fixed flex flex-col top-[60px]
      lg:bg-transparent lg:text-black
       lg:w-auto bottom-0 gap-y-8 w-full justify-center items-center lg:justify-end lg:static lg:flex-row lg:gap-x-9 transform-all duration-500`}>
        <ul className='flex flex-col gap-y-5 lg:flex-row lg:gap-x-5'>
            {NavBarItems.map((item) => {
                return (
                    <NavListItem key={item.name} item={item}/>
                    );
            })}
        </ul>
        <button className='rounded-full border-2 border-blue-500 py-2 px-4 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign Up</button>
    </div>
   </header>
  )
}

export default Header