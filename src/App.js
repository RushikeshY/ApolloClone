// import logo from './logo.svg';
// import './App.css';
// // import Cart from './Cart/Cart';
// import Pharmacy from './Pharmacy/Pharmacy';
// import {Routes,Route} from "react-router-dom"

// function App() {
//   return (

//     <>
    
//       <Pharmacy/>
      
//         <Routes>
//         <Route path="/pharmacy" element={<Pharmacy/>}></Route>
//         {/* <Route path="/cart" element={<Cart/>}></Route> */}

//         </Routes>
     


//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Pharmacy from './Pharmacy/Pharmacy';
import Navbar from "./Navbar/Navbar"
import Cart from "./Pharmacy/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Pharmacy handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;
