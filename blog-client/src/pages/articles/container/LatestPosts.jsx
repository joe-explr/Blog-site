import React from 'react'
import { Images } from '../../../constants'

const Tags = [
    "Education",
    "Medical",
    "Tech",
    "Web3",
    "Startup World"
  ] 

const LatestPosts = ({className, posts, header}) => {
  return (
        <div className={`shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] my-5 p-4 rounded-lg space-y-3 ${className}`}>
            <h2 className='text-xl font-roboto font-bold'>{header}</h2>
            <div className='grid gap-y-3 grid-cols-auto md:grid-cols-2 lg:grid-cols-1'>
            {posts.map((post)=>{
            return (
                <div className='flex items-center gap-3' key={post._id}>
                <img src={Images.Article} alt="Posts" className='aspect-square w-1/5 rounded-md' />
                <div className='text-sm font-medium'>
                    <h1 className='font-bold text-sm md:text-base font-roboto'>{post.title}</h1>
                    <span className='text-sm text-soft-gray text-opacity-60'>{(new Date(post.createdAt)).toLocaleString("en-US",
                    {
                        day:"numeric",
                        month:"short",
                        year:"numeric"
                    })}</span>
                </div>
                </div>
            );
            })}
            </div>
        <div className='space-y-2'>
            <h2 className='font-bold text-lg'>Tags</h2>
            <div className='flex gap-x-2 flex-wrap gap-2'>
            {Tags.map((tag,index)=>{
                return (<div className='inline-block text-white bg-blue-700 whitespace-nowrap px-3 py-1.5 rounded-lg' key={index}>
                            {tag}
                </div>)
            })}
            </div>
        </div>
        </div>
        )
}

export default LatestPosts
