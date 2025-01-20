import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import BasketSection from '../pages/home/components/basketSection/BasketSection'
import AdminSection from '../pages/home/components/adminSection/AdminSection'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/basket' element={<BasketSection />} />
        <Route path='/admin' element={<AdminSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router