import React from 'react';
import styled from 'styled-components';
import {RiArrowUpSLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';
const MainDiv=styled.div`
color: #02475b;
display:flex;
width: 100%;
height: auto;
gap:30px;
font-size:14px;
`
const LeftDiv=styled.div`
width:716px;
height:727px;
`
const RightDiv=styled.div`
width:358px;
height:727px;
`
const Payment = () => {

    let cost = +(localStorage.getItem("Cost"));
  
   function One(){
       alert("Payment Sucessful")
   }
     
  return (
    <>
        <div >
            <h2>PAYMENTS</h2>
        </div>
        <hr />
        <MainDiv >
            <LeftDiv style={{marginLeft:"100px"}}>
                <div style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div style={{display: 'flex',width: '100%',justifyContent:'space-between',border: '1px solid lightgray',backgroundColor:'#f0f8ff',paddingRight:'10px',paddingLeft:'10px',boxSizing:'border-box'}}>
                        <p >CREDIT/DEBIT CARD PAYMENTS</p>
                        <RiArrowUpSLine style={{marginTop:'10px'}}/>
                    </div>
                    <div style={{display: 'flex',justifyContent:'space-Between',border: '1px solid lightgray',backgroundColor:'#f0f8ff',paddingRight:'10px',paddingLeft:'10px',boxSizing:'border-box'}}>
                        <img src="https://newassets.apollo247.com/images/card.svg" alt="" />
                        <p style={{marginRight:'64%'}}>Pay With a New Card</p>
                        <img src="	https://newassets.apollo247.com/images/tick.png" alt="" style={{borderRadius:'50%',backgroundColor:'#00b38e',height:'15px',width:'17px',marginTop:'12px',}}/>
                    </div>

                    <div style={{lineHeight:'36px',paddingTop:'20px',paddingLeft:'30px',paddingBottom:'10px'}}>
                        <label>Card Name</label><br/>
                        <input type="text" style={{width:'90%',outline:'none',textarea:"focus",borderColor:'#00b38e',borderLeft:'none',borderRight:'none',borderTop:'none',}} /><br/>

                        <label >Full Name</label><br/>
                        <input type="text" placeholder='Name on Card' style={{width:'90%',outline:'none',textarea:"focus",borderColor:'#00b38e',borderLeft:'none',borderRight:'none',borderTop:'none',}} /><br/>

                        <div style={{display:'flex'}}>   
                            <div style={{marginRight:'50px'}}>
                                <label >Valid Through</label><br/>
                                <input type="date" placeholder='MM / YY' style={{width:'100%',outline:'none',textarea:"focus",borderColor:'#00b38e',borderLeft:'none',borderRight:'none',borderTop:'none',}} />
                            </div>

                           <div>
                                <label >CVV</label><br/>
                                <input type="text" placeholder='***' style={{width:'100%',outline:'none',textarea:"focus",borderColor:'#00b38e',borderLeft:'none',borderRight:'none',borderTop:'none',}} /><br/>
                           </div>

                           <div style={{marginLeft:'28%'}}>
                            <Link to="/pay">
                               <button  onClick={()=>One()} style={{height:'45px',width:'90px',backgroundColor:'#fcb716',color:'white',fontWeight:'bold',border:'none',borderRadius:'7px',marginTop:'10px'}}>Pay ₹{}</button>
                               </Link>
                           </div>
                          
                        </div>
                        <div>
                               <input type="checkbox"style={{fontSize:'20px'}} />
                               <span style={{fontSize:'14px'}}>Save this card for faster checkout</span>
                        </div>
                    </div>


                </div>




                <div style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",marginTop:'20px'}}>
                    <div style={{display: 'flex',width: '100%',justifyContent:'space-between',border: '1px solid lightgray',backgroundColor:'#f0f8ff',paddingRight:'10px',paddingLeft:'10px',boxSizing:'border-box'}}>
                        <p >UPI</p>
                        <RiArrowUpSLine style={{marginTop:'10px'}}/>
                    </div>
                    <div style={{lineHeight:'36px',paddingTop:'20px',paddingLeft:'30px',paddingBottom:'20px'}}>
                        <label>ENTER YOUR UPI ID</label><br/>
                       <div style={{display: 'flex'}}>
                            <input type="text" style={{width:'70%',focus:'none',height:'34px',outline:'none',textarea:"focus",border:'2px solid #00b38e'}} /><br/>
                     <Link to="/pay">
                            <button  onClick={()=>One()}  style={{height:'42px',width:'120px',backgroundColor:'#fcb716',color:'white',fontWeight:'bold',border:'none',fontSize:'13px',borderRadius:'7px',marginLeft:'15px',marginTop:'10px',marginTop:'-3px'}}>VERIFY AND PAY</button>
                            </Link>
                       </div>
                        <p>example:@ybl,@paytm,@upi etc.</p>
                    </div>
                </div>



                <div style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",marginTop:'20px'}}>
                    <div style={{display: 'flex',width: '100%',justifyContent:'space-between',border: '1px solid lightgray',backgroundColor:'#f0f8ff',paddingRight:'10px',paddingLeft:'10px',boxSizing:'border-box'}}>
                        <p >WALLETS</p>
                        <RiArrowUpSLine style={{marginTop:'10px'}}/>
                    </div>
                    <div style={{lineHeight:'36px',paddingTop:'20px',paddingLeft:'30px',paddingBottom:'10px'}}>
                       <div style={{display: 'flex'}}>
                            <img src="https://assets.apollo247.com/images/payments/paytm.png"  alt="" style={{width:"50px",height:"26px"}}/>

                            <div style={{lineHeight:'0px',marginTop:'-10px',marginLeft:'10px'}} >
                                <p style={{fontSize:'15px',fontWeight:'bold'}}>Paytm Wallet & Postpaid</p>
                                <div style={{display: 'flex',marginTop: '-10px'}}>
                                    <img src="https://newassets.apollo247.com/images/ic_offers.svg" alt="" style={{marginRight:'5px'}}/>
                                    <p style={{color:'green',cursor:'pointer',fontSize:'15px'}}>Get assured cashback of ₹30 to ₹300 on transaction above ₹899</p>
                                    
                                    <p style={{fontSize:'14px',cursor:'pointer',fontWeight:'bold',color:'orange',marginLeft:'60px',marginTop:'0px'}}>PAY NOW</p>
                                </div>
                            </div>
                       </div>
                    </div>

                    <hr />

                    <div style={{lineHeight:'36px',paddingTop:'20px',paddingLeft:'30px',paddingBottom:'10px'}}>
                       <div style={{display: 'flex'}}>
                            <img src="https://prodaphstorage.blob.core.windows.net/paymentlogos/amazonpay.png"  alt="" style={{width:"36px",height:"7px"}}/>

                            <div style={{lineHeight:'0px',marginTop:'-10px',marginLeft:'10px',display: 'flex'}} >
                                <p style={{fontSize:'15px',fontWeight:'bold',marginTop:'10px'}}>Amazon Pay</p>
                                     <p style={{fontSize:'14px',cursor:'pointer',fontWeight:'bold',marginLeft:'450px',color:'orange',marginTop:'7px'}}>PAY NOW</p>
                            </div>
                       </div>
                    </div>
                </div>
            </LeftDiv>

            <RightDiv>

                <h3>TOTAL CHARGES</h3>
                <div style={{border:'1px solid lightgray',borderRadius:'4px'}}>
                    <div style={{display: 'flex',justifyContent: 'space-between',padding:'0px 15px'}}>
                        <p>SubTotal</p>
                        <p>Rs.{cost}.00</p>
                    </div>
                    <hr  style={{width: '90%'}}/>
                    <div style={{display: 'flex',justifyContent: 'space-between',padding:'15px 15px'}}>
                        <b>To pay</b>
                        <b>Rs.{cost+20}</b>
                    </div>
                </div>
                

                <div>
                    <div style={{display: 'flex',marginTop: '20px'}}>
                        <img src="https://newassets.apollo247.com/images/ic_offers.svg" alt=""  />
                        <p style={{marginLeft:'5px'}}>BANK OFFERS</p>
                    </div>

                    <div style={{border:'1px solid lightgray',borderRadius:'4px'}}>
                       
                        <div style={{display: 'flex',justifyContent: 'space-between',padding:'0px 15px'}}>
                            <img src="https://newassets.apollo247.com/images/payment_offer_icons/PAYTM.png" alt="" width='20' height='20' style={{marginTop:'20px'}} />
                            <p style={{fontSize:'14px',fontWeight:'bold',marginTop:'10px',marginLeft:'3px'}}>Assured cashback of ₹30 to ₹300 on Paytm wallet & postpaid</p>
                        </div>
                        <p style={{marginTop:'-10px',marginLeft:'10px'}}>Get assured cashback of ₹30 to ₹300 on transaction above ₹899</p>
                        <p style={{color:'orange',marginTop:'-10px',marginLeft:'10px',cursor:'pointer'}}>T&C Apply</p>
                        
                        
                        <hr  style={{width: '90%'}}/>

                        <div style={{display: 'flex',padding:'0px 15px'}}>
                            <img src="https://newassets.apollo247.com/images/payment_offer_icons/MERCHANT.png" alt="" width='20' height='20' style={{marginTop:'10px'}} />
                            <p style={{fontSize:'14px',fontWeight:'bold',marginTop:'10px',marginLeft:'3px'}}>15% instant off on using Postpe Card</p>
                        </div>
                        <p style={{marginTop:'-10px',marginLeft:'10px'}}>15% instant off upto ₹200 on txn above ₹999</p>
                        <p style={{color:'orange',marginTop:'-10px',marginLeft:'10px',cursor:'pointer'}}>T&C Apply</p>
                    </div>
                </div>
            </RightDiv>
        </MainDiv>
        
        
    </>
  )
}

export default Payment