import React from "react";

const Cards = ({ item, handleClick }) => {
  // const { title, author, price, img } = item;
  // const {Name,Cost,url,} = el;
  let amount = +(item.amount)

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

               <div id="data" >
                    <div id="imgdiv">
                        <img src={item.url} alt="" />
                       
                        <hr />
                        <p>{item.Name}</p>
                       <p id='p2'> Rs. {item.Cost}</p>
                    </div>
                   
                    <div> 
                    <button onClick={() => handleClick(item)}>Add to Cart</button>
                    </div>
                 
               </div>

      {/* </div> */}
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
