// import React, { useState, useEffect } from "react";
// // import "../styles/cart.css";
// import "./Cart.css"
// const Cart = (handleClick) => {
//   // const [Cost, setCost] = useState(0);

//   // const handleRemove = (id) => {
//   //   const arr = cart.filter((item) => item.id !== id);
//   //   setCart(arr);
//   //   handleCost();
//   // };

//   // const handleCost = () => {
//   //   let ans = 0;
//   //   cart.map((item) => (ans += item.amount * item.Cost));
//   //   setCost(ans);
//   // };

//   // useEffect(() => {
//   //   handleCost();
//   // });
//   const [cart,setCart]=useState([])
//   const getData=async()=>{
//     let res = await fetch("http://localhost:3000/CartData")
//     let data=await res.json()
//     setCart(data)
//     // console.log(data)
//   }

//   useEffect(()=>{
//     getData()
//   },[])
  
  
//   const onDelete = (id) => {

//     let newTodo = cart.filter((item) => item.id !== id);
//     setCart(newTodo);
//   };
  
//   const Delete = async (id) => {

//     try {
//       await fetch(`http://localhost:3000/CartData/${id} `, {
//         method: "DELETE",
//         headers: { "content-type": "application/json" },
//       });

//       console.log(2)
//       onDelete(id);
//     } catch (e) {
//       console.log(e);
//     }
//   };
// console.log(cart)
//   return (
//     <article>
//       {cart.map((item) => (
//         <div className="cart_box" key={item.id}>
//             <div className="cart_img">
//               <img src={item.url} alt="" />
//               <h3 id="h3">{item.Name}</h3>
//             </div>
//               {/* <div>
//                 <button onClick={() => handleChange(item, 1)}>+</button>
//                 <button>{item.amount}</button>
//                 <button onClick={() => handleChange(item, -1)}>-</button>
//               </div>
//               <div>
//                 <span>{item.Cost}</span>
//                 <button onClick={() => handleRemove(item.id)}>Remove</button>
//               </div> */}
//         </div>
//       ))}
//       <button onClick={() => Delete(cart.id)}>Delete</button>
//       <div className="total">
//         <span style={{fontSize:"22px",color:"teal",fontWeight:"bold"}}>Total Cost of your Cart</span>
//         <span style={{fontSize:"22px",fontWeight:"bold",color:"green"}}> Rs - {cart.Cost}</span>
//       </div>
//     </article>
//   );
// };

// export default Cart;





import React, { useEffect, useState } from 'react'
// import Navbar from './NAvbar'


const Cart1= () => {
  
  const [details,setDetails]=useState([])
  const getData=async()=>{
    let res = await fetch("http://localhost:8080/CartData")
    let data=await res.json()
    setDetails(data)
    console.log(data)
  }

  useEffect(()=>{
    getData()
  },[])
  






  
  
  const onDelete = (id) => {

    let newTodo = details.filter((item) => item.id !== id);
    setDetails(newTodo);
  };
  
  const Delete = async (id) => {

    try {
      await fetch(`http://localhost:8080/CartData/${id} `, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });

      console.log(2)
      onDelete(id);
    } catch (e) {
      console.log(e);
    }
  };


  const [Cost, setCost] = useState(0);



  const handleCost = () => {
    let ans = 0;
    details.map((item) => (ans += item.amount * item.Cost));
    setCost(ans);
    console.log(Cost)
  };

  useEffect(() => {
    handleCost();
  });


  const handleChange = (item, d) => {
    const ind = details.indexOf(item);
    const arr = details;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setDetails([...arr]);
 
  };
  

  return (
    <div>
      {/* <Navbar/> */}

      <div>
        {
          details.map((item)=>{
            return( 
                <div className='data'>
                  <div>
                    <div>
                      <img className='img' src={item.url} alt="" />
                    </div>
                    <p >{item.Name}</p>
                    <p>{item.Discription}</p>
                     <p>{item.Cost}</p>

                    <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <h5>${Cost}</h5>
          </div>



                    <button onClick={() => Delete(item.id)}>Delete</button>
                  </div>
              </div>
            )
          })
        }
      </div>
      </div>
    )
    
}

export default Cart1;