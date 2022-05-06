// // import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import styled from "styled-components";

// // style for Flex
// const Flex = styled.div``;
// // var data 
// // add style for button
// export const Button = styled.button``;

// export const SingleBook = () => {

//   const [data,setData] = useState("")
 
//   const {id} =  useParams() ;

//   useEffect(() => 
//   {

//       // make a GET request to http://localhost:8080/books/${id}`
//     // use useParams to get the id
//     const getData = async()=>{

//     try{

//       let res = await fetch(`http://localhost:3000/details/${id}`)
//       let info = await res.json() ;
//       console.log(info) ;
//       setData(info) ;

//     }
//     catch(e)
//     {
//       console.log(e)
//     }
//   }
//   getData();
//   },[]);

//   return (
//     <>
//       {/* added basic data you can add more and make a good UI around it */}
//       {!!data && (
//         <>
//           <Flex key={id} >
//             <img
//               data-testid="book-image-url"
//               src={data.url}
//               alt={data.Name}
//             />
//             <div>
//               <h2 data-testid="book-title">{data.Name}</h2>
//               <h3 data-testid="book-isbn">{data.id}</h3>
//               <p data-testid="book-longdesc">{data.Description}</p>
//             </div>
//           </Flex>
//           <Link to={`/books/${data.id}/edit`}>
//             <Button>Edit</Button>
//           </Link>
//         </>
//       )}
//     </>
//   );
// };
