import React from 'react'
import { useState } from 'react'

const CommentForm = ({action, isCancelable=null,formHandler,toggleEditing}) => {

    const [value,setValue] = useState("");

    const submitHandler = (e) => {
      e.preventDefault();
      formHandler(value);
    }
  return (
    <form onSubmit={submitHandler}>
    <div className='flex flex-col items-end gap-y-2 border p-5 rounded-lg border-soft-gray focus-within:border-2 focus-within:border-opacity-60 focus-within:border-primary'>
        <textarea 
        rows="4" 
        className='w-full focus:outline-none font-roboto'
        placeholder='Leave your comments here..'
        value={value}
        onChange={(e)=>setValue(e.target.value)} />
        <div className='flex gap-x-2'>
        {isCancelable && <button type="button" onClick={toggleEditing} className='px-2 py-1 border-2 border-opacity-50 text-red-600 border-red-600 font-roboto rounded-lg'>Cancel</button>}
        <button type="submit" className='text-white px-6 py-1 max-w-md bg-primary font-roboto rounded-lg'>{action}</button>
        </div>
    </div>
    </form>
  )
}

export default CommentForm