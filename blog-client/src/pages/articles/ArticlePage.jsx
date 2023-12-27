import Breadcrumbs from './container/Breadcrumbs'
import React from 'react'
import MainLayout from '../../components/MainLayout'
import LatestPosts from './container/LatestPosts'
import { Images } from '../../constants'
import { Link } from 'react-router-dom'

const breadcrumb = [
  {name:"Home", path:"/"},
  {name:"Blog", path:"/blog"},
  {name:"Article Page", path:"/blog/12"},
]

const NewPosts = [
  {
  _id:1,
  image:Images.Article,
  title:"How to help children succeed in intellectual development",
  createdAt:"December 25, 2023 11:13:00"
  },
  {
  _id:2,
  image:Images.Article,
  title:"How to help children succeed in intellectual development",
  createdAt:"December 25, 2023 11:13:00"
  },
  {
  _id:3,
  image:Images.Article,
  title:"How to help children succeed in intellectual development",
  createdAt:"December 25, 2023 11:13:00"
  },
  {
  _id:4,
  image:Images.Article,
  title:"How to help children succeed in intellectual development",
  createdAt:"December 25, 2023 11:13:00"
  },
  {
  _id:5,
  image:Images.Article,
  title:"How to help children succeed in intellectual development",
  createdAt:"December 25, 2023 11:13:00"
  },
  {
  _id:6,
  image:Images.Article,
  title:"How to help children succeed in intellectual development",
  createdAt:"December 25, 2023 11:13:00"
}]

const ArticlePage = ({category=""}) => {
  return (
    <MainLayout>
        <section className='container flex flex-col mx-auto p-7 gap-2 lg:flex-row lg:gap-x-5 lg:items-start'>
          <article className='flex-1 space-y-4'>
            <Breadcrumbs data={breadcrumb}/>
            <img src={Images.Article} alt="Post" className='rounded-lg w-full h-auto'/>
            <h2 className='text-lg'><Link path={`/blog/searchCategory=${category}`}>Education</Link></h2>
            <h1 className='text-xl font-bold font-roboto'>Help children get better education</h1>
            <p className='leading-7 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
            </p>            
          </article>
          <LatestPosts posts={NewPosts} header="Latest Articles" className="lg:mt-0 lg:max-w-xs"/>
        </section> 
    </MainLayout>
  )
}

export default ArticlePage