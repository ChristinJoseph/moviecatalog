import React from 'react'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Review from './components/Review'
import Login from './components/Login'
import Home from './components/Home'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Login/>
    <Register/>
    <Review/> */} 
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register  user={{username:'abc',email:'abc@gmail.com', password:'123',confirmpass:'123',address:'new york'}}/>}></Route>
      <Route path='/review' element={<Review/>}></Route>
      <Route path='/view' element={<View/>}></Route>
    </Routes>
    </>
  )
}

export default App
