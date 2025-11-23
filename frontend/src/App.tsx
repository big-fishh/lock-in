import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Root from './pages/Root/Root'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Root/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App