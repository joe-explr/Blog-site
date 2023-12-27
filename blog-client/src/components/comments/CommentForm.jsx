import React from 'react'
import { useState } from 'react'

const CommentForm = ({action, iscancelable=null}) => {

    const [value,setValue] = useState("");

  return (
    <div className='flex flex-col items-end gap-y-2 border border-soft-gray focus:border-dark-soft'>
        <form onSubmit={submitHandler}>
        <textarea 
        rows="6" 
        className='focus:outline-none'
        value={value}
        onChange={(e)=>setValue(e.target.value)} />
        <div className='flex gap-x-2'>
        {iscancelable && <button type="submit" className='px-2 py-1 bg-primary font-roboto rounded-lg'>{action}</button>}
        <button type="submit" className='px-2 py-1 bg-primary font-roboto rounded-lg'>{action}</button>
        </div>
        </form>
    </div>
  )
}

export default CommentForm