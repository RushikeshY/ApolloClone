import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { LineDiv } from "./DoctorSpecialities";

const InfoDiv = styled.div`
  height: 330px;
  width: 697px;
  padding: 10px;
  display: flex;
  background-color: white;
  margin-left: 10px;
  fontfamily: IBM Plex Sans, sans-serif;
`;
const InfoBottomDiv = styled.div`
  height: 150px;
  width: 606px;
  padding: 10px;
  margin-left: 30px;
  background-color: white;
  border-top: 1px solid #eeeeee;
  font-size: 12px;
`;
const TimingDiv = styled.div`
  padding: 10px;
  margin: 30px;
  background-color: white;
  border-top: 1px solid #eeeeee;
  font-size: 12px;
  display: flex;
  line-height: 2;
`;
const ParallelDiv = styled.div`
  height: 850px;
  width: 400px;
  margin-top: 30px;
  padding: 20px;
  marginleft: 110px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 14px;
  color: #016676;
  border-radius: 8px;
  line-height: 1;
`;
const SmallDiv = styled.div`
  height: 120px;
  width: 147px;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
  line-height: 0.5;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const DoctorsDetails = () => {
  const [docData, setDocData] = useState("");

  function getdata() {
    setDocData(JSON.parse(localStorage.getItem("DoctorsData")));
    console.log(docData);
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      {/* >>>>>>>>>>>....Doctors Path From Home...<<<<<<<<<<<<<<<< */}
      <div
        style={{
          backgroundColor: "#eff0ed",
          height: "1000px",
          marginLeft: "100px",
          width: "90%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            fontSize: "12px",
            color: "orange",
            paddingTop: "30px",
            paddingLeft: "30px",
          }}
        >
          <a href="">HOME</a>
          <img
            src="https://newassets.apollo247.com/images/triangle.svg"
            alt=""
          />
          <a href="">Online Doctor Consultation</a>
          <img
            src="https://newassets.apollo247.com/images/triangle.svg"
            alt=""
          />
          <a href="">Physician/ Internal Medicine/ Covid Consults</a>
          <img
            src="https://newassets.apollo247.com/images/triangle.svg"
            alt=""
          />
          <a href="">in Gurugram</a>
          <img
            src="https://newassets.apollo247.com/images/triangle.svg"
            alt=""
          />
          <a href="">{docData.name}</a>
        </div>

        <div
          style={{ display: "flex", gap: "10px", backgroundColor: "#eff0ed" }}
        >
          <div
            style={{
              fontFamily: "IBM Plex Sans,sans-serif",
              padding: "1px",
              backgroundColor: "white",
              width: "55%",
              margin: "30px",
              borderRadius: "6px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            {/* >>>>>>>>>>>....Doctors Details Leftside Div...<<<<<<<<<<<<<<<< */}
            <InfoDiv>
              <div
                style={{
                  backgroundColor: "white",
                  width: "495px",
                  height: "330px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "100px",
                    borderBottom: "1px solid #eeeeee",
                    color: "#02475B",
                    margingLeft: "15px",
                  }}
                >
                  <p>{docData.name}</p>
                  <img
                    src="https://newassets.apollo247.com/images/ic_apollo.svg"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    color: "#0087BA",
                    fontSize: "14.5px",
                    marginTop: "15px",
                    paddingBottom: "15px",
                  }}
                >
                  PHYSICIAN/ INTERNAL MEDICINE/ COVID CONSULT |{" "}
                  {docData.experience}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    gridTemplateRows: "60px 60px",
                    margin: "10px",
                    fontSize: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      style={{ height: "24px", margin: "10px" }}
                      src="https://newassets.apollo247.com/images/ic-edu.svg"
                      alt=""
                    />
                    <div>
                      <p style={{ color: "#0087BA" }}>Education</p>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#02475B",
                        }}
                      >
                        {docData.education}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <img
                      style={{ height: "24px", margin: "10px" }}
                      src="https://newassets.apollo247.com/images/ic-location.svg"
                      alt=""
                    />
                    <div>
                      <p style={{ color: "#0087BA" }}>Location</p>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#02475B",
                        }}
                      >
                        {docData.hospital}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <img
                      style={{ height: "24px", margin: "10px" }}
                      src="https://newassets.apollo247.com/images/ic_reg_no.svg"
                      alt=""
                    />
                    <div>
                      <p style={{ color: "#0087BA" }}>Registration Number</p>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#02475B",
                        }}
                      >
                        HN-3926
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <img
                      style={{ height: "24px", margin: "10px" }}
                      src="https://newassets.apollo247.com/images/ic-language.svg"
                      alt=""
                    />
                    <div>
                      <p style={{ color: "#0087BA" }}>Languages</p>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#02475B",
                        }}
                      >
                        {docData.languages}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* >>>>>>>>>>>....Doctors Info Rightside Div...<<<<<<<<<<<<<<<< */}
              <div
                style={{
                  border: "1px solid white",
                  width: "320px",
                  marginTop: "20px",
                  height: "310px",
                }}
              >
                <img 
                  src={docData.image}
                  style={{
                    height: "120px",
                    width: "130px",
                    marginLeft: "68px",
                    marginTop: "40px",
                    marginBottom: "20px",
                  } }
                />
                <div
                  style={{
                    fontSize: "10px",
                    display: "flex",
                    gap: "30px",
                    padding: "5px",
                    marginLeft: "35px",
                    marginBottom: "-20px",
                  }}
                >
                  <span>Available in 9 mins</span>{" "}
                  <span>Available in 2 days</span>
                </div>
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/videoConsult";
                    }}
                    style={{
                      cursor: "pointer",
                      height: "50px",
                      width: "120px",
                      margin: "20px",
                      marginRight: "3px",
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor: "#FECF62",
                      border: "none",
                    }}
                  >
                    {" "}
                    <img
                      src="https://newassets.apollo247.com/images/videoConsult.svg"
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                    Book Video Consult
                  </button>
                  <button
                    style={{
                      cursor: "pointer",
                      height: "50px",
                      width: "120px",
                      paddingBottom: "5px",
                      backgroundColor: "#C6EAFE",
                      border: "none",
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <img
                      src="https://newassets.apollo247.com/images/hospitalVisit.svg"
                      style={{ marginRight: "10px" }}
                      alt=""
                    />
                    Book Hospital Visit
                  </button>
                </div>
              </div>
            </InfoDiv>

            {/* >>>>>>>>>>>....Bottom address Info Div...<<<<<<<<<<<<<<<< */}
            <p
              style={{ fontSize: "13px", marginLeft: "30px", color: "#02475B" }}
            >
              Clinic Address
            </p>

            <InfoBottomDiv>
              <p style={{ color: "#02475B" }}>{docData.hospital}</p>
              <img
                style={{ height: "65px", width: "181px", borderRadius: "5px" }}
                src="https://prodaphstorage.blob.core.windows.net/hospitals/97dbcb3e-f56d-4566-a7fb-3109da52f9b3.jpeg"
                alt=""
              />
            </InfoBottomDiv>
            <p
              style={{ marginLeft: "30px", color: "#02475B", fontSize: "13px" }}
            >
              Timings
            </p>

            <TimingDiv>
              <div style={{ marginTop: "13px", color: "#02475B" }}>Online:</div>
              <div style={{ color: "#0087BA", fontWeight: "500" }}>
                <ul>
                  <li style={{ display: "flex", gap: "61px" }}>
                    <span>Monday</span>
                    <span>08:00 AM - 10:00 PM</span>
                  </li>
                  <li style={{ display: "flex", gap: "59px" }}>
                    <span>Tuesday</span>
                    <span>08:00 AM - 10:00 PM</span>
                  </li>
                  <li style={{ display: "flex", gap: "40px" }}>
                    <span>Wednesday</span>
                    <span>08:00 AM - 10:00 PM</span>
                  </li>
                  <li style={{ display: "flex", gap: "52px" }}>
                    <span>Thursday</span>
                    <span>08:00 AM - 10:00 PM</span>
                  </li>
                  <li style={{ display: "flex", gap: "70px" }}>
                    <span>Friday</span>
                    <span>08:00 AM - 10:00 PM</span>
                  </li>
                  <li style={{ display: "flex", gap: "53px" }}>
                    <span>Saturday</span>
                    <span>08:00 AM - 10:00 PM</span>
                  </li>
                  <li style={{ display: "flex", gap: "62px" }}>
                    <span>Sunday</span>
                    <span>08:00 AM - 10:00 PM</span>
                  </li>
                </ul>
              </div>

              <div
                style={{
                  marginTop: "13px",
                  marginLeft: "50px",
                  color: "#02475B",
                }}
              >
                Clinic:
              </div>
              <div style={{ color: "#0087BA", fontWeight: "500" }}>
                <ul>
                  <li style={{ display: "flex", gap: "61px" }}>
                    <span>Monday</span>
                    <span>NO SLOTS AVAILABLE</span>
                  </li>
                  <li style={{ display: "flex", gap: "59px" }}>
                    <span>Tuesday</span>
                    <span>NO SLOTS AVAILABLE</span>
                  </li>
                  <li style={{ display: "flex", gap: "40px" }}>
                    <span>Wednesday</span>
                    <span>11:00 AM - 01:00 PM</span>
                  </li>
                  <li style={{ display: "flex", gap: "52px" }}>
                    <span>Thursday</span>
                    <span>NO SLOTS AVAILABLE</span>
                  </li>
                  <li style={{ display: "flex", gap: "70px" }}>
                    <span>Friday</span>
                    <span>NO SLOTS AVAILABLE</span>
                  </li>
                  <li style={{ display: "flex", gap: "53px" }}>
                    <span>Saturday</span>
                    <span>11:00 AM - 01:00 PM</span>
                  </li>
                  <li style={{ display: "flex", gap: "62px" }}>
                    <span>Sunday</span>
                    <span>NO SLOTS AVAILABLE</span>
                  </li>
                </ul>
              </div>
            </TimingDiv>
          </div>

          {/* >>>>>>>>>>>....Right side Div...<<<<<<<<<<<<<<<< */}
          <ParallelDiv style={{ marginLeft: "20px", height: "90%" }}>
            <div>How can I consult with {docData.name}:</div>
            <div style={{ display: "flex", gap: "15px" }}>
              <SmallDiv>
                <p>Video Consult</p>
                <p>{docData.fee}</p>
                <p style={{ color: "orange" }}>{docData.circleFees}</p>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "100",
                    marginBottom: "50px",
                    color: "orange",
                  }}
                >
                  <span>for</span>
                  <img
                    style={{ height: "20px", width: "33px", paddingTop: "4px" }}
                    src="https://newassets.apollo247.com/images/circle.svg"
                    alt=""
                  />
                  <span>members</span>
                </div>
              </SmallDiv>

              <SmallDiv style={{}}>
                <p style={{ paddingTop: "30px" }}>Hospital Visit</p>
                <p>₹ 1000</p>
              </SmallDiv>
            </div>

            {/* >>>>>>>>>>>>.....HOSPITAL.....<<<<<<<<<<<<<<<<< */}

            <div
              style={{ display: "flex", marginTop: "20px", fontSize: "12px" }}
            >
              <div style={{ marginRight: "10px" }}>
                <b>
                  <img
                    src="https://newassets.apollo247.com/images/ic-specialist.svg"
                    alt=""
                  />
                </b>
              </div>
              <div>
                <b style={{ color: "#0589bb", fontSize: "13px" }}>
                  HOSPITAL VISIT
                </b>
                <p style={{ fontSize: "10px", fontWeight: "100" }}>
                  {" "}
                  AVAILABLE IN 2 DAYS{" "}
                </p>
              </div>
            </div>

            <LineDiv></LineDiv>

            <div
              style={{
                lineHeight: "2",
                color: "rgb(2, 71, 91, 0.6)",
                fontSize: "12px",
              }}
            >
              <div>
                <img
                  src="https://newassets.apollo247.com/images/consult-doc.svg"
                  alt=""
                  style={{ marginRight: "15px" }}
                />
                <span>Choose the doctor</span>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/slot.svg"
                  alt=""
                  style={{ marginRight: "15px" }}
                />
                <span>Book an appointment slot</span>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/ic-payment.svg"
                  alt=""
                  style={{ marginRight: "15px" }}
                />
                <span>Make payment</span>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/ic_hospital.svg"
                  alt=""
                  style={{ marginRight: "20px" }}
                />
                <span>Visit the doctor at Hospital/Clinic</span>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/prescription.svg"
                  alt=""
                  style={{ marginRight: "15px" }}
                />
                <span>Receive prescriptions instantly</span>
              </div>
            </div>

            {/* >>>>>>>>>>>>.....AUDIO/VIDEO.....<<<<<<<<<<<<<<<<< */}

            <div
              style={{ display: "flex", marginTop: "20px", fontSize: "12px" }}
            >
              <div style={{ marginRight: "10px" }}>
                <b>
                  <img
                    src="https://newassets.apollo247.com/images/video-calling.svg"
                    alt=""
                  />
                </b>
              </div>
              <div>
                <b style={{ color: "#0589bb", fontSize: "13px" }}>
                  HOW TO CONSULT A DOCTOR <br /> ONLINE VIA <br />{" "}
                  TEXT/AUDIO/VIDEO?
                </b>
              </div>
            </div>

            <LineDiv></LineDiv>

            <div
              style={{
                lineHeight: "2",
                color: "rgb(2, 71, 91, 0.6)",
                fontSize: "12px",
              }}
            >
              <div>
                <img
                  src="https://newassets.apollo247.com/images/consult-doc.svg"
                  alt=""
                  style={{ marginRight: "15px" }}
                />
                <span>Choose the doctor</span>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/slot.svg"
                  alt=""
                  style={{ marginRight: "15px" }}
                />
                <span>Book a slot</span>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/ic-payment.svg"
                  alt=""
                  style={{ marginRight: "15px" }}
                />
                <span>Make payment</span>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/ic-mobile.svg"
                  alt=""
                  style={{ marginRight: "20px" }}
                />
                <span>Be present in the consult room on </span>
                <p
                  style={{
                    marginLeft: "32px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  apollo247.com at the time of consult
                </p>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/prescription.svg"
                  alt=""
                  style={{ marginRight: "15px" }}
                />
                <span>Receive prescriptions instantly</span>
              </div>
              <div>
                <img
                  src="https://newassets.apollo247.com/images/ic-followchat.svg"
                  alt=""
                  style={{ marginRight: "15px" }}
                />
                <span>Follow Up via text - Valid upto 7 days</span>
              </div>
            </div>

            <div
              style={{
                height: "20px",
                borderBottom: "1px solid #eeeeee",
                marginBottom: "20px",
              }}
            ></div>
            <div
              style={{
                color: "rgb(2, 71, 91, 0.6)",
                fontSize: "12px",
                width: "250px",
                lineHeight: "1.7",
              }}
            >
              To enjoy services provided by Apollo 247 on Mobile, download our
              App
            </div>
            <div style={{ display: "flex", gap: "60px", marginTop: "20px" }}>
              <img
                src="https://newassets.apollo247.com/images/apollo247.png"
                alt=""
              />
              <a
                href="https://play.google.com/store/apps/details?id=com.apollo.patientapp"
                style={{
                  color: "#FC9916",
                  textDecorationLine: "none",
                  fontWeight: "600",
                }}
              >
                Download the App
              </a>
            </div>
          </ParallelDiv>
        </div>
      </div>
    </>
  );
};

export default DoctorsDetails;
