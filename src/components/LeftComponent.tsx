import { LeftData } from "../constent";

import "./LeftComonent.css"

function LeftComponent() {
  return (
    <div className="card-box lComp">
      <p>Todo</p>
      
      {
     LeftData.map((data)=>{
      return (
        <div className="title ">
          <div className="d-flex justify-content-between"><h5>{data.title}</h5>
            <p><span><i className="fa-solid fa-pen-to-square"></i></span> &ensp; <span><i className="fa-solid fa-trash"></i></span></p>
            </div>

         <div className="d-flex justify-content-between">
         <p>{data.details}</p> 
         <p>{data.discription}</p>
         </div>
         </div>
      )
     })}
    </div>
  )
}


export default LeftComponent;