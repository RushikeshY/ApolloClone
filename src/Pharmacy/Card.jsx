import React from "react";
import { Link } from "react-router-dom";
// import { Details } from "./Details";
const Cards = (item) => {
  const { Name, Cost, url, id, Off } = item.item;
  // const {Name,Cost,url,} = el;
  // let amount = +(item.amount)







  return (
    <div className="cards">
      {/* <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div> */}

      {/* <div className="image_box"> */}
      {/* <img src={item.url} alt="" />
      </div>
      <div className="details">
        <p>{item.Name}</p>
        <p>{author}</p>
        <p>Price - {item.Cost}Rs</p> */}

      <div>
        <div id="data">
          <Link style={{ textDecoration: "none" }} to={`/pharmacy/${id}`}>
            <div id="imgdiv">
              <div style={{ display: "flex" }}>
                <img src={url} alt="" />
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
                  -{Off}%
                </div>
              </div>

              <hr />
              <p id="p1">{Name}</p>
              <p id="p2">MRP Rs. {Cost}</p>
            </div>
          </Link>
           
          <div>
            {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
