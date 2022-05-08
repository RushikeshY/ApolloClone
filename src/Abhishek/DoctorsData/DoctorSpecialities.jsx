import React from 'react'
import {  useState,useEffect } from 'react';
import AboutDoctor from './AboutDoctor';
import styled from 'styled-components';
import Footer from '../../Vivek/footer/Footer';
import apollo from "./Apollo.json"

const Head = styled.div`
display:flex;
gap:30px;
margin:10px;
width:100%;
border-Top:1px solid grey;
background-color:#f7f8f5;
padding-top:20px;
height:1300px;
`
export const Main = styled.div`
font-weight:100;
font-size: small;
margin:10px;
height:1025px;
width:60%;
display:grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5,200px);
grid-gap: 20px;
`
const RightSideDiv = styled.div`
height:800px;
width:400px;
background:white;
font-size:15px;
font-weight:200;
padding-left:20px;
margin-top:30px;
border-radius:5px;
`
const ButtonPartners = styled.button`
margin-Right:20px;
font-Weight:lighter;
font-Size:small;
border:none;
background-color:transparent;
color:#02475B;
`
const SortDiv = styled.div`
margin:15px;
height:40px;
background-Color:white;
font-Size:small;
font-Weight:lighter;
width:750px;
border-Radius:4px;
padding-Top:6px;
`
const LeftDiv = styled.div`
background:#f7f8f5;
width:62%;
paddingTop:20px;
`
const TextButton = styled.button`
height:36px;
width:140px;
box-Shadow:0 2px 4px 0 rgb(0 0 0 / 20%);
color:#02475B;
margin-Right:10px;
`
export const LineDiv = styled.div`
height:20px;
border-Bottom:1px solid #eeeeee ;
margin-Bottom:20px;
`
const DoctorSpecialities = () => {
 

  
  const [data,setData]= useState(apollo.apollo) ;

    //>>>>>>>>>>>....Fetch Data grom db.json....<<<<<<<<<<<<<<<<//
    

      // useEffect(()=>{
        
        
      // },[])
   
 //>>>>>>>>>>>....Sorting Function...<<<<<<<<<<<<<<<<//

  
    const selectOption= (e,data)=>{
    
   
        if(e.target.value==="LTH")
        {
          
          let newData = data.sort((a,b)=>{
            return a.fee-b.fee;
          })
          setData(newData)
          console.log(newData)
        }  
        else if(e.target.value==="HTL")
        {
          
          let newData = data.sort((a,b)=>{
            return b.fee-a.fee;
          })
          setData(newData)
          console.log(newData)
        }    
      else
        {
        
          let newData = data.sort((a,b)=>{
            return b.experience-a.experience;
          })
          setData(newData)
          console.log(newData)
        }     
    }

  return (
<> 
  < Head>
    <LeftDiv >

  {/* >>>>>>>>>>>....Searchbar...<<<<<<<<<<<<<<<< */}

    <div style={{display:"flex",gap:"10px",marginLeft:"15px"}}>
        <div  style={{display:"flex",borderBottom:"2px solid #00b38e",height:"30px",width:"159px"}}>
            <img src="https://newassets.apollo247.com/images/location.svg" alt="Location"/>
            <p style={{marginTop:"0px",fontSize:"15px",color:"#02475B"}} >All Cities</p>
            <img src="https://newassets.apollo247.com/images/ic_dropdown_green.svg" alt="Dropdown"/>
        </div>

      <div  style={{display:"flex",borderBottom:"2px solid #00b38e",height:"30px",width:"583px"}}>
        <img src="https://newassets.apollo247.com/images/ic-search.svg"/>
        <input type="text" id="searchDoctors" style={{border:"none",textarea:"focus",outline:"none",backgroundColor:"#f7f8f5"}} placeholder="Search Doctors"/>
        <div id='doctors'></div>
      </div>
  </div>

  {/* >>>>>>>>>>>....No. of Apollo Doctors Div...<<<<<<<<<<<<<<<< */}

      <div style={{marginLeft:"15px",height:"40px",width:"290px",marginLeft:"70px"}}>
           <ButtonPartners style={{borderBottom:"2px solid #00b38e"}}> <span >Apollo Doctors (10)</span></ButtonPartners>
           <ButtonPartners> <span >Doctor Partners(0)</span></ButtonPartners> 
      </div>

  {/* >>>>>>>>>>>....Sorting Div...<<<<<<<<<<<<<<<< */}

      <SortDiv style={{marginLeft:"70px"}}>
        <span>
          <img src="https://newassets.apollo247.com/images/sort.svg" style={{marginRight:"5px",marginLeft:"10px"}} alt="" />
          <select onClick={selectOption}  style={{marginRight:"100px",border:"none",color:"#02475B",fontSize:"14px",fontWeight:"600"}}>
            <option value="default">Sort By:Availability</option>
            <option value="LTH">Price-Low to High</option>
            <option value="HTL">Price-High to Low</option>
            <option value="EXP">Years of experience</option>
          </select>

          <input type="checkbox" />
          <b style={{marginRight:"20px",fontWeight:"500",color:"#02475B"}}>Online Consultant</b>
          <input type="checkbox" />
          <b style={{marginRight:"100px",fontWeight:"500",color:"#02475B"}}>In-Person Consults</b>
          <b style={{color:"#02475B"}}>Filter</b>
          <img src="https://newassets.apollo247.com/images/ic_filters.svg" alt="" />        
          </span>
      </SortDiv>

  {/* >>>>>>>>>>>....Fetch Data Mapping and sent to the AboutDoctor Component...<<<<<<<<<<<<<<<< */}

      <Main   style={{marginLeft:"40px"}}>
          {data.map((el)=>
                <AboutDoctor item={el} key={el.id}/>     
)}
      </Main> 
    </LeftDiv>

  {/* >>>>>>>>>>>....RightSide Div ---Why Apollo????...<<<<<<<<<<<<<<<< */}
  
    <RightSideDiv style={{marginRight:"130px",padding:"20px"}}>

      <div style={{color:"#01667c",lineHeight:"1.7"}}>
          <h3 >Why Apollo247</h3>
          <ul>
            <li>Round-the-clock doctor availability</li>
            <li>Broad range of Specialities</li>
            <li>Detailed digital prescriptions</li>
            <li>Order medicines & tests online</li>
            <li>Digitised health records</li>
          </ul>
      </div>

      <div  style={{color:"#01667c"}}>
            <h3>How Doctor Consultation Works</h3>
            <TextButton style={{border:"1px solid #00b38e",borderRadius:"6px"}}><span>Text/Audio/Video</span></TextButton>
            <TextButton style={{border:"none",borderRadius:"6px"}}><span>Meet in Person</span></TextButton>
      </div>

      <div style={{display:"flex",marginTop:"20px"}}>
            <div style={{marginRight:"10px"}}>
                  <b><img src="https://newassets.apollo247.com/images/video-calling.svg" alt="" /></b>
            </div>
            <div>
                  <b style={{color:"#0589bb"}}>HOW TO CONSULT A DOCTOR <br /> ONLINE VIA <br /> TEXT/AUDIO/VIDEO?</b>
            </div>
      </div>

    <LineDiv></LineDiv>

<div style={{lineHeight:"2",color:"rgb(2, 71, 91, 0.6)",fontSize:"12px"}}>
             <div >
              <img src="https://newassets.apollo247.com/images/consult-doc.svg" alt="" style={{marginRight:"15px"}} />
              <span>Choose the doctor</span>
            </div>
          <div>
            <img src="https://newassets.apollo247.com/images/slot.svg" alt="" style={{marginRight:"15px"}} />
            <span>Book a slot</span>
          </div>
          <div>
            <img src="https://newassets.apollo247.com/images/ic-payment.svg" alt="" style={{marginRight:"15px"}} />
            <span>Make payment</span>
          </div>
          <div>
            <img src="https://newassets.apollo247.com/images/ic-mobile.svg" alt=""  style={{marginRight:"20px"}}/>
            <span>Be present in the consult room on </span>
            <p style={{marginLeft:"32px",marginTop:"0px",marginBottom:"0px"}}>apollo247.com at the time of consult</p>
          </div>
          <div>
            <img src="https://newassets.apollo247.com/images/prescription.svg" alt="" style={{marginRight:"15px"}} />
            <span>Receive prescriptions instantly</span>
          </div>
          <div>
            <img src="https://newassets.apollo247.com/images/ic-followchat.svg" alt="" style={{marginRight:"15px"}} />
            <span>Follow Up via text - Valid upto 7 days</span>
          </div>
</div>
  <LineDiv></LineDiv>
      <div style={{color:"rgb(2, 71, 91, 0.6)",fontSize:"12px",width:"250px",lineHeight:"1.7"}}>To enjoy services provided by Apollo 247 on Mobile, download our App</div>
      <div style={{display:"flex",gap:"60px",marginTop:"20px"}}>
        <img src="https://newassets.apollo247.com/images/apollo247.png" alt="" />
        <a href="https://play.google.com/store/apps/details?id=com.apollo.patientapp" style={{color:"#FC9916",textDecorationLine:"none",fontWeight:"600"}}>Download the App</a>
      </div>
    </RightSideDiv>
  </Head>

  <Footer/>
    </>
  )
}

export default DoctorSpecialities