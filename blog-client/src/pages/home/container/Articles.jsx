import React from 'react'
import ArticleItem from '../../../components/ArticleItem'
import { Images } from '../../../constants';
import { IoIosArrowForward } from "react-icons/io";

const articlesData = [
    {   
        id:1,
        title: "Sample Heading",
        intro: "A sample Article Intro description",
        date: "02 May",
        user:{
            name:"Joseph B Antony",
            image: Images.Avatarimg,
            verified: true,
        }
    },
    {   
        id:2,
        title: "Sample Heading",
        intro: "A sample Article Intro description",
        date: "02 May",
        user:{
            name:"Joseph B Antony",
            image: Images.Avatarimg,
            verified: false
        }
    }
]
const Articles = () => {
  return (
    <section className='container mx-auto mb-5'>
        <div className='flex flex-wrap mx-auto p-4 md:gap-5 gap-y-2'>
     {articlesData.map((data)=>{
        return(<ArticleItem article={data} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)]" key={data.id}/>)
     }) }
     </div>
     <button className='flex border-4 border-primary text-primary gap-x-2 mx-auto mt-6 items-center p-3 font-bold font-roboto non-italic rounded-xl'>
        <span>More Articles</span>
        <IoIosArrowForward />
     </button>
    </section>
  )
}

export default Articles
