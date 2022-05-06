import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Details } from '../Pharmacy/Details'
import Pharmacy from '../Pharmacy/Pharmacy'
import Navbar from './Navbar'
import Cart from '../Pharmacy/Cart'

const Mainroutes = () => {
  return (
    <div>
 <Navbar/>
    <Routes>
        <Route path ="pharmacy/*" element={<Pharmacy></Pharmacy>}/>
        <Route path ="pharmacy/:id" element={<Details/>} /> 
        <Route path ="/cart" element={<Cart/>}></Route>
    </Routes>


    </div>
  )
}

export default Mainroutes