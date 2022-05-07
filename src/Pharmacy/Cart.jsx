import React, { useEffect, useState } from "react";
import "./Cart.css";
const Cart1 = () => {
  const [details, setDetails] = useState([]);

  const getData = async () => {
    let res = await fetch("http://localhost:8080/CartData");
    let data = await res.json();
    setDetails(data);
    // console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const onDelete = (id) => {
    let newTodo = details.filter((item) => item.id !== id);
    setDetails(newTodo);
  };

  const Delete = async (id) => {
    try {
      await fetch(`http://localhost:8080/CartData/${id} `, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });

      console.log(2);
      onDelete(id);
    } catch (e) {
      console.log(e);
    }
  };

  const [Cost, setCost] = useState(0);

  const handleCost = () => {
    let ans = 0;
    details.map((item) => (ans += item.amount * item.Cost));
    setCost(ans);
    console.log(Cost);
  };

  useEffect(() => {
    handleCost();
  });

  const handleChange = (item, d) => {
    const ind = details.indexOf(item);
    const arr = details;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setDetails([...arr]);
  };

  return (
    <div>
      {/* <Navbar/> */}
      <h3>My Cart</h3>
      <hr />
      <div style={{ display: "flex" }}>
        <p className="p">Add address to confirm item availability</p>
        <h4 style={{ color: "#ff960d", paddingLeft: "110px" }}>
          + Login To Continue
        </h4>
      </div>

      <hr />

      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "70%" }}>
          {details.map((item) => {
            return (
              <div>
                <div style={{ width: "160%" }}>
                  <div className="Cart_page">
                    {/* <hr /> */}
                    <div style={{ disaplay: "flex", width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          color: "rgb(13, 77, 104)",
                          fontSize: "18px",
                          paddingLeft: "10px",
                          width: "90%",
                        }}
                      >
                        <div style={{ width: "80%", display: "flex" }}>
                          <img className="img" src={item.url} alt="" />
                          <p style={{ paddingLeft: "50px" }}>
                            <b>{item.Name}</b>
                          </p>
                        </div>

                        <div style={{ width: "20%", marginLeft: "50px" }}>
                          <button
                            className="remove_btn"
                            onClick={() => Delete(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="plus" style={{ display: "flex" }}>
                        <button onClick={() => handleChange(item, 1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}>
                          -
                        </button>
                        <h3 style={{ paddingLeft: "30px" }}>
                          MRP Rs.{item.Cost}
                        </h3>
                      </div>
                    </div>
                    {/* <hr /> */}
                  </div>
                </div>
              </div>
            );
          })}
          <h3 style={{ paddingLeft: "40px" }}>Total Cost : {Cost}</h3>
        </div>

        <div className="Right_cartPage">
          <h3 style={{ fontSize: "21px" }}>CART BREAKDOWN</h3>
          <hr />
          <hr />
          <h3 style={{ paddingLeft: "40px" }}>Total Cost : {Cost}</h3>
          <p style={{ paddingLeft: "40px", color: "rgb(13, 77, 104)" }}>
            Tax Amount : Rs.{Cost / 10}
          </p>
          <p style={{ paddingLeft: "40px", color: "rgb(13, 77, 104)" }}>
            Delivary Charges : Rs.{Cost / 20}
          </p>
          <hr />

          <h3 style={{ fontSize: "22px", paddingLeft: "40px" }}>
            Amount To pay : Rs. {Math.ceil(Cost + Cost / 10 + Cost / 30)}
          </h3>

          <button className="payment1">Proceed To Payment</button>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Cart1;
