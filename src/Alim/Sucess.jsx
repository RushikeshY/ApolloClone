import React from 'react'
import { Link } from 'react-router-dom'
const Sucess = () => {
  return (
    <div>
 
   <div style={{marginLeft:"300px" }}>
   <h1 style={{paddingleft:"300px",size:"23px",color:"Green"}}>Payment Sucessful</h1>
  <Link to="/last">
   <button style={{height:'45px',width:'200px',backgroundColor:'#fcb716',color:'white',fontWeight:'bold',border:'none',borderRadius:'7px',marginTop:'10px',fontSize:"17px"}}>Go to Home Page</button>
   </Link>
   </div>
      
    </div>
  )
}

export default Sucess