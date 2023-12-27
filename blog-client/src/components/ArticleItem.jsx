import React from 'react'
import {Images} from '../constants'
import { Avatar } from '@mui/material';
import { IoIosCheckmarkCircle } from "react-icons/io";

const ArticleItem = ({article: {title, intro, date, user},className}) => {
  return (
    <div className={`rounded-xl overflow-hidden border-2 ${className}`}>
      <img src={Images.Article} alt="Article" className='object-cover w-full h-auto md:h-46 lg:h-60'/>
      <div className='p-6'>
        <header className='flex flex-col'>
          <h2><strong>{title}</strong></h2>
          <p>{intro}</p>
        </header>
      <div className='flex justify-between mt-7 items-center'>
        <User user={user} />
        <div className='font-bold text-gray-500'>{date}</div>
      </div>
      </div>
    </div>
  )
}

const User = ({user : { name, image, verified } }) =>{
    return (
        <div className='flex gap-4 items-center'>
            <Avatar alt="User" src={image}/>
            <div>
                <strong>{name}</strong>
                { verified && (<div className='flex items-center gap-2'>
                    <IoIosCheckmarkCircle className='text-lime-500'/>
                    <span className='italic font-light text-xs'>Verified Writer</span>
                </div>)
                }
            </div>
        </div>
    )
}
export default ArticleItem;
