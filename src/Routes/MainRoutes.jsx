import React from 'react'
import { Route, Routes } from 'react-router-dom'

import DoctorsDetails from '../DoctorsData/DoctorsDetails'
import DoctorSpecialities from '../DoctorsData/DoctorSpecialities'
import Navbar from '../DoctorsData/Navbar'
import VideoConsult from '../DoctorsData/VideoConsult'


const MainRoutes = () => {


  return (
    <div>
        <Navbar></Navbar>
        <Routes>
            <Route path="/*" element={<DoctorSpecialities/>} />
            <Route path="DoctorSpecialities/:id" element={<DoctorsDetails></DoctorsDetails>} />
            <Route path='videoConsult' element={<VideoConsult></VideoConsult>} />
        </Routes>

    </div>
  )
}

export default MainRoutes