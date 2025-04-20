import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Clients } from '../components/Clients'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Clients/>}/>
        {/* <Route path="about" element={<About/>}/> */}
    </Routes>
    
    </>
  )
}
