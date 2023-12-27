import React from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import { getCommentsData } from '../../data/getComments'
import { useState,useEffect } from 'react'


const CommentContainer = () => {
  
  const [comments, setComments] = useState([]);
  const [loggedInUser, setloggedInUser] = useState({_id:"a"});
  const count = comments.length;

  const addCommentHandler= (value,parentC,commentUser) => {
    const newcomment = {
      _id: Math.random()*1000+20,
      user: {
        _id: "a",
        name: "Joseph Antony ",
      },
      desc: value,
      post: "1",
      parent: parentC,
      replyOnUser: commentUser,
      createdAt: new Date().toISOString(),
    }
    setComments([...comments,newcomment]);
  }
  const updateCommentHandler= (value,id) => {
    const comment = comments.find((item)=>item._id===id)
    setComments([...comments,{desc:value,...comment}]);
  }
  const deleteCommentHandler= (id) => {
    const updatedComments= comments.filter((item)=>{return item._id!==id})
    setComments([...updatedComments]);
  }


  useEffect(() => {
    (async() =>{const data = await getCommentsData();
      setComments(data);})()
  }, [])
  return (
    <section className='flex flex-col gap-4'>
        <CommentForm action="Send" />
        <h2 className='font-roboto font-extrabold'>All Comments({count})</h2>
        <div className='flex flex-col gap-y-3 items-start'>
        {comments.filter((comment)=>{
          return comment.parent === null;
        }).map((comment)=>{
          const children =comments.filter((com)=> com.parent===comment._id)
          const permission = (loggedInUser._id === comment.user._id);
          return <Comment
                  key={comment._id}
                  data={comment}
                  replies={children}
                  hasPermission={permission}
                  addCommentHandler={addCommentHandler}
                  updateCommentHandler={updateCommentHandler}
                  deleteCommentHandler={deleteCommentHandler}
                  />
        })}
        </div>
    </section>
  )
}

export default CommentContainer