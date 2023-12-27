import React from 'react'
import MainLayout from '../../components/MainLayout'
import Articles from './container/Articles'
import Hero from './container/Hero'
import Subscribe from './container/Subscribe'

const HomePage = () => {
  return (
    <MainLayout>
        <Hero/>
        <Articles/>
        <Subscribe/>
    </MainLayout>
  )
}

export default HomePage