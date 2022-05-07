import React, { useState } from 'react'
import styled  from 'styled-components';
import './Doctor.css'
import posterData from '../posterData.json';
import { BiSearch } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md';


const TextButton = styled.button`
height:36px;
width:140px;
box-Shadow:0 2px 4px 0 rgb(0 0 0 / 20%);
color:#02475B;
margin-Right:10px;
`
export const LineDiv = styled.div`
height:20px;
border-Bottom:1px solid #EEEEEE ;
margin-Bottom:20px;
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

const Doctor = () => {
    const [data,setData] =useState(posterData.posterData);
    const [inputToggle,setInputToggle]=useState(false);
    
    const showthat =()=>{
        setInputToggle(true);
    }
  return (
    <div className="main">
        <hr />

        <div id="above">
            <div id="first">
                <div id="consultation">
                <h3>Online Doctor Consultation</h3>
                <div id="searchbar">
                    <BiSearch style={{color: 'green'}}/>
                    <input type="text" id="searchDoctors" placeholder="Search doctors or specialities" style={{border:"none",textarea:"focus",outline:"none"}}/>
                </div>    
                <p><b>Popular Cities</b></p>
                <span id="cities">
                    <button>New Delhi</button>
                    <button>Hyderabad</button>
                    <button>Chennai</button>
                    <button>Kolkata</button>
                    <button>Mumbai</button>
                    <button>Bangalore</button>
                </span>
            </div>
            
            <p className="para"><b>Start your care now by choosing from over 4000 doctors and 58 specialities</b></p>
            <div id="addvertise">
                <img src="https://newassets.apollo247.com/cms/2022-04/One-Tap_0.gif" alt="Consult an Apollo Doctor"/>
            </div>

            <h3>TOP SPECIALITIES</h3>
            <hr />
            <div id="consult_cards">
                <div className="subCard">
                    <h3>Covid Consultation</h3>
                    <img src="https://prodaphstorage.blob.core.windows.net/specialties/2ffe13c1-efa3-4361-9dde-afafb53d4553.jpg" className="consult_card_img"/>
                    <h4>Treatment of Covid-19</h4>
                    <h5>Cough, Fever, Breathlessness</h5>
                </div>
                <div className="subCard">
                    <h3>Dermatology</h3>
                    <img src="	https://prodaphstorage.blob.core.windows.net/specialties/ee249e8a-950a-489c-8a33-8846889831f5.jpg" className="consult_card_img"/>
                    <h4>Specialists for skin and hair treatments</h4>
                    <h5>Rashes, Pimples, Acne, Hairfall, Dandruff</h5>
                </div>
                <div className="subCard">
                    <h3>General Physician/ Internal Medicine</h3>
                    <img src="https://newassets.apollo247.com/specialties/ic_general_medicine.png" className="consult_card_img"/>
                    <h4>Managing acute medical conditions</h4>
                    <h5>Typhois, Abdominal Pain, Migraine, Infections</h5>
                </div>
                <div className="subCard">
                    <h3>Paediatrics</h3>
                    <img src="https://newassets.apollo247.com/specialties/ic_paediatrics.png" className="consult_card_img"/>
                    <h4>Specialists to care and treat children</h4>
                    <h5>Constipation, Puberty, Nutrition, Autism</h5>
                </div>
            </div>
            
            <h2>OTHER SPECIALITIES</h2>
                <hr></hr>
                <div id='Boxes'>
                            {data.map((elm)=>(
                               <div className='outside-flex'>
                                <div>
                                    <img src={elm.img} alt="" />
                                </div>
                                <div>
                                    <div className="inside-flex">
                                        <div className="inside-text">
                                            <h5>{elm.p1}</h5>
                                            <p >{elm.p2}</p>
                                        </div>
                                        <div>
                                                <MdKeyboardArrowRight  className='iconSetup'/>
                                        </div>
                                    </div>
                                    <hr />
                                    <h5>{elm.p3}</h5>
                                </div>
                                
                               </div>

                                
                            ))}
                </div>
             </div>

             
            {/* first section get over  */}


            <RightSideDiv>
        <div style={{color:"#01667C",lineHeight:"1.7"}}>
            <h3 >Why Apollo247</h3>
            <ul>
                <li>Round-the-clock doctor availability</li>
                <li>Broad range of Specialities</li>
                <li>Detailed digital prescriptions</li>
                <li>Order medicines & tests online</li>
                <li>Digitised health records</li>
            </ul>
        </div>
        <div  style={{color:"#01667C"}}>
                <h3>How Doctor Consultation Works</h3>
                <TextButton style={{border:"1px solid #00B38E",borderRadius:"6px"}}><span>Text/Audio/Video</span></TextButton>
                <TextButton style={{border:"none",borderRadius:"6px"}}><span>Meet in Person</span></TextButton>
        </div>
        <div style={{display:"flex",marginTop:"20px"}}>
                <div style={{marginRight:"10px"}}>
                    <b><img src="https://newassets.apollo247.com/images/video-calling.svg" alt="" /></b>
                </div>
                <div>
                    <b style={{color:"#0589BB"}}>HOW TO CONSULT A DOCTOR <br /> ONLINE VIA <br /> TEXT/AUDIO/VIDEO?</b>
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
        </div>

        
        <div id="below">
            <h3>Apollo 24|7 Specialities - Expertise You Can Trust</h3>
            <p>A medical specialty is a specific area of medical practice that mainly focuses on a defined set of diseases, patients, philosophy, or skills. Examples include Paediatrics, Dermatology, Psychiatry, Gynaecology, and more. </p>
            <p>Apollo 24|7 offers advanced services for a range of medical specialities, including:</p>
            <ul>
                <li><b>Dermatology - </b>A specialised branch of medicine that focuses on hair, nails, and skin-related disorders. Dermatology also encompasses conditions that affect the thin lining of your mouth, eyelids, and nose.</li>
                <li><b>Obstetrics and Gynaecology - </b>Two major medical specialities that focus on women’s reproductive health. Obstetrics involves care during pregnancy, childbirth and after-delivery, while gynaecology specialises in issues related to women’s reproductive health.</li>
                <li><b>General Physician/Internal Medicine - </b>General Physicians are highly experienced medical doctors who provide a broad range of non-surgical medical and health care to their patients. An internal medicine physician is a specified medical doctor who is highly proficient in internal medicine.</li>
                <li><b>Paediatrics - </b>It majorly focuses on the health and medical care of children, infants, and young adults.</li>
                <li><b>Psychiatry - </b>A specialised area of medicine that focuses majorly on the detection, treatment, and prevention of emotional, behavioural, and mental health disorders. </li>
                <li><b>Dermatology - </b>A specialised branch of medicine that focuses on hair, nails, and skin-related disorders. Dermatology also encompasses conditions that affect the thin lining of your mouth, eyelids, and nose.</li>
                <li><b>Obstetrics and Gynaecology - </b>Two major medical specialities that focus on women’s reproductive health. Obstetrics involves care during pregnancy, childbirth and after-delivery, while gynaecology specialises in issues related to women’s reproductive health.</li>
                <li><b>General Physician/Internal Medicine - </b>General Physicians are highly experienced medical doctors who provide a broad range of non-surgical medical and health care to their patients. An internal medicine physician is a specified medical doctor who is highly proficient in internal medicine.</li>
                <li><b>Paediatrics - </b>It majorly focuses on the health and medical care of children, infants, and young adults.</li>
                <li><b>Psychiatry - </b>A specialised area of medicine that focuses majorly on the detection, treatment, and prevention of emotional, behavioural, and mental health disorders. </li>
                <li><b>Paediatrics - </b>It majorly focuses on the health and medical care of children, infants, and young adults.</li>
                <li><b>Psychiatry - </b>A specialised area of medicine that focuses majorly on the detection, treatment, and prevention of emotional, behavioural, and mental health disorders. </li>
            </ul>
            <h3>Why Choose Online Consultation</h3>
            <p>There are several ways to reach out to a doctor without the need to visit a hospital or clinic, all thanks to technology. With the online facility available, doctor consultations have become easier, which can help you get the right health care. </p>
            <p>Benefits for choosing Apollo 24|7’s online doctor consultations:</p>
            <ul>
                <li>Highly-qualified doctors are available 24x7 for you</li>
                <li>Emergency medical services are available</li>
                <li>Get online consultations within 15 minutes</li>
                <li>Affordable rates and personalised solutions</li>
                <li>Instant online consultations anytime, anywhere</li>
            </ul>
            <h3>When to Consult a Doctor</h3>
            <p>If your health issues are complicated and your general practitioner feels that it needs immediate medical attention from a specialised doctor, you may be recommended to one. You can also get an online consultation with a medical specialist if you aren’t satisfied with the results.</p>
            <h3>How to Consult a Doctor?</h3>
            <p>Consult a doctor online with Apollo 24|7</p>
            <p>Prioritise your health by choosing from 100+ medical specialities and 4000+ doctors online. Avail personalised healthcare solutions for any health concern with imperative online doctor consultations at Apollo 24|7.</p>
            <p>Steps to book an online doctor consultation:</p>
            <ul>
                <li>Choose the doctor</li>
                <li>Book your appointment</li>
                <li>Make the payment</li>
                <li>Be available in the consultation room on time</li>
                <li>Get your doctor's note instantly</li>
                <li>Constant follow-ups via text till next 7 days</li>
            </ul>
            <p>How to consult a doctor offline through the Apollo 24|7 app or website?</p>
            <ul>
                <li>Choose the medical doctor</li>
                <li>Book your appointment</li>
                <li>Visit the medical doctor at clinic or hospital</li>
                <li>Make the payment</li>
                <li>Get your doctor's note instantly</li>
            </ul>
        </div>


        <div id="faq-main">
            <h2 style={{color:'#0e5d74',marginLeft: '1%'}}>Frequently Asked Questions</h2>
            <div className="faq">
                    <div className="question">
                            <h3>What is an online doctor consultation or online medical consultation?</h3>
                            <svg width="15" height="10" viewBox="0 0 42 25">
                                <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                            </svg>
                    </div> 
                    <div className="answer">
                        <p>When you speak to a doctor about your health concerns through an audio/video/ chat, it is known as an online doctor consultation or online medical consultation. This is a good alternative for times when you cannot visit a doctor physically at the clinic or hospital. An online doctor consultation works the same way as a physical consultation where you get a prescription after the consultation is complete. Some of the benefits of an online medical consultation at Apollo 24/7 are that you can consult a doctor at the convenience of your home and can order the prescribed medicines by using the ‘Order Medicines’ option.</p>
                    </div>
            </div>




            <div className="faq">
                <div className="question">
                        <h3>Do you provide online doctor consultation for emergencies?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                </div> 
                <div className="answer">
                    <p>No. We do not recommend or provide online consultations for emergencies. However, our emergency medical services are available round-the-clock which can be accessed by calling 1066 or clicking the ‘Emergency’ tab on the homepage of our website/app.</p>
                </div>
            </div>






            <div className="faq">
                <div className="question">
                        <h3> How do I consult a doctor online now?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                </div> 
                <div className="answer">
                    <p>You can book an online consultation either on the website or mobile app of Apollo 24/7 in two ways. Click on the ‘Find a Doctor’ button on the homepage of the website/app, select a specialty or type the name of the doctor directly. Once you select a doctor, you can click on the “Consult Now’ button to start the online consultation. If you're looking for a doctor based on your symptoms, you may start by going to the homepage of the website/app. Then click on the ‘Track Symptoms’ tab, search for your symptoms or select a few of them based on your health condition. Click ‘Show Doctors’, select a doctor and click on the ‘Consult Now’ button to start the online consultation.</p>
                </div>
            </div>
        
        
            <div className="faq">
                <div className="question">
                        <h3>During the online doctor consultation, the audio/video was not clear.</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                </div> 
                    <div className="answer">
                        <p>This may happen due to poor internet connectivity or due to some technical glitch. In such cases, please check your internet connection and if the issue persists, please email us at helpdesk@apollo247.com with the screenshot of the error and we will get this checked from our end.</p>
                    </div>
                </div> 



                <div className="faq">
                    <div className="question">
                        <h3>Where is my doctor's note for the online doctor consultation?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                    </div> 
                    <div className="answer">
                        <p>You can find your doctor's note&nbsp;for your online consult on the ‘Health Records’ tab. Once you click on this tab, you will be able to view/download your doctor's note&nbsp;by clicking on the ‘Consults &amp; Rx’ tab.</p>
                    </div>
                </div>  



            <div className="faq">
                <div className="question">
                        <h3>What is the minimal fee for online doctor consultation?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                </div> 
                <div className="answer">
                    <p>Online doctor consultation at Apollo 24/7 starts at Rs.200. The consultation fee will vary based on the doctor, the specialty, years of experience of the doctor, any discounts or promotion applied, etc.</p>
                </div>
            </div> 




            <div className="faq">
                <div className="question">
                        <h3>How do I pay for the online/offline doctor consultation?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                </div> 
                <div className="answer">
                    <p>Online consultations are prepaid and the payment can be made by either of the given ways – Paytm, Debit/Credit Card, and Netbanking. For offline consultations, you will need to make a partial payment online and the rest can be paid to the doctor at the hospital/clinic.</p>
                </div>
            </div>




            <div className="faq">
                <div className="question">
                        <h3>What is a specialist doctor?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                </div> 
                <div className="answer">
                    <p>A doctor who has done a specialization/training in a specific area of medicine after completing his/her M.B.B.S degree is known as a specialist doctor. He/she can treat complex health issues which a primary doctor may be unable to.</p>
                </div>
            </div>
 


            <div className="faq">
                <div className="question">
                        <h3>When should you consult a specialist doctor?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                </div> 
                <div className="answer">
                    <p>If your health concern is complex and your physician feels that it needs the attention of a specialised doctor, you will be referred to one. You can also consult a specialist doctor if you aren’t satisfied with the treatment/results of your primary doctor, you are struggling with a condition that is not improving, you have been diagnosed with a complex chronic condition, etc.</p>
                </div>
            </div>  

            <div className="faq">
                <div className="question">
                        <h3>Why is it best to consult a specialist doctor?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                        </svg>
                </div> 
                <div className="answer">
                    <p>A specialist doctor is trained to treat complex health conditions which your primary doctor may not be able to. Hence, if you are diagnosed with a complex chronic condition, it is best that you consult a specialist doctor. However, for other normal and generic health conditions, you can visit a primary doctor.</p>
                </div>
            </div>
            </div>

    </div>

    
  )
}

export default Doctor