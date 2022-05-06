import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUserTie,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import HomePage from "../homepage/HomePage";
import { useState, useEffect } from "react";
import "./Navbar.css"
import Slider from "../Slider/Slider";
const Navbar = () => {
  const navbarStyles = {
    position: "fixed",
    height: "50px",
    width: "100%",

    textAlign: "center",
  
  };
  

  return (
    <>
      {/* <div style={{...navbarStyles }}>Navbar</div> */}
      <div className="navbar" style={{ backgroundColor: "#dcdfce",height:"auto" }}>
        <div className="nnn"
          style={{
            backgroundColor: "#dcdfce",
            height: "auto",
            width: "100%",
            ...navbarStyles,
          }}
        >
          <div 
            style={{
              backgroundColor: "white",
              justifyContent: "space-between",
              width: "70%",
              height: "25px",
              border: "2px solid #f5f5f5",
               padding: "10px",
              display: "flex",
              margin: "auto",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                fontSize: "10px",
                // marginRight: "80px",
                marginBottom: "40px",
              }}
            >
              <div style={{marginRight:"30px"}}>
                {" "}
                <Link to={"/apollo"}>
                  {" "}
                  <img
                    style={{ height: "35px", width: "55px",marginLeft:"30px" }}
                    src="https://newassets.apollo247.com/images/ic_logo.png"
                    alt=""
                  />{" "}
                </Link>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                fontSize: "13px",
                gap: "15px",
                display: "flex",
                marginLeft: "80px",
              }}
            >
              <div>
                <Link
                  style={{
                    color: "#02475b",
                    textDecoration: "none",
                    fontSize: "6px",
                  }}
                  to={"/doctors"}
                >
                  {" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "600",
                      fontSize: "7px",
                    }}
                  >
                    DOCTOR{" "}
                  </span>
                  <br />
                  <nav style={{ color: "#02475b" }}>
                    Consult
                    <br />
                    Online
                  </nav>
                </Link>
              </div>
              <div>
                <Link
                  style={{
                    color: "#02475b",
                    textDecoration: "none",
                    fontSize: "6px",
                  }}
                  to={"/pharmacy"}
                >
                  {" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "600",
                      fontSize: "7px",
                    }}
                  >
                    PHARMACY
                  </span>{" "}
                  <br />
                  <div>
                    Medicines & <br />
                    Other Products
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  style={{
                    color: "#02475b",
                    textDecoration: "none",
                    fontSize: "6px",
                  }}
                  to={"/labtest"}
                >
                  {" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "600",
                      fontSize: "7px",
                    }}
                  >
                    LABTEST
                  </span>{" "}
                  <br />
                  <div>
                    Health <br />
                    check-ups
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  style={{
                    color: "#02475b",
                    textDecoration: "none",
                    fontSize: "6px",
                  }}
                  to={"/covid"}
                >
                  {" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "600",
                      fontSize: "7px",
                    }}
                  >
                    COVID-19
                  </span>{" "}
                  <br />
                  <div>
                    Latest <br />
                    updates
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                <Link style={{ color: "#02475b",height:"5px" }} to={"/icon"}>
                  <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "10px" }} />
                </Link>{" "}
              </div>
              <div style={{borderRadius:"50%",background:"#02475b",height:"22px",width:"22px"}}>
                <Link style={{ color: "white" }} to={"/icon"}>
                  {" "}
                  <FontAwesomeIcon
                    style={{ fontSize: "10px" }}
                    icon={faUserTie}
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        

        <div>
          <HomePage />
        </div>
        {/* <div>
          <Footer />
        </div> */}
        {/* <div>
        <Slider/>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
