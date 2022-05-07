

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Apollo from '../components/Apollo'
import Doctors from '../components/Doctors'
import Pharmacy from '../components/Pharmacy'
import LabTest from '../components/LabTest'
import Covid from '../components/Covid'
const MainRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
<Route path='/apollo' element={<Apollo/>}></Route>
<Route path='/doctors' element={<Doctors/>}></Route>
<Route path='/pharmacy' element={<Pharmacy/>}></Route>
<Route path='/labtest' element={<LabTest/>}></Route>
<Route path='/covid' element={<Covid/>}></Route>


    </Routes>
    </>
  )
}

export default MainRoutes