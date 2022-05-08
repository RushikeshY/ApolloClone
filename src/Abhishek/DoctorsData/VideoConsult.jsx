import React, { useState } from 'react'
import styled from 'styled-components'



const BlurBG = styled.div`
background-image: url('/backgroundSite11.jpg');
height:800px;

width:100%;
align-items:center;
margin:auto ;
padding:20px;
`
const VideoConsultDiv = styled.div`
height:620px;
background-color:white;
width:696px;
border-radius:10px;

margin:auto;
padding-top:5px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

`
const ButtonsDIV = styled.div`
box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
height:51px;
`
const Buttons = styled.button`
width:334px;
height:46px;
font-size: 15px ;
font-Weight:500;
border:none ;
background: white;
cursor:pointer;
`

const DoctorConsult = styled.div`
height:150px;
width:616px;
margin:20px;
padding:20px;
font-size:14px;
border-radius:10px;
background:#F7F8F5;
box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`

const DoctorConsult2 = styled.div`
height:150px;
overflow-Y:scroll;
width:636px;
margin:20px;
padding:20px;
font-size:14px;
border-radius:10px;
background:#F7F8F5;
box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`

const ConsultNow = styled.button`
height:45px;
background:#00B38E;
color:white;
border-radius:10px;
border:none;
margin-left:20px;
font-weight:600;
font-Size:15px;
padding:10px;
cursor:pointer;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const CheckBoxDiv = styled.div`
margin:20px;
font-size:15px;
font-weight:500;
cursor:pointer;
`


const VideoConsult = () => {

 const [flag,setFlag] = useState(false)

  const handleChange =()=>{
      
     setFlag(true);
     console.log(flag)
    
  }

  const handlepara=()=>{
    setFlag(false);
  }


  return (
    <BlurBG >

        {/* >>>>>>>>>>>....Main Div...<<<<<<<<<<<<<<<< */}
        <VideoConsultDiv>
            <ButtonsDIV>
                <Buttons style={{borderBottom:"3px solid #00B38E",color:"#02475B",cursor:"pointer"}}>Video Consult</Buttons>
                <Buttons style={{color:"grey",cursor:"pointer"}}>Hospital Visit</Buttons>
            </ButtonsDIV>
            <div>
            <DoctorConsult>
                    <div>Dr. Sonali Jain is Available in 29 mins! Would you like to
                 consult now or schedule for later?</div><br />
                <ConsultNow  onClick={handlepara}>Consult Now</ConsultNow>
                <ConsultNow  onClick={handleChange}>Schedule for Later</ConsultNow>
            </DoctorConsult>

        {(flag)? (
           <DoctorConsult2 style={{height:"230px"}}>
            <center><p>Select Date & Time for Video Consult</p></center>
            <input type="date" style={{height:"30px", width:"200px",borderRadius:"10px",marginLeft:"100px",marginRight:"20px", border:"none",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} />
            <input type="time" style={{height:"30px", width:"150px",borderRadius:"10px",marginRight:"10px" , border:"none",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}/>

            <DoctorConsult2 style={{width:"520px"}}>
              I have read and understood the Terms & Conditions of usage of 24x7, Privacy policy, Refund Policy and consent to the same. I am voluntarily availing of the services provided on this platform. I am fully aware that I will not be undergoing a physical examination by a physician prior to a physician recommending medical tests and/or treatment and/or the prescribing of OTC drugs. I am also aware that the consultation on 24x7 Application does not preclude my rights to visit a physician and opt for a physical examination at any point in time and I am free at any time during the consultation to request for the same.
              </DoctorConsult2>
           </DoctorConsult2>
           ):(
              <DoctorConsult2 >
              I have read and understood the Terms & Conditions of usage of 24x7, Privacy policy, Refund Policy and consent to the same. I am voluntarily availing of the services provided on this platform. I am fully aware that I will not be undergoing a physical examination by a physician prior to a physician recommending medical tests and/or treatment and/or the prescribing of OTC drugs. I am also aware that the consultation on 24x7 Application does not preclude my rights to visit a physician and opt for a physical examination at any point in time and I am free at any time during the consultation to request for the same.
              </DoctorConsult2>
           )}     

            </div>

            <CheckBoxDiv>
                    <input type="checkBox" style={{marginRight:"15px"}} />
                    <span>Receive status updates on <img src="https://newassets.apollo247.com/images/ic_whatsup.svg" alt="" /> Whatsapp</span><br />
                    <input type="checkBox" style={{marginRight:"15px"}}/>
                    <span>Share all Files from Past Medical record with the Doctor</span>
            </CheckBoxDiv>

            <Buttons  onClick={(e) => { e.preventDefault(); window.location.href='/videoConsult';}}  
                      style={{background:"#FCB716",marginLeft:"150px",borderRadius:"10px",color:"white",fontSize:"14px",fontWeight:"600"}}>Pay Rs. 800
            </Buttons>
        </VideoConsultDiv>
    </BlurBG>
  )
}

export default VideoConsult