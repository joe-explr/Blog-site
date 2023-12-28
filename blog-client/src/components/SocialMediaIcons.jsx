import React from 'react'
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaRedditSquare,
    FaWhatsappSquare
} from "react-icons/fa";

const SocialMediaIcons = ({url,title}) => {
  return (
    <div className='flex flex-col gap-y-3'>
        <h2 className='text-bold font-roboto text-xl'>Share on Social Media</h2>
        <div className='flex gap-x-4'>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}><FaFacebookSquare className='h-12 w-12 text-[#1877f2]'/></a>
            <a href={`https://twitter.com/share?url=[${url}]&text=[${title}]${url}`}><FaTwitterSquare className='h-12 w-12 text-[#1da1f2]'/></a>
            <a href={`https://reddit.com/submit?url=[${url}]&title=[${title}]`}><FaRedditSquare className='h-12 w-12 text-[#ff4500]'/></a>
            <a href={`https://api.whatsapp.com/send?text=[${title}] [${url}]`}><FaWhatsappSquare className='h-12 w-12 text-[#25d366]'/></a>
        </div>
    </div>
  )
}

export default SocialMediaIcons