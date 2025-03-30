// // import React from "react";
// // import { Button } from "reactstrap";


import leftData from "../constent";
import "./TopLeft.css"


const TopLeftCard = () =>{
  return (
    <div className="card-box">
      {leftData.map((data) => {
        return (
        <div  className="card">
        <p>{data.title}</p>
        <div className="card-icon">
        <i className="fa-solid fa-pen-to-square" ></i>
        <i className="fa-solid fa-trash-can"></i>
        </div>
        </div>
        );
      }) }
    </div>
  );
};

export default TopLeftCard;

// import leftData from "../constent";
// import "./TopLeft.css"


// const TopLeftCard = () =>{
//   const Onbtn = () =>{
//     alert(" button clicked")
//   }
//   return (
//     <div className="card-box">
//       {/* <h2>left Data</h2> */}
//       {leftData.map((data, index) => {
//         return (
//         <div key={index} className="card">
//         <p>{data.title}</p>
//         {data.priority === "low" && (
//           <button onClick={Onbtn} className="btn1" color="success">Add</button>
//         )}
//           {data.priority === "medium" && (
//           <button onClick={Onbtn} className="btn2" color="warning">Edit</button>
//         )}
//           {data.priority === "high" && (
//           <button onClick={Onbtn} className="btn3" color="danger">Delete</button>
//         )}
//         </div>
//         );
//       }) }
//     </div>
//   );
// };

// export default TopLeftCard;



//  import React from "react";
// import { Button } from "reactstrap";

// import leftData from "../constent";
// import "./TopLeft.css"


// const TopLeftCard = () =>{
//   const handleAdd = () => {
//     console.log("Add button clicked!");
//   };

//   const handleEdit = () => {
//     console.log("Edit button clicked!");
//   };

//   const handleDelete = () => {
//     console.log("Delete button clicked!");
//   };

//   return (
//     <div className="card-box ">
//       {/* <h2>left Data</h2> */}
//       {leftData.map((data) => {
//         return (
//         <div className="card">
//         <p>{data.title}</p>
//         <button color="success" className="me-2" onClick={handleAdd}> Add </button>
//         <button color="warning" className="me-2" onClick={handleEdit}> Edit</button>
//         <button color="danger" className="me-2" onClick={handleDelete}> Delete </button>
//         </div>
//         );
//       }) }
//     </div>
//   );
// };

// export default TopLeftCard;