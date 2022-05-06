import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommentDots,
    faPhone,
    faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import Slider from "../Slider/Slider";

const HomePage = () => {
    return (
        <>
          {/* color */}
        <div style={{background:"white",width:"73%",margin:"auto"}}>
            <div className="homeMain">
                <div className="homediv1">
                    <div
                        style={{
                            color: "#02475b",
                            fontWeight: "750",
                            fontSize: "25px",
                            marginTop: "20px",
                            marginRight: "40px",
                        }}
                    >
                        Hello There!
                    </div>
                   
                       <p  style={{ fontSize: "9px",color:"#0087ba" }}> Always caring about your health, we are here  to help you!</p>
                    
                    <div className="homepic">
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            
                            <div>
                                <img
                                    style={{ height: "20px", width: "20px",marginTop:"5px" }}
                                    src="https://cdn.kyruus.com/pm-dev/assets/provider-avatar-male-rectangle.png"
                                    alt=""
                                />
                               </div> 
                            <div style={{fontSize:"8px",color:"white",marginTop:"9px"}}>Book Appointment with Apollo Doctors</div>
                           <div><img style={{ height: "13px", width: "13px",marginTop:"7px" }} src="https://newassets.apollo247.com/images/ic_arrow_right_white.svg" alt="" /></div>
                        </div>
                        
                    </div >

                    <div className="homepic">
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <div><img style={{ height: "20px", width: "20px",marginTop:"7px" }} src="https://newassets.apollo247.com/images/ic_medicines.png" alt="" /></div>
                    <div style={{fontSize:"8px",color:"white",marginTop:"9px"}}>Buy Medicines and Essentials</div>
                    <div><img style={{ height: "13px", width: "13px",marginTop:"7px" }} src="https://newassets.apollo247.com/images/ic_arrow_right_white.svg" alt="" /></div>
                    </div>
                    </div>
                    <div className="bookhealth" style={{display:"flex",height:"30px",width:"200px"}}>
                    <div className="shadow" style={{display:"flex",justifyContent:"space-around"}}>
                        <div><img style={{height:"20px",marginTop:"5px"}} src="https://newassets.apollo247.com/images/ic_home_test.svg" alt="" /></div>
                        <div style={{fontSize:"7px",fontWeight:"bold",color:"#01475b",marginTop:"7px"}}>Book Lab Tests</div>
                    </div>
                    <div className="shadow" style={{display:"flex",justifyContent:"space-around"}}>
                        <div><img style={{height:"20px",marginTop:"5px"}} src="https://newassets.apollo247.com/images/ic-prescription.svg" alt="" /></div>
                        <div style={{fontSize:"7px",fontWeight:"bold",color:"#01475b",marginTop:"7px"}}>View Health <br /> Records</div>
                    </div>
                </div>
                </div>
               
                <div className="homediv2">
                    <img
                        src="https://newassets.apollo247.com/images/img-doctors@1x.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div><Slider/></div>
            
            <div
                style={{
                    fontSize: "10px",
                    background: "white",
                    width: "93%",
                    height:"auto",
                    margin: "auto",
                    color: "#07AE8B",
                    marginTop:"10px"
                }}
            >
                For COVID-19 Vaccination related queries
            </div>

           
           
            <div className="home2">
                <div>
                    <span>
                        <FontAwesomeIcon
                            style={{ color: "#FC9916", height: "10px", padding: "2px" }}
                            icon={faMessage}
                        />
                    </span>
                    <Link
                        style={{
                            fontSize: "9px",
                            textDecoration: "none",
                            color: "#FC9916",
                            justifycontenr: "center",
                        }}
                        to={"/"}
                    >
                        FAQs & Articles
                    </Link>
                </div>

                <div>
                    <span>
                        <FontAwesomeIcon
                            style={{ color: "#FC9916", height: "10px", padding: "3px" }}
                            icon={faPhone}
                        />
                    </span>
                    <Link
                        style={{
                            fontSize: "9px",
                            textDecoration: "none",
                            color: "#FC9916",
                            justifycontenr: "center",
                        }}
                        to={"/"}
                    >
                        Vaccination Queries
                    </Link>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon
                            style={{ color: "#FC9916", height: "10px", padding: "2px" }}
                            icon={faCommentDots}
                        />
                    </span>
                    <Link
                        style={{
                            fontSize: "9px",
                            textDecoration: "none",
                            color: "#FC9916",
                            justifycontenr: "center",
                        }}
                        to={"/"}
                    >
                        Chat with us
                    </Link>
                </div>
                <div>
                    <span>
                        <img
                            style={{ height: "14px", marginLeft: "10px" }}
                            src="https://newassets.apollo247.com/images/vaccine.png"
                            alt=""
                        />
                    </span>
                    <Link
                        style={{
                            fontSize: "9px",
                            textDecoration: "none",
                            color: "#FC9916",
                            justifycontenr: "center",
                        }}
                        to={"/"}
                    >
                        Cowin Registration
                    </Link>
                </div>
            </div>

           
            {/* <div ><Link to={"/"}><img style={{marginLeft:"190px",textalign:"center",justifyContent:"center",width:"70%",height:"100px"}} src="https://newassets.apollo247.com/images/prohealth/prohealthSliderTwo.jpg" alt="" /></Link></div> */}
           
            <div style={{height:"100px",width:"93%",margin:"auto",background:"white",marginTop:"10px"}}>
            <Link to={"/"}>
                <img
                    style={{
                        width: "99%",
                        height: "90px",
                        // marginLeft: "100px",
                        // background: "white",
                        margin:"auto"
                    }}
                    src="https://newassets.apollo247.com/images/prohealth/prohealthSliderTwo.jpg"
                    alt=""
                />
            </Link>
            </div>
            
            <div className="allparali" style={{background:"white",margin:"auto",width:"93%"}}>
            <h6 className="h612">
                 24|7 - Your Most Trusted Healthcare Brand

            </h6>
            <p className="para">
            Apollo 24|7 is the largest multi-channel digital healthcare platform in India, 
            created with a vision of eliminating flexibility blockages from the healthcare industry. 
            We believe in making healthcare affordable to everyone by combining analytic excellence, 
            affordable cost, and extensive research with advanced technology. Apollo 24|7 is a single 
            online platform where you have access to a wide range of services such as online pharmacy,
             online doctor consultations, and diagnostic lab tests at home. We also provide expert solutions for chronic conditions and COVID-care with a 
            secured digital vault, where you can safely upload all your medical reports. 
            </p>
            <h6 className="h612">The Smart Choice for Your Health is Here</h6>
            <p className="para">Make the best decision for your health by choosing Apollo 24|7. Here’s why you can count on us:</p>
        
        
            <li>36 years of legacy in the healthcare industry</li>
            <li>24x7 availability of doctors</li>

            <li>More than 3.5 million diagnostic tests each year</li>
 
            <li>700+ collection centres and 100+ laboratories</li>
            <li>High quality and affordable diagnostic solutions </li>
            <li>Fast and accurate test report results</li>

            <li>Several medical specialties under one roof</li>

            <li>Online prescriptions - available anytime, anywhere</li>
            <li>Order medicines and book tests online with ease</li>
             <li>Digitised health queries</li>

             <h6 className="h612">Ask a Doctor Online 24/7</h6>

             <p className="para">Online doctor consultations take place through online doctor chat, 
             call, or video call. This helps you to talk to doctors online from the comfort of your home
              by simply choosing a doctor from different specialties. Avail personalised 
             solutions for any health problem with prompt online doctor consultation with Apollo 24|7</p>

             <li>Safe and secure platform</li>
             <li>Affordable rates</li>
             <li>Video and chat options</li>

             <h6 className="h612">Online Doctor Consultation - Now at Your Fingertips</h6>

             <p className="para">
             The demand for doctors is expected to increase as new medicines allow people to live longer. However, there are several 
             ways to reach out to a doctor without the need to visit a hospital or clinic, all thanks to technology. With the online facility available, doctor consultations have become easier, and you can get the right health care. Online doctor consultations with 4000+ top medical doctors are available at Apollo 24|7. Video call or chat with expert
              doctors from 100+ medical specialties, including <h4> | Dermatology | Gynaecology | Paediatrics | Psychiatry | General Physicians | Gastroenterology | Dietetics | Ent Specialists | </h4>and more, in just 15 minutes.
             </p>

             <p className="para">Benefits of choosing online doctor consultations:</p>

             <li>Save time, money, and effort.</li>
             <li>No need to travel. </li>
             <li>Most convenient option to choose from, and helps in early diagnosis.</li>
             <li>Online doctor consultations are confidential and safe.</li>
             <li>No risks of infections.</li>

             <h6 className="h612">Apollo Hospitals</h6>

             <p className="para">Apollo 24|7 is a part of Apollo Hospitals. Apollo Hospitals was established in 1983 by Dr. Prathap C Reddy. It incorporates over 10,000 beds across 70 hospitals, over 4000 pharmacies, 172 primary care and diagnostic clinics, and 148 telemedicine facilities spread across 13 countries.
              Apollo Hospitals has touched billions of lives by offering exceptional clinical outcomes.</p>

              <p className="para">Milestones of Apollo Hospitals:</p>

              <li>36 Years of legacy and credibility in the healthcare industry. </li>
              <li>NABL certified multi-channel digital healthcare platform.</li>
              <li>World’s best medical specialists.</li>
              <li>Largest & trusted branded healthcare network.</li>
              <li>Advanced healthcare technology.</li>

              <h6 className="h612">Pharmacy Simplified with Apollo 24|7</h6>

              <p className="para">Apollo pharmacy is the most credible and established online pharmacy 
              in India. It delivers 100% original medicines and products. Apollo pharmacy is believed to
               offer super-fast home delivery for all the healthcare essentials. Explore our broad range of
                medicines or over-the-counter medicines and products such as baby care, personal care,
               wellness, lifestyle, health, and nutrition categories online with ease. </p>

               <p className="para">Rapid deliveries of medicines are available online at Apollo Pharmacy. In some cities, deliveries are done in less than 24 hours.</p>

               <li>Get health credits on purchasing medicines and products.</li>
               <li>Alluring deals on medicines and other products.</li>
               <li>A broad range of medicines and essential healthcare products to choose from.</li>
               <li>Prescriptions are uploaded directly.</li>
               <li>Authentic and top-notch quality products.</li>
               
               <h6 className="h612">Convenient Diagnostic Lab Tests at Home</h6>
               <p className="para">
               Regular health check-ups are vital for a healthy life because it helps in detecting diseases 
               at the earliest, following a timely treatment. Apollo 24|7 provides blood sample testing at your 
               doorstep conveniently. You can book lab tests at home and utilise the home-collection facility.
                We offer a broad range of diagnostic lab tests such as | RT-PCR Test | Renal Profile Test (KFT, RFT)
                 | Hemogram Test | Lipid Profile Test | Thyroid Profile Test (T3 T4 TSH) | D-Dimer Test | Urine Culture
                  Test
                | Complete Blood Count Test (CBC Test) | Widal Test | Liver Function Test (LFT) | and more.
               </p>

               <p className="para">Top-notch quality diagnostics are critical for the best treatment and personalised patient care.</p>
               <p className="para">Here are some simple steps to book a lab test:</p>
               <li>Book online - Select the package or test you want to book.</li>
               <li>Choose home-sample collection option - A qualified phlebotomist visits your home for sample collection at the selected slot time.</li>
               <li>Get fast and accurate blood test reports - download them from the app or website anytime, anywhere!</li>
            
              <h6 className="h612">Find Pathology Labs with Ease at Apollo 24|7</h6>
              <p className="para">Manage your health with prompt health check-ups from Apollo 24|7. We offer an extensive range of laboratory services that deliver factual diagnostic lab test results. You will find the most trusted pathology labs here at Apollo 24|7. </p>

              <h6 className="h612">Other Services Offered by Apollo 24|7</h6>
              <p className="para">pollo Circle Membership: Premium Healthcare Program
Apollo 24/7 Circle is an elite membership plan for those who put their overall health and well-being on priority. This membership plan guarantees priority access to Apollo’s best doctors, personalised care, unique deals, and comprehensive wellness programs especially curated by professionals. </p>
    
              <h6 className="h612">Apollo Prohealth Program </h6>

              <p className="para">
              Apollo ProHealth Program is an exclusive end-to-end personalised proactive healthcare management 
              program that combines predictive risk assessments and top-notch quality diagnostics with accurate
               physician checks. Approximately 
              22 million health checks have been done based on this program. You can count on us for:
              </p>

              <li>Customised health risk assessments: diagnostic tests designed exclusively for your profile to foresee the health risks.</li>
              <li>Physician-led assessment: designed for customised treatment plans and overall wellness goals.</li>
              <li>Multi-organ assessment: diagnostic tests designed as per your profile with consultations from top specialists and physicians.</li>
              <li>Health instructors: to evaluate your health parameters regularly and help you stay on your path to health and wellness.</li>
              
              <h6 className="h612">Health Queries</h6>

              <p className="para">Have questions about your health? Find answers to all your health queries regarding sexual health, gastroenterological disorders, gynaecological issues, dermatological problems, cardiological diseases, and more from proficient doctors and accredited experts by using the Apollo 24|7 app and website.</p>
            
            
            </div>
            <br />
            <div><Footer/></div>
            </div>
        </>
    );
};

export default HomePage;
