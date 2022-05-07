import React, { useState } from 'react'
import { auth } from './firebase'
import {  RecaptchaVerifier,signInWithPhoneNumber  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [phone , setPhone] = useState("")
    const [toggle,setToggle] = useState(false)
    const [otp, setOtp] = useState("")
    const navigate=useNavigate()

const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {

        },

      }, auth);
      
}
    const handleChange = (e) =>{
        setPhone("+91"+" "+e.target.value)
    }
    const handleSubmit= (e) =>{

        e.preventDefault()
        if(phone.length >=10){
            setToggle(true)
        generateRecaptcha()
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setPhone(" ")
        }).catch((error) => {

        });
    }else {
        alert("Enter Correct Mobile Number")
    }
            }
            const otpChange = (e) =>{
               setOtp(e.target.value) 
          
            }
            const submitOtp = (e) =>{
                e.preventDefault()
                if(otp.length==6){
                    let confirmationResult = window.confirmationResult
                confirmationResult.confirm(otp).then((result) => {
                    const user = result.user;
                    // console.log(); 
                    setOtp(" ")
                   
alert("login successfull")
if(user){
    navigate("/Details")
}
                  }).catch((error) => {
                });      
            }else{
                alert("Invalid Otp")
            }
        }

  return (
      <div style={{display:"flex",justifyContent:"space-evenly",marginLeft:"30px"}}>
          <div>
              <img style={{width:"700px",paddingTop:"50px"}} src="https://newassets.apollo247.com/images/login_ap.png"/>
          </div>
    <div style={{width:"700px",marginLeft:"50px"}} >
        {
            toggle == false ?

            <div className='form'>
                <h1 style={{color:"#02475B"}}>Hi</h1>
                <p   style={{color:"#0087BA"}}>Please enter your mobile <br/> number to login</p>
            <form onSubmit={handleSubmit} action="">
        <input placeholder='Enter Mobile Number' type="Number" onChange={handleChange} />
   <button type='Submit'>Send-Otp</button>
        </form>
        <br />
        <li>OTP will be sent to this number by SMS and WhatsApp. 
         <br />   By signing up, I agree to the <a href="/"> Privacy Policy,Terms and 
            Conditions</a>  <br /> of Apollo Pharmacy.</li>
        </div>
        :

        <div className='form2' >
            <h2>Great</h2>
            <p>Now type in the OTP sent to you <br /> for authentication</p>
        <form onSubmit={submitOtp}>
            <input type="Number" placeholder='Enter Otp' onChange={ otpChange } required />
            &nbsp;   <button type='Submit'>Submit</button>
          
        </form>
        <div className='BorderDiv'>
            <div></div>
            <div>or</div>
            <div></div>
        </div>

        <a href="">Resend Otp</a>
<br />

        <button>Get Otp On Call</button>
        </div>
        }

  

        <div id='recaptcha-container'></div>
    </div>
    </div>
  )
}

export default Login