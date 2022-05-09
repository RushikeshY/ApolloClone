import React, { useState } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
  const [toggle, setToggle] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };
  const handleChange = (e) => {
    setPhone("+91" + " " + e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setToggle(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setPhone(" ");
        })
        .catch((error) => {});
    } else {
      alert("Enter Correct Mobile Number");
    }
  };
  const otpChange = (e) => {
    setOtp(e.target.value);
  };
  const submitOtp = (e) => {
    e.preventDefault();
    if (otp.length == 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          // console.log();
          setOtp(" ");

          alert("login successfull");
          if (user) {
            navigate("/Details");
          }
        })
        .catch((error) => {});
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft: "30px",
      }}
    >
      <div>
        <img
          style={{ width: "700px", paddingTop: "50px" }}
          src="https://newassets.apollo247.com/images/login_ap.png"
        />
      </div>
      <div
        style={{
          width: "350px",
          marginLeft: "50px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        {toggle == false ? (
          <div className="form" style={{ padding: "20px" }}>
            <h1 style={{ color: "#02475B" }}>Hi</h1>
            <p style={{ color: "#0087BA" }}>
              Please enter your mobile <br /> number to login
            </p>
            <form onSubmit={handleSubmit} action="">
              <input
                style={{
                  height: "30px",
                  width: "190px",
                  borderRadius: "5px",
                  fontSize: "17px",
                }}
                placeholder="Enter Mobile Number"
                type="Number"
                onChange={handleChange}
              />
              <button
                style={{
                  height: "30px",
                  padding:"5px",
                  color: "white",
                  width: "90px",
                  borderRadius: "5px",
                  backgroundColor: "#ff960d",
                  marginLeft:'5px'
                }}
                type="Submit"
              >
                Send-Otp
              </button>
            </form>
            <br />
            <li style={{color:"rgb(13, 77, 104)"}}>
              OTP will be sent to this number by SMS and WhatsApp.
              <br /> By signing up, I agree to the{" "}
              <a href="/" style={{color:"#ff960d"}}> Privacy Policy,Terms and Conditions</a> <br /> of
              Apollo Pharmacy.
            </li>
          </div>
        ) : (
          <div className="form2" style={{padding:"20px" ,color:"rgb(13, 77, 104)"}}>
            <h2 >Great</h2>
            <p>
              Now type in the OTP sent to you <br /> for authentication
            </p>
            <form onSubmit={submitOtp}>
              <input
                style={{
                  height: "30px",
                  width: "190px",
                  borderRadius: "5px",
                  fontSize: "17px",
                }}
                type="Number"
                placeholder="Enter OTP"
                onChange={otpChange}
                required
              />
              &nbsp; <button type="Submit"
              style={{
                height: "30px",
                  padding:"5px",
                  color: "white",
                  width: "90px",
                  borderRadius: "5px",
                  backgroundColor: "#ff960d",
                  marginLeft:'5px'
              }} >Submit</button>
            </form>
            <div className="BorderDiv">
             <div></div>
              <div>or</div>
              <div></div>
            </div>

            <a href="/" style={{color:"#ff960d",fontSize:"18px",paddingTop:"20px"}}>Resend OTP</a>
            <br />

            <button
              style={{
                height: "30px",
                  padding:"5px",
                  color: "white",
                  width: "150px",
                  borderRadius: "5px",
                  backgroundColor: "#ff960d",
                  marginLeft:'5px',
                  marginTop:"14px"

              }}
            >Get OTP On Call</button>
          </div>
        )}

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}

export default Login;
