import { FaEdit, FaTrash } from "react-icons/fa";
import "./LeftComponent.css";
import { priorityColors, todoList } from "../constent";
import { useEffect, useState } from "react";

function LeftComponent({ data }:any) {
  let Data = JSON.parse(localStorage.getItem("storedData") || '');
  // console.log(data);

  return (
    <div className="card-box">
      {Data?.slice(-5).map((v) => {
        return (
          <div className={`todoContainer `}>
            <div className="titleContainer">
              <div className="title">{v.title}</div>
              <div
                className={`chip-text ${
                  v.priority === "High"
                    ? "bg-danger"
                    : v.priority === "Medium"
                    ? "bg-warning"
                    : "bg-success"
                }`}
              >
                {v.priority} Priority
              </div>
            </div>
            <div className="">
              <FaEdit className="edit-todo" />
              <FaTrash className="delete-todo" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeftComponent;
