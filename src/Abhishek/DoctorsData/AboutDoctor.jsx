import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SubDiv= styled.div`

display:flex;
gap:20px;
height:90px;
width:300px;
//border:1px solid black;
font-family:IBM Plex Sans,sans-serif;
`

export const DetailsDiv= styled.div`

height:90px;
width:220px;
line-Height:0.3;
font-weight:100;
font-size: small;
`
export const DoctorDiv = styled.div`
background-color:white;
border-radius:5px;
width:320px;
height:186px;
margin:30px;
line-height:0.2;
padding:5px;
padding-top:25px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;


`

const AboutDoctor = (props) => {

    const {id,name,image,experience,education,fee,circleFees,languages,hospital} = props.item

    let arr1 = [];
    const handleClick=(e)=>{
;
  
      arr1.push(e)
      localStorage.setItem("DoctorsData",JSON.stringify(e))
    }
  return (
      <> 
        <Link to={`/DoctorSpecialities/${id}`} style={{textDecorationLine : "none"}} >
            <DoctorDiv  style={{padding:"10px",margin:"10px 20px 110px 30px"}} key={id} >
              <SubDiv onClick={()=>handleClick(props.item)}>
              <img src={image} style={{height:"68px",width:"68px",borderRadius:"50%"}} alt="" /> 
              <DetailsDiv >
                  <div style={{color:"#02475B",fontSize:"16px"}}>{name}</div>
                  <div style={{color:"#0087BA"}}>
                  <h4>{experience} YRS EXP.</h4>
                  <p style={{color:"#658F9B"}}>{education}</p>
                  <p style={{color:"#658F9B"}}> You Pay |<b style={{color:"#FC9916",fontWeight:"600",fontSize:"10px"}}>CIRCLE MEMBER PAYS</b>  </p>
                  <b style={{marginLeft:"14px"}}>₹ {fee}</b> | <b></b>
                  <b style={{color:"#FC9916",fontWeight:"100"}}>{circleFees}</b>

                  </div>
               
              </DetailsDiv>
              </SubDiv>
              <span><img src='https://newassets.apollo247.com/images/language.svg'/></span>
              <span style={{color:"#658F9B"}}>{languages}</span><p></p>
              <span><img src="https://newassets.apollo247.com/images/new-location.svg"/></span>
              <span style={{color:"#658F9B",marginBottom:"10px"}}>{hospital}</span>  
              <div style={{marginTop:"10px",display:"flex"}}>
              <button style={{marginRight:"5px",backgroundColor:"#FECF62",border:"none",marginRight:"2px",marginLeft:"-5px",borderBottomLeftRadius: "5px"}}> <img src="https://newassets.apollo247.com/images/videoConsult.svg" style={{marginRight:"10px",marginLeft:"10px"}} alt="" />Book Video Consult</button>
              <button style={{marginRight:"5px",backgroundColor:"#C6EAFE",border:"none",marginRight:"-8px",borderBottomRightRadius: "5px"}}><img src="https://newassets.apollo247.com/images/hospitalVisit.svg" style={{marginRight:"10px",marginLeft:"9px"}} alt="" />Book Hospital Visit</button>

              </div>
             
          </DoctorDiv>
 
          </Link>


      </>
   
  )
}

 export default AboutDoctor