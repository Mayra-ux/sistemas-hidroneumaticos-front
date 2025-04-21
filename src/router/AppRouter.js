import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Clients } from '../components/clients/Clients'
import { HomePage } from '../components/home/HomePage'



export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/clients" element={<Clients />} />
      </Routes>

    </>
  )
}
