import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Workers from './pages/Workers'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppoinments from './pages/MyAppoinments'
import Appoinments from './pages/Appoinments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='mx-4 mt-32 md:mx-10 lg:mx-10'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workers" element={<Workers />} />
        <Route path='/workers/:speciality' element={<Workers />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='myAppoinments' element={<MyAppoinments/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/appointment/:docId'element={<Appoinments/>} />
      </Routes>
      
      </div>
      <Footer/>
    </div>
  )
}

export default App
