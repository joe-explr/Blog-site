import React from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from '../../data/getComments'
import { useState } from 'react'

const [comments, setComments] = useState([]);

useEffect(async () => {
  const data = await getCommentsData();
  setComments(data);
}, [])


const CommentContainer = () => {
  return (
    <section className='flex flex-col px-7'>
        <CommentForm action="Send" />
        <div className='p-3 '>
        {comments.filter((comment)=>{
          return comment.parent === null;
        }).map((comment)=>{
          return <Comment
                  data={comment}
                  />
        })}
        </div>
    </section>
  )
}

export default CommentContainer