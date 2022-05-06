// import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// style for Flex
// const Flex = styled.div``;
// var data 
// add style for button
// export const Button = styled.button``;

export const Details = () => {

   

  const [data,setData] = useState("")
  // console.log(data) 
  const {id} =  useParams() ;
  

  
  useEffect(() => 
  {

      // make a GET request to http://localhost:8080/books/${id}`
    // use useParams to get the id
    const getData = async()=>{

    try{

      let res = await fetch(`http://localhost:8080/Data1/${id}`)

      let data1 = await res.json() ;
            
      console.log("Prabhu");
      console.log(data1) 

      console.log("hi");
      setData(data1) ;
      console.log(data1) 
    }
    catch(e)
    {
      console.log(e)
    }
  }
  getData();
  },[]);



   
  const handleClick=async(item)=>{
    let res = await fetch("http://localhost:8080/CartData",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(item)
      
    })
 
    console.log(data)
  }



  return (
    <>
      {/* added basic data you can add more and make a good UI around it */}
       (
        <>
          <div key={id} >
            <div id="page_details" style={{display:"flex"}}>
              <div  id ="details" style={{display:"flex"}}>
                  <div id="details_div1">
                    <img id="details_img"
                        data-testid="book-image-url"
                        src={data.url}
                        alt={data.Name}
                      />
                  </div>

                  <div id="details_div2">
                      <h2 style={{color:"rgb(13, 77, 104)",paddingLeft:"20px",padding:"10px" }}>{data.Name}</h2>
                      <p style={{color:"rgb(13, 77, 104)" ,paddingLeft:"20px",fontSize:"18px"}}>Manufacturer :</p>
                      <p style={{color:"rgb(13, 77, 104)" ,paddingLeft:"24px"}}> <b> {data.text}</b></p>
                      <p style={{color:"rgb(13, 77, 104)" ,paddingLeft:"20px",fontSize:"18px"}}>Conumer Type: </p>
                      <p style={{color:"rgb(13, 77, 104)" ,paddingLeft:"24px"}}> <b> {data.Consume}</b></p>
                      <p style={{color:"rgb(13, 77, 104)" ,paddingLeft:"40px",paddingRight:"40px",fontSize:"16px",padding:"5px",backgroundColor:"skyblue" ,width:"70px"}}>In Stock</p>

                  </div>

            
               </div>
              <div id="right_half">
              <div id="price">

              <h2 style={{color:"rgb(13, 77, 104)" ,paddingLeft:"30px"}}>Price : Rs. { data.Cost}   </h2> <p style={{color:"rgb(13, 77, 104)" ,paddingLeft:"30px"}}>{data.Off}% off</p>
            <h3>Provide Delivary Location</h3> 

          <p style={{color:"rgb(13, 77, 104)",padding:"5px",marginLeft:"20px",paddingLeft:"30px",border:"1px solid skyblue", width:"110px" }}> item
            <select style={{color:"rgb(13, 77, 104)" ,paddingLeft:"30px"}}> 
            
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>

            </select></p>     
            <button id="button1" onClick={()=>handleClick()}>Add To Cart</button>
 
            <div>
             
            </div>
           
              </div>

            
              </div>
            </div>


            <div style={{display:"flex"}}>
                <div id="secondDetails_Div">
                    <h1 style={{color:"rgb(13, 77, 104)",paddingLeft:"20px" }}>Product Details</h1>
                    <h3>Description</h3>
                    <hr style={{paddingLeft:"10px"}} />
                    <p style={{color:"rgb(13, 77, 104)",paddingLeft:"30px" }}>{data.Description}</p>
                    <h3>Key Benifits</h3>
                    <hr style={{paddingLeft:"10px"}} />
                    <p style={{color:"rgb(13, 77, 104)" ,paddingLeft:"30px"}}>{data.Benefits}</p>
                    <h3>Key Ingredients</h3>
                    <hr style={{paddingLeft:"10px"}} />
                    <p style={{color:"rgb(13, 77, 104)" ,paddingLeft:"30px"}}>{data.Ingredients}</p>
                    <br />
                    <hr style={{paddingLeft:"10px"}} />
                    <p style={{color:"rgb(13, 77, 104)" ,fontSize:"24px",paddingLeft:"30px"}}>Other Information :</p>
                    <p style={{color:"rgb(13, 77, 104)",paddingLeft:"30px" }}> This Item is  <b>{data.Return}</b></p>
                    <p style={{color:"rgb(13, 77, 104)" ,paddingLeft:"30px"}}>  Expiry date : <b>{data.Expire}</b></p>
                    <br />
                    <hr style={{paddingLeft:"10px"}} />
                </div>
                <div>

                <div id="offer" style={{border:"1px solid  rgb(13, 77, 104) ",padding:"20px",marginTop:"20px"}}>
                      <p>Save extra with 3 offers</p>
                      <hr />
                      <p>PHARMA20: Flat 20% OFF on medicines & Apollo Brand Products worth Rs. 300 & above</p>
                  
                      <hr />
                      <p>FIRST3: Flat 25% OFF on first 3 medicine orders worth Rs. 1000 & above</p>
                      <hr />
                      <p>SUPER30: Up to 30% Savings (Flat 20% OFF + Rs.120 Health Credits with a limited period validity) on online medicine orders worth Rs.1200 & above</p>
                      </div>
                </div>
             </div>
         </div>
          {/* <Link to={`/books/${data.id}/edit`}>
            <Button>Edit</Button>
          </Link> */}
        </>
      )
    </>
  );
};


// "id": "m0VzhKNpVnt1V4rKAvlcC",
// "url": "https://newassets.apollo247.com/pub/media/catalog/product/s/e/seb0115.jpg",
// "Name": "Sebamed Baby Powder, 200 gm",
// "text": "USV LTD",
// "Consume": "TOPICAL",
// "Return": "Not Returnable.",
// "Expire": "Sep-2022",
// "Ingredients": "Allantoin, Talc, Zinc Oxide, Olea Europaea Fruit Oil.",
// "Benefits": "For delicate skin Reduces the effects of rubbing and chafing Contains olive oil that soothes skin and Allantoin that reduced irritation",
// "Description": "Sebamed Baby Powder is a talc powder for babies that protects their skin from dryness",
// "Cost": 587.00,
// "Off": "11",
// "amount" :1