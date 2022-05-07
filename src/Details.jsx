import { jsonEval } from '@firebase/util'
import React, { useState } from 'react'

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
     <form onSubmit={handleSubmit}>
        <div>
        <h1 style={{color:"green"}}>HI!</h1>
        <p style={{color:"#0087BA"}}>Enter your details. Let us quickly get to know you so that we can get you the best help :)</p>

        <div>
            <label>Full Name</label>
            <br/>
            <input      type="text" name="fisrtname" placeholder="First Name"  onChange={handleChange}/>
            <br/>
            <input type="text"  name="lastname" placeholder="Last Name"  onChange={handleChange}/>
      </div>
      <br/>
<div>
    <label>Date Of Birth</label>
    <br/>
    <input type="date"  name="age" placeholder="dd/mm/yy"  onChange={handleChange}/>
    
</div>
<br/>
<div>
    <label>Gender</label>
    <br/>
    <select>
        <option name="male" value="Male">MALE</option>
        <option  name="female" value="FeMale">FEMALE</option>
    </select>
</div>
<br/>
<div>
    <label>Email</label>
    <br/>
    <input type="email" name="email" placeholder="Enter email"  onChange={handleChange}></input>
    <br/>
</div>
<button style={{backgroundColor:"orange" ,border:"none"}} type="submit">Submit</button>

</div>


    </form>
    </div>
  )
}



