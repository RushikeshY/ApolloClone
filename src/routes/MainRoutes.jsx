
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Details1 } from "../Pharmacy/Details";
import Pharmacy from "../Pharmacy/Pharmacy";
import Navbar from "../Vivek/components/Navbar"
import Cart from "../Pharmacy/Cart";
import DoctorsDetails from '../Abhishek/DoctorsData/DoctorsDetails'
import DoctorSpecialities from "../Abhishek/DoctorsData/DoctorSpecialities"
import Doctor from "../Alim/Doctor";
import VideoConsult from "../Abhishek/DoctorsData/VideoConsult"
import HomePage from "../Vivek/homepage/HomePage";
import Login from "../Rasheed/Login";
import {Details} from "../Rasheed/Details"
import Payment from "../Alim/Payment"
import Sucess from "../Alim/Sucess";

const MainRoutes = () => {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="pharmacy/*" element={<Pharmacy></Pharmacy>} />
        <Route path="pharmacy/:id" element={<Details1/>} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path ="/*" element ={<HomePage/>}/>
            <Route path ="/Doctor" element ={<Doctor/>}></Route>
            <Route path="/Doctors" element={<DoctorSpecialities/>} />
            <Route path="DoctorSpecialities/:id" element={<DoctorsDetails></DoctorsDetails>} />
            <Route path='videoConsult' element={<VideoConsult></VideoConsult>} />
            <Route path ="/Login" element={<Login/>}/>
            <Route path="/Details" element={<Details/>}/>
            <Route path ="/payment" element ={<Payment/>}/>
            <Route path ="/pay"  element={<Sucess/>}/>
            <Route path ="/last"  element={<HomePage/>}/>
      </Routes> 
 s
 
    </>
  )
}

export default MainRoutes












// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Details } from "../Pharmacy/Details";
// import Pharmacy from "../Pharmacy/Pharmacy";
// import Navbar from "./Navbar";
// import Cart from "../Pharmacy/Cart";
// import DoctorsDetails from '../Abhishek/DoctorsData/DoctorsDetails'
// import DoctorSpecialities from "../Abhishek/DoctorsData/DoctorSpecialities"

// import VideoConsult from '../Abhishek/DoctorsData/VideoConsult'


// const Mainroutes = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="pharmacy/*" element={<Pharmacy></Pharmacy>} />
//         <Route path="pharmacy/:id" element={<Details />} />
//         <Route path="/cart" element={<Cart />}></Route>


//             <Route path="/*" element={<DoctorSpecialities/>} />
//             <Route path="DoctorSpecialities/:id" element={<DoctorsDetails></DoctorsDetails>} />
//             <Route path='videoConsult' element={<VideoConsult></VideoConsult>} />
    
//       </Routes>
//     </div>
//   );
// };

// export default Mainroutes;
