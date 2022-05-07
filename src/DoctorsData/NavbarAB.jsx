import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{height:"50px",width:"100%",backgroundColor:"lightgreen"}}>
        <Link to="/DoctorSpecialities">DoctorSpecialities</Link>
    </div>
  )
}

export default Navbar