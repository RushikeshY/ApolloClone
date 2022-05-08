import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import "./Pharmacy.css";
import { Link } from "react-router-dom";
import Footer from "../Vivek/footer/Footer";
import Data from "../Data.json"
import Data1 from "../Data.json"

const Pharmacy = () => {
 console.log(1)
  console.log(Data)
// let data =  Data.Data;
// let data1 = Data1.Data1
  console.log(1)
  const [data, setData] = useState(Data.Data);
  
  const [data1, setData1] = useState(Data1.Data1);


  function showData(e){
    localStorage.setItem("ProductData",JSON.stringify(e))

  }
  // const getData = async () => {
  //   let res = await fetch("http://localhost:8080/Data");
  //   let data = await res.json();
  //   setData(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  // const [data1, setData1] = useState([]);

  // const getData1 = async () => {
  //   let res = await fetch("http://localhost:8080/Data1");
  //   let data1 = await res.json();
  //   setData1(data1);
  //   console.log(data1);
  // };

  // useEffect(() => {
  //   getData1();
  // }, []);

  // const handleClick = async (item) => {
  //   let res = await fetch("http://localhost:8080/CartData", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(item),
  //   });
  // };
  let arr = [];
  const handleClick=(e)=>{
    // e.preventDefault();

    arr.push(e)
    localStorage.setItem("user",JSON.stringify(arr))
    alert("Item Added To Cart")

    console.log(arr)
        }

  return (
    <div id="Pharmacy_Main_Div">
   
      <div style={{ display: "flex", gap: "30px", paddingLeft: "30px",color:"rgb(13, 77, 104)" }}>
        <div>Baby Care</div>
        <div>Health & Nutrition</div>
        <div>Personal Care</div>
        <div>Ayurveda</div>
        <div>Health Devices</div>
        <div>Home Essentials</div>
        <div>Apollo Life</div>
        <div>Apollo Life</div>
        <div>Covid Essentials</div>
      </div>
      <div id="Whatsapp">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbS4jsxTNvrKsQd7EpvMWhyDmy5w0NBpSmBhUCUpkFWNsdVymiKALaEsyFNtZM8lzfg0k&usqp=CAU"
          alt=""
        />
      </div>

      <div id="slider">
        <div style={{ height: "80%", width: "65%" }}>
          <div>
            <input
              type="text"
              className="placeholder"
              placeholder="Search Meds Brand And More"
            />
          </div>

          <Slider />
        </div>
        <div id="slider_right">
          <div id="special_offer">
            {" "}
            <p style={{ paddingLeft: "30px" }}>Special Offer</p>
          </div>

          <div style={{ display: "flex" }}>
            <div if="order1" style={{ width: "60%" }}>
              <p
                style={{
                  padding: "20px 30px 10px 40px ",
                  color: "rgb(5, 54, 97)",
                }}
              >
                Place your order via prescriptions
              </p>
              <button
                style={{
                  backgroundColor: "#ff960d",

                  marginLeft: "50px",
                  height: "35px",
                  width: "130px",
                  borderRadius: "5px",
                  color: "white",
                }}
                id="btn1"
              >
                UPLOAD
              </button>
            </div>

            <div>
              <img
                style={{ margin: "30px 10px 0px 30px" }}
                src="https://newassets.apollo247.com/images/ic_prescription_pad.svg"
                alt=""
              />
            </div>
          </div>

          <p
            style={{
              padding: "20px 10px 20px 40px",
              color: "rgb(5, 54, 97)",
              fontSize: "20px",
            }}
          >
            {" "}
            <b>Your Order</b>{" "}
          </p>
        </div>
      </div>
      <h3>SHOP BY HEALTH CONDITIONS</h3>
      <hr />
      <div className="divflex">
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png"
            alt=""
          />{" "}
          <p>COVID Care</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png"
            alt=""
          />
          <p>COVID Protection</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png"
            alt=""
          />
          <p>Diabetes Care</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg"
            alt=""
          />
          <p>Liver Care</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg"
            alt=""
          />
          <p>Cardiac</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png"
            alt=""
          />
          <p>Pain Releif</p>
        </div>
      </div>

      <h3>SEBAMED UP TO 50 PERCENT OFF</h3>
      <hr />
      <div id="o">
        {data.map((item, index) => {
          return (
            <>
              <div onClick={()=>showData(item)} id="data">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/pharmacy/${item.id}`}
                >
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
                <div>
                  {" "}
                  <button className="btn" onClick={() => handleClick(item)}>
                    Add To Cart
                  </button>
                </div>

                <div></div>
              </div>
            </>
          );
        })}
      </div>

      <h3>SUMMER ESSENTIALS</h3>

      <hr />

      <div id="o">
        {data1.map((item) => {
          return (
            <>
              <div id="data">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/pharmacy/${item.id}`}
                >
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
                <div>
                  {" "}
                  <button className="btn" onClick={() => handleClick(item)}>
                    Add To Cart
                  </button>
                </div>
                <div></div>
              </div>
            </>
          );
        })}
      </div>

      <h3>SUMMER ESSENTIALS</h3>
      <hr />

      <div id="o">
        {data.map((item) => {
          return (
            <>
              {/* <Cards item={item} handleClick={handleClick} /> */}
              <div id="data">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/pharmacy/${item.id}`}
                >
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
                <div>
                  {" "}
                  <button className="btn" onClick={() => handleClick(item)}>
                    Add To Cart
                  </button>
                </div>
                <div></div>
              </div>
            </>
          );
        })}
      </div>

      <h3>SHOP BY CATEGORY</h3>
      <hr />
      <div className="divflex">
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/catalog/category/baby_care_22oct.png"
            alt=""
          />{" "}
          <p>COVID Care</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/catalog/category/health_and_nutrition_22oct.png"
            alt=""
          />
          <p>COVID Protection</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/catalog/category/personal_care_22oct.png"
            alt=""
          />
          <p>Diabetes Care</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg"
            alt=""
          />
          <p>Liver Care</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/catalog/category/health_devices_22oct.png"
            alt=""
          />
          <p>Cardiac</p>
        </div>
        <div className="flex">
          <img
            src="https://newassets.apollo247.com/pub/media/catalog/category/home_essentials_22oct.png"
            alt=""
          />
          <p>Pain Releif</p>
        </div>
      </div>

      <h3> EXPLORE - POPULAR PRODUCTS</h3>
      <hr />

      <div id="popular_products">
        <img
          src="https://newassets.apollo247.com/pub/media/wysiwyg/home/247_women_care_dod1.jpg"
          alt=""
        />
        <img
          src="https://newassets.apollo247.com/pub/media/wysiwyg/home/pr_dod2_247.jpg"
          alt=""
        />
        <img
          src="https://newassets.apollo247.com/pub/media/wysiwyg/home/247_sunscreen_dod3.jpg"
          alt=""
        />
      </div>

      <div id="popular_products1">
        <div id="left">
          <div>
            {" "}
            <p>ORDER MEDICINE ONLINE FROM</p>
            <hr />
            <p>Genuine medicines and essentials delivered in a jiffy!</p>
          </div>

          <img
            src="https://newassets.apollo247.com/images/apollopharmacy/pharmacyLogoColor.svg"
            alt=""
          />
        </div>
        <div id="right">
          <p>India's Most Trusted Pharmacy Chain</p>
          <div>
            {" "}
            <img
              src="https://newassets.apollo247.com/images/apollopharmacy/storeIconDark.svg"
              alt=""
            />
            <h5>4500+ stores</h5>
            <h4>Locate your store</h4>
          </div>
        </div>
      </div>

      <h3> HALF PRICE STORE</h3>
      <hr />

      <div id="o">
        {data1.map((item, index) => {
          return (
            <>
              <div id="data">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/pharmacy/${item.id}`}
                >
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
                <div>
                  {" "}
                  <button className="btn" onClick={() => handleClick(item)}>
                    Add To Cart
                  </button>
                </div>
                <div></div>
              </div>
            </>
          );
        })}
      </div>

      <h3>Shop By Brands</h3>
      <hr />
      <div id="brands">
        <div>
          <img
            src="https://newassets.apollo247.com/pub/media/ves/brand/GNCn.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://newassets.apollo247.com/pub/media/ves/brand/glucond.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://newassets.apollo247.com/pub/media/ves/brand/accu_check.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://newassets.apollo247.com/pub/media/ves/brand/colgate.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://newassets.apollo247.com/pub/media/ves/brand/sebamed.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://newassets.apollo247.com/pub/media/ves/brand/Inlife-Registered-Logo.jpg"
            alt=""
          />
        </div>
      </div>

      <div>
        <h4 className="h4">
          EFFORTLESS ONLINE MEDICINE ORDERS AT APOLLO PHARMACY
        </h4>
        <p className="p">
          {" "}
          Because ordering medicines online need not be complicated but rather a
          cakewalk. And at Apollo Pharmacy we ensure that. All you need to do
          is: Browse through our wide variety of products Add products to your
          cart and complete the payment. Voila! Your order will be on its way to
          you. Apollo Pharmacy is your go-to online pharmacy store for all your
          medicine needs – be it your regular medications, or over-the-counter
          (OTC) medicines. We also have a range of products in the personal
          care, baby care, health and nutrition, wellness, and lifestyle
          categories. Come explore ‘everything under the sun’ related to
          healthcare at Apollo Pharmacy
        </p>
        <h4 className="h4">Reasons To Buy Medicine From Apollo Pharmacy</h4>
        <p className="p">
          For over 32 years, Apollo Pharmacy has been providing you with genuine
          medicines round-the-clock, through 24-hour pharmacies. And now through
          Apollo Pharmacy, we intend to make your lives easier – by getting your
          medicines delivered to you. Yes, no more stepping out to get your
          medicines, no more standing in long queues, no more worrying about the
          genuineness of medicines, no more sweat! Here are more reasons why you
          should buy your medicines from Apollo Pharmacy: Super-fast deliveries.
          In select cities, deliveries are done in as less as 1 day Largest
          pharmacy chain in India with over 4,500 stores Attractive deals on
          medicines and other FMCG products Get Health Credits on purchases (not
          applicable on discounted products) Prescriptions can be uploaded
          directly to place an order Option to consult with a pharmacologist to
          check medicine interactions Wide range of healthcare products to
          choose from Only genuine and top-quality products delivered.
        </p>
        <h4 className="h4">
          Apollo Pharmacy - Largest Online Pharmacy In India
        </h4>
        <p className="p">
          With more than 4,500 stores in India, Apollo Pharmacy is not just the
          largest online pharmacy store in India but in Asia as well. Our
          pharmacy chain has been operational and been providing genuine quality
          healthcare products for more than 32 years. Our wide range of products
          ensures that everything you need related to healthcare, you will find
          it on our platform.
        </p>

        <h4 className="h4">Most Trusted Online Medical Store Of India</h4>
        <p className="p">
          As pioneers in the healthcare segment, we understand the importance of
          trust. And that is why, over the years, we worked on building that
          trust. We ensure that every product sold through our offline/online
          stores are checked for their authenticity, quality, and compliance
          with the Central Drugs Standard Control Organization, the national
          regulatory body for Indian pharmaceuticals and medical devices.
        </p>
        <h4 className="h4">100% Genuine Medicine From Apollo Pharmacy</h4>
        <p className="p">
          All medicines/healthcare products sold on Apollo Pharmacy are procured
          from our sister company - Apollo Pharmacy, with a reputation of
          selling only 100% genuine products. The products sold through Apollo
          Pharmacy are inspected thoroughly to ensure only genuine products make
          the cut. We believe that when it comes to medicines, quality and
          authenticity should never be compromised.
        </p>
        <h4 className="h4">Over 4,500 Pharmacy Stores In India</h4>
        <p className="p">
          Our strong network lets us deliver medicines to every nook and corner
          of the country. We have more than 4,500 pharmacy stores in India
          catering to all your medicine needs. Our network is so vast that you
          may find an Apollo Pharmacy store at every 1 km. We are leveraging
          this vast network to now become an online medical store – by getting
          these medicines delivered to you.
        </p>
        <h4 className="h4">Fastest Home Delivery Of Your Order</h4>
        <p className="p">
          When it comes to medicines, most of us do not want to take a chance.
          Which is why most of us prefer going to a store physically to get
          medicines. But you know what happens at the stores. First, you need to
          go there physically which means you have to drive/walk/ride for at
          least 10-15 minutes. Second, you need to wait for your turn which may
          come after 10-15 minutes. Third, you can only buy the products you are
          sure about, e.g. prescribed medicines. What if you want to buy an FMCG
          product but are not sure which one? You cannot expect the pharmacist
          to give you too many options. Apollo Pharmacy is the solution to all
          these. We deliver the medicines to you without you having to step out
          or wait in the queue to buy medicines. And we give you the option to
          browse through a variety of non-pharma products to choose from. Are we
          missing something here? Yes, the time we take to deliver your order.
          We understand that you may sometimes require medicines in urgency and
          that is why we assure you the fastest home delivery of your medicines.
          Also, depending on the city you reside in, medicines can be delivered
          in as less as 1 hour.
        </p>
        <h4 className="h4">
          Best Pharmacologist Available To Check Medicine Interactions
        </h4>
        <p className="p">
          Sometimes, the medicines prescribed by your doctor may react with your
          existing medications, food, beverage, or supplements. This is known as
          medicine interaction and may prevent your medicine to perform as
          expected. Hence, on Apollo Pharmacy, we offer you an option to consult
          with a pharmacologist, an expert in medicine interactions, before you
          make any purchase.
        </p>
        <h4 className="h4">Extra Benefits Of Online Medicine Orders</h4>
        <p className="p">
          When you order medicines at Apollo Pharmacy, not only do you get your
          medicines delivered on time and at your doorstep, but you also get
          additional benefits. You can earn Apollo Health Credits whenever you
          order medicine online and also when you purchase other non-pharma
          products (not applicable on discounted products including the ones
          where coupon codes have been applied). You can use these Health
          Credits to make more purchases on our platform. And not to forget the
          discounts and exclusive offers we bring out from time to time.
        </p>
        <h4 className="h4">Additional Services I Will Receive</h4>
        <p className="p">
          Besides purchasing medicines, the additional services you can avail on
          our platform are doctor consultations, symptom checker, ordering
          diagnostic tests, and digitization of your health records. These
          services let you consult with doctors from over 70 specialities, check
          and understand your symptoms, book diagnostics tests, and converts
          your physical health records into digital records.With so many
          services under our umbrella, you wouldn’t need to go anywhere else.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Pharmacy;
