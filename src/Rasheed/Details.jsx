import { jsonEval } from '@firebase/util'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Details = () => {
    const formDetails={
        firstname:"",
        lastname:"",
        age:"",
        email:"",
        Gender:""

    }
const [data,setData]=useState(formDetails)
    const handleChange=(e)=>{
        setData((el)=>({
            ...el,
            [e.target.name]:e.target.value

        }))

    }
    const handleSubmit=(e)=>{
e.preventDefault();
console.log(data)
localStorage.setItem("user",JSON.stringify(data))

    }
  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <div>
            <img style={{width:"900px"}} src="https://newassets.apollo247.com/images/login_ap.png"/> 
            </div>
     <form onSubmit={handleSubmit} style={{          width: "350px",
          marginLeft: "50px",
          padding:"30px",
          paddingLeft:"40px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",}}>
        <div>
        <h1 style={{color:"green"}}>HI!</h1>
        <p style={{color:"#0087BA"}}>Enter your details. Let us quickly get to know you so that we can get you the best help :)</p>

        <div>
            <label style={{color:"rgb(13, 77, 104)"}}>Full Name</label>
            <br/>
            <input  style={{
                  height: "27px",
                  width: "190px",
                  borderRadius: "5px",
                  fontSize: "17px",
                }}    type="text" name="fisrtname" placeholder="First Name"  onChange={handleChange}/>
            <br/>
            <br/>
            <input  style={{
                  height: "30px",
                  width: "190px",
                  borderRadius: "5px",
                  fontSize: "17px",
                }} type="text"  name="lastname" placeholder="Last Name"  onChange={handleChange}/>
      </div>
      <br/>
<div>
    <label style={{color:"rgb(13, 77, 104)"}}>Date Of Birth</label>
    <br/>
    <input style={{
                  height: "30px",
                  width: "190px",
                  borderRadius: "5px",
                  fontSize: "17px",
                }} type="date"  name="age" placeholder="dd/mm/yy"  onChange={handleChange}/>
    
</div>
<br/>
<div>
    <label style={{paddingBottom:"5px",color:"rgb(13, 77, 104)"}} >Gender</label>
    <br/>
    <select style={{height:"25px",borderRadius:"5px"}}>
        <option name="male" value="Male">MALE</option>
        <option  name="female" value="FeMale">FEMALE</option>
    </select>
</div>
<br/>
<div>
    <label style={{paddingBottom:"5px",color:"rgb(13, 77, 104)"}}>Email</label>
    <br/>
    <input style={{
                  height: "30px",
                  width: "190px",
                  borderRadius: "5px",
                  fontSize: "17px",
                }} type="email" name="email" placeholder="Enter email"  onChange={handleChange}></input>
    <br/>
</div>
<br />

<Link to ="/">
<button     style={{
                height: "40px",
                  padding:"5px",
                  color: "white",
                  width: "110px",
                  borderRadius: "5px",
                  backgroundColor: "#ff960d",
                  marginLeft:'5px',
                  fontSize:"19px"
              }}   type="submit"  >Submit</button>
              </Link>
</div>


    </form>
    </div>
  )
}



