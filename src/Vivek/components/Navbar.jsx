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
import "./Navbar.css";
import Slider from "../Slider/Slider";
const Navbar = () => {
  const navbarStyles = {
    position: "fixed",
    zIndex: "99",
    height: "50px",
    width: "100%",
    display: "block",
    top: "0",
    textAlign: "center",
  };

  return (
    <>


      <div
        className="navbar"
        style={{ backgroundColor: "white", height: "100px" }}
      >
        <div
          className="nnn"
          style={{
            height: "auto",
            width: "100%",
            // backgroundColor:"black",
            ...navbarStyles,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              justifyContent: "space-between",
              width: "100%",
              padding: "0px 300px 0px 300px",
              height: "70px",
              border: "2px solid #f5f5f5",
              padding: "10px",
              display: "flex",
              margin: "auto",
            }}
          >
            <div
              style={{

                height: "80px",
                width: "100px",

                marginBottom: "40px",
              }}
            >
              <div style={{ marginRight: "30px" }}>
                {" "}
                <Link to={"/"}>
                  {" "}
                  <img
                    style={{
                      marginLeft: "220px",
                      height: "70px",
                      width: "90px",
                    }}
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
                gap: "30px",
                display: "flex",
                marginLeft: "80px",
                marginRight: "220px",
              }}
            >
              <div>
                <Link
                  style={{
                    color: "#02475b",
                    textDecoration: "none",
                    fontSize: "11px",
                  }}
                  to={"/Doctor"}
                >
                  {" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "600",
                      fontSize: "15px",
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
                    fontSize: "11px",
                  }}
                  to={"/pharmacy"}
                >
                  {" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "600",
                      fontSize: "15px",
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
                    fontSize: "11px",
                  }}
                  to={"/labtest"}
                >
                  {" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "600",
                      fontSize: "15px",
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
                    fontSize: "11px",
                  }}
                  to={"/covid"}
                >
                  {" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "600",
                      fontSize: "15px",
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
                <Link style={{ color: "#02475b", height: "5px" }} to={"/cart"}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ fontSize: "22px", padding: "15px" }}
                  />
                </Link>{" "}
              </div>
              <div
                style={{
                  borderRadius: "50%",
                  background: "#02475b",
                  height: "44px",
                  width: "44px",
                  padding: "3px",
                  marginRight: "40px",
                }}
              >
                <Link style={{ color: "white" }} to={"/Login"}>
                  {" "}
                  <FontAwesomeIcon
                    style={{ fontSize: "24px", paddingTop: "5px" }}
                    icon={faUserTie}
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* <div><HomePage /></div> */}
      </div>
    </>
  );
};

export default Navbar;
