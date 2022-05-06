import React,{useEffect,useState} from 'react'
import Slider from '../Slider/Slider'
import "./Pharmacy.css"

// import Navbar from '../Navbar/Navbar'
// import Data from "../Data.json"
// import Data1 from "../Data.json"
import Cards from './Card'
// import Data2 from "../Data.json"
import {Link} from "react-router-dom"
// import ItemDetails from './ItemDetails'
const Pharmacy = () => {

  const [data,setData]=useState([])

  const getData=async()=>{
    let res = await fetch("http://localhost:8080/Data")
    let data=await res.json()
    setData(data)
    console.log(data)
  }
  useEffect(()=>{ 
    getData()
  },[])
  

  const [data1,setData1]=useState([])

  const getData1=async()=>{
    let res = await fetch("http://localhost:8080/Data1")
    let data1=await res.json()
    setData1(data1)
    console.log(data1)
  }

  useEffect(()=>{ 
    getData1()
  },[])
  
  // const [data2,setData2]=useState([])
  
  // const getData2=async()=>{
  //   let res = await fetch("http://localhost:8080/Data2")
  //   let data2=await res.json()
  //   setData2(data2)
  //   console.log(data2)
  // }

  // useEffect(()=>{ 
  //   getData2()
  // },[])


 
  const handleClick=async(item)=>{
    let res = await fetch("http://localhost:8080/CartData",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(item)
    })
  }









  //  console.log(Data)
  // let data = Data.Data;
  // // let data1 = Data1.Data1;
  // let data2 = Data2.Data2;
  // console.log(data)
  return (
    <div id="Pharmacy_Main_Div">
    {/* <Navbar/> */}
      <div id="Navbar"> </div>

    <div id='Whatsapp'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbS4jsxTNvrKsQd7EpvMWhyDmy5w0NBpSmBhUCUpkFWNsdVymiKALaEsyFNtZM8lzfg0k&usqp=CAU" alt="" />
    </div>

     <div id="slider">
        <div style={{height:"80%", width :"65%"}}>
        <div >
       <input type="text"  className='placeholder' placeholder='Search Meds Brand And More'/> 
      </div>
     
        <Slider/></div>
      <div id='slider_right'>
      <div id="special_offer">  <p>Special Offer</p></div>
        <div if="order1">
            <p>Place your order via prescriptions</p>
            <button id="btn1">UPLOAD</button>
            <img src="https://newassets.apollo247.com/images/ic_prescription_pad.svg" alt="" />

        </div>
   
      </div>
     
     </div>
     <h3>SHOP BY HEALTH CONDITIONS</h3>
     <hr />
     <div className="divflex">
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png" alt="" /> <p>COVID Care</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png" alt="" /><p>COVID Protection</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png" alt="" /><p>Diabetes Care</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg" alt="" /><p>Liver Care</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg" alt="" /><p>Cardiac</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png" alt="" /><p>Pain Releif</p></div>
         {/* <div className='flex'><img src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png" alt="" /><p>Oral Care</p></div> */}
     </div>
      
<h3>SEBAMED UP TO 50 PERCENT OFF</h3>
<hr />
    <div id="o">
    {
         data.map((item,index)=>{
           return (
             <>
     
               {/* <Cards item={item} handleClick={handleClick} /> */}
               <div id="data">
          <Link style={{ textDecoration: "none" }} to={`/pharmacy/${item.id}`}>
            <div id="imgdiv">
              <div style={{ display: "flex" }}>
                <img src={item.url} alt="" />
                <div
                  style={{
                    height: "35px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    width: "35px",
                    backgroundColor: "#ff960d",
                    color: "white",
                  }}
                >
                  -{item.Off}%
                </div>
              </div>

              <hr />
              <p id="p1">{item.Name}</p>
              <p id="p2">MRP Rs. {item.Cost}</p>
            </div>
          </Link>
         <div> <button className='btn' onClick={()=>handleClick(item)}>Add To Cart</button></div>
         
          <div>
        
            {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
          </div>
        </div>
             
             
             </>
           )
         })
      }
    </div>
 
    <h3>SUMMER ESSENTIALS</h3>

<hr />
 
    <div id="o">
    {
      data1.map((item)=>{
           return (
             <>
        
               {/* <Cards item={item} handleClick={handleClick} /> */}
               <div id="data">
          <Link style={{ textDecoration: "none" }} to={`/pharmacy/${item.id}`}>
            <div id="imgdiv">
              <div style={{ display: "flex" }}>
                <img src={item.url} alt="" />
                <div
                  style={{
                    height: "35px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    width: "35px",
                    backgroundColor: "#ff960d",
                    color: "white",
                  }}
                >
                  -{item.Off}%
                </div>
              </div>

              <hr />
              <p id="p1">{item.Name}</p>
              <p id="p2">MRP Rs. {item.Cost}</p>
            </div>
          </Link>
            <div> <button className='btn' onClick={()=>handleClick(item)}>Add To Cart</button></div>
          <div>
        
            {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
          </div>
        </div>
             
             </>
           )
         })
      }
    </div>


    <h3>SUMMER ESSENTIALS</h3>
    <hr />
    {/* <div id="o">
    {
         data2.map((el,index)=>{
           return (
             <>
               <div id="data">
                    <div id="imgdiv">
                        <img src={el.url} alt="" />
                        <hr />
                        <p>{el.Name}</p>
                       <p id='p2'> Rs. {el.Cost}</p>
                    </div>
                    
                    <div>
                    <button>Add To Cart</button>
                    </div>
                 
               </div>
             </>
           )
         })
      }
    </div> */}
    <div id="o">
    {
         data.map((item)=>{
           return (
             <>
        
             
               {/* <Cards item={item} handleClick={handleClick} /> */}
               <div id="data">
          <Link style={{ textDecoration: "none" }} to={`/pharmacy/${item.id}`}>
            <div id="imgdiv">
              <div style={{ display: "flex" }}>
                <img src={item.url} alt="" />
                <div
                  style={{
                    height: "35px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    width: "35px",
                    backgroundColor: "#ff960d",
                    color: "white",
                  }}
                >
                  -{item.Off}%
                </div>
              </div>

              <hr />
              <p id="p1">{item.Name}</p>
              <p id="p2">MRP Rs. {item.Cost}</p>
            </div>
          </Link>
            <div> <button className='btn' onClick={()=>handleClick(item)}>Add To Cart</button></div>
          <div>
        
            {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
          </div>
        </div>
             
             
             </>
           )
         })
      }
    </div>
    
    <h3>SHOP BY CATEGORY</h3>
<hr />
    <div className="divflex">
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/catalog/category/baby_care_22oct.png" alt="" /> <p>COVID Care</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/catalog/category/health_and_nutrition_22oct.png" alt="" /><p>COVID Protection</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/catalog/category/personal_care_22oct.png" alt="" /><p>Diabetes Care</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg" alt="" /><p>Liver Care</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/catalog/category/health_devices_22oct.png" alt="" /><p>Cardiac</p></div>
         <div className='flex'><img src="https://newassets.apollo247.com/pub/media/catalog/category/home_essentials_22oct.png" alt="" /><p>Pain Releif</p></div>
         {/* <div className='flex'><img src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png" alt="" /><p>Oral Care</p></div> */}
     </div>
      

    <h3> EXPLORE - POPULAR PRODUCTS</h3>
<hr />

     <div id="popular_products"> 
 
     <img src="https://newassets.apollo247.com/pub/media/wysiwyg/home/247_women_care_dod1.jpg" alt="" />
     <img src="https://newassets.apollo247.com/pub/media/wysiwyg/home/pr_dod2_247.jpg" alt="" />
     <img src="https://newassets.apollo247.com/pub/media/wysiwyg/home/247_sunscreen_dod3.jpg" alt="" />
     </div>



     <div id="popular_products1"> 
     <div id="left">
     <div>       <p>ORDER MEDICINE ONLINE FROM</p>
     <hr />
       <p>Genuine medicines and essentials delivered in a jiffy!</p></div>

       <img src="https://newassets.apollo247.com/images/apollopharmacy/pharmacyLogoColor.svg" alt="" />
     </div>
     <div id="right">

      <p>India's Most Trusted Pharmacy Chain</p>
      <div>  <img src="https://newassets.apollo247.com/images/apollopharmacy/storeIconDark.svg" alt="" /><h5>4500+ stores</h5> 
      <h4>Locate your store</h4></div>

    
     </div>
 
     </div>

   <h3>  HALF PRICE STORE</h3>
     <hr />

{/* 
     <div id="o">
    {
         data1.map((el,index)=>{
           return (
             <>
               <div id="data">
                    <div id="imgdiv">
                        <img src={el.url} alt="" />
                        <hr />
                        <p>{el.Name}</p>
                       <p id='p2'> Rs. {el.Cost}</p>
                      
                    </div>
                    
                    <div>
                    <button>Add To Cart</button>
                    </div>
                 
               </div>
             </>
           )
         })
      }
    </div> */}
    <div id="o">
    {
         data1.map((item,index)=>{
           return (
             <>
        
               {/* <Cards item={item} handleClick={handleClick} /> */}
               <div id="data">
          <Link style={{ textDecoration: "none" }} to={`/pharmacy/${item.id}`}>
            <div id="imgdiv">
              <div style={{ display: "flex" }}>
                <img src={item.url} alt="" />
                <div
                  style={{
                    height: "35px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    width: "35px",
                    backgroundColor: "#ff960d",
                    color: "white",
                  }}
                >
                  -{item.Off}%
                </div>
              </div>

              <hr />
              <p id="p1">{item.Name}</p>
              <p id="p2">MRP Rs. {item.Cost}</p>
            </div>
          </Link>
            <div> <button className='btn' onClick={()=>handleClick(item)}>Add To Cart</button></div>
          <div>
        
            {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
          </div>
        </div>
             
             
             </>
           )
         })
      }
    </div>

    <h3>Shop By Brands</h3>
    <hr />
    <div id='brands'>
    <div><img src="https://newassets.apollo247.com/pub/media/ves/brand/GNCn.jpg" alt="" /></div>
    <div><img src="https://newassets.apollo247.com/pub/media/ves/brand/glucond.jpg" alt="" /></div>
    <div><img src="https://newassets.apollo247.com/pub/media/ves/brand/accu_check.jpg" alt="" /></div>
    <div><img src="https://newassets.apollo247.com/pub/media/ves/brand/colgate.png" alt="" /></div>
    <div><img src="https://newassets.apollo247.com/pub/media/ves/brand/sebamed.jpg" alt="" /></div>
    <div><img src="https://newassets.apollo247.com/pub/media/ves/brand/Inlife-Registered-Logo.jpg" alt="" /></div>



    </div>

    <div id="popular_products1"> 
     <div id="left"></div>
     <div id="right"></div>
 
     </div>
    </div>
  )
}

export default Pharmacy;
