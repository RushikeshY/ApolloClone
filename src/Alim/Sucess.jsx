import React from 'react'
import { Link } from 'react-router-dom'
const Sucess = () => {
  return (
    <div>
 
   <div style={{marginLeft:"600px" }}>
   <h1 style={{paddingleft:"290px",size:"23px",color:"Green"}}>Payment Sucessful</h1>
   <img src="https://egsgroup.files.wordpress.com/2017/02/payment-successful.png" alt="" />
 
   </div>
   <Link to="/last">
   <button style={{height:'45px',marginLeft :"620px",width:'200px',backgroundColor:'#fcb716',color:'white',fontWeight:'bold',border:'none',borderRadius:'7px',marginTop:'10px',fontSize:"17px"}}>Go to Home Page</button>
   </Link>

    </div>
  )
}

export default Sucess