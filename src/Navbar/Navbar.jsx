// import React from 'react'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <div>

// <Link className='gap' to="/pharmacy">Pharmacy</Link>

//     </div>
//   )
// }
import { IoIosCart } from "react-icons/io";
// export default Navbar

import React from "react";
// import "../styles/navbar.css";
import "../Pharmacy/navbar.css"
import { Link } from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  return (

    <nav>
    <Link to="/pharmacy">Pharmacy</Link>
    <Link className='gap' to="/cart">Cart</Link>
      {/* <div className="nav_box">
        <span  style={{marginLeft:'100px',margin:"30px", fontSize : "26px" , FontWeight:"bold", "padding":"10px"}} className="my_shop" onClick={() => setShow(true)}>
          <h3>Pharmacy</h3>
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
        
            <i  style={{marginLeft:'700px', backgroundColor:"red", fontSize : "26px" , FontWeight:"bold","padding":"10px"}} className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
