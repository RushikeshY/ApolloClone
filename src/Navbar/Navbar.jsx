
import React from "react";

import "../Pharmacy/navbar.css"
import { Link } from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  return (

    <nav>
      <Link to="/pharmacy">Pharmacy</Link>
      <Link className='gap' to="/cart">Cart</Link>

    </nav>
  );
};

export default Navbar;
