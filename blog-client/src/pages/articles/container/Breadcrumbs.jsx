import React from 'react'
import { Link } from 'react-router-dom'


const Breadcrumbs = ({data}) => {
  return (
    <div className='flex items-center gap-x-3 whitespace-nowrap'>
        {data.map((item,index)=>{
            return (<div key={index} className='text-dark-soft text-sm'>
            <Link to={item.path}>{item.name}</Link>
            {index !== data.length - 1 && <span>/</span>}
            </div>  )
        })}
    </div>
  )
}

export default Breadcrumbs