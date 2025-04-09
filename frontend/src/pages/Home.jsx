import React from 'react'
import Header from '../components/Header'
import Category from '../components/category'
import FrontWorkers from '../components/FrontWorkers'
import BottomBanner from '../components/BottomBanner'

const Home = () => {
  return (
    <div>
      <Header/>
      <Category/>
      <FrontWorkers/>
      <BottomBanner/>
     
    </div>
  )
}

export default Home