import React, { useState } from 'react'
import { Images } from '../../constants'
import { FaRegComment } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";
import { MdOutlineDeleteOutline } from "react-icons/md";
import CommentForm from './CommentForm';

const Comment = ({data,hasPermission=true, replies=[],addCommentHandler,updateCommentHandler,deleteCommentHandler}) => {

  const [isEditing,setIsEditing] = useState(false);
  const [addToggle,setAddToggle] = useState(false);

  const addComment = (value) =>{
    addCommentHandler(value,data._id,data.user._id);
  }
  const updateComment = (value) =>{
    updateCommentHandler(value,data._id)
  }
  const deleteComment = () =>{
    deleteCommentHandler(data._id)
  }
  return (
    <div className='bg-[#F2F4F5] p-4 rounded-md flex items-start gap-x-3'>
        <img src={Images.Avatarimg} alt="comment pfp" className='rounded-full object-cover'/>
        <div className='flex flex-col gap-y-3'>
            <div>
                <h4 className='font-bold text-sm font-roboto'>{data?.user.name}</h4>
                <h6 className='opacity-60 text-xs'>{(new Date(data.createdAt)).toLocaleString("en-US",
                    {
                        day:"numeric",
                        month:"short",
                        year:"numeric",
                        hour:"2-digit"
                    })}</h6>
            </div>
            {!isEditing && <p className='text-justify text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.
            </p>}
            {isEditing && 
            <CommentForm action="Update" 
            isCancelable={true}
            toggleEditing={()=> setIsEditing((state)=>!state)}
            formHandler={updateComment}
            initialVal={data.desc}/>}

                <div className='flex items-center gap-x-5'>
                    <button className="flex items-center space-x-1" onClick={()=>setAddToggle(!addToggle)}><FaRegComment/> <span>Reply</span></button>
                {(!isEditing && hasPermission) &&
                    <><button className="flex items-center space-x-1" onClick={()=>setIsEditing(!isEditing)}><HiOutlinePencil/> <span>Edit</span></button>
                    <button className="flex items-center space-x-1" onClick={()=>deleteComment()}><MdOutlineDeleteOutline/> <span>Delete</span></button></>
                }
                </div>
                {addToggle && 
                <CommentForm action="Reply" 
                isCancelable={true}
                toggleEditing={()=> setIsEditing((state)=>!state)}
                formHandler={addComment}/>
                }

                {replies.length>0 &&
                <div className='self-end'>
                {replies.map((item) => {
                const permission = hasPermission&&(data.user._id === item.user._id);
                return (<Comment
                  key={item._id}
                  data={item}
                  hasPermission={permission}
                  addCommentHandler={addCommentHandler}
                  updateCommentHandler={updateCommentHandler}
                  deleteCommentHandler={deleteCommentHandler}
                  />)})}
                </div>}
        </div>
    </div>
  )
}

export default Comment