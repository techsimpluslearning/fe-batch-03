import { useState } from "react";
import "./MainComponent.css"; 
import Heading from "./heading";
import TodoData from "../constent.js";

export default function MainComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = TodoData.slice(indexOfFirstItem, indexOfLastItem);

 
  const totalPages = Math.ceil(TodoData.length / itemsPerPage);

  return (
    <div className="outer-container">
      <Heading />
      <div className="main-container">
        {currentItems.map((item, index) => (
          <div key={index} className="card-box">
            <div className="chip-title">{item.title}</div>
            <div className="chip-due-date">{item.dueDate}</div>
            <div className="chip-priority"> {item.priority}</div>
            <div className="actions-section">
              <button className="btn btn-warning btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
     


     



      <div className="pagination">
        {(() => {
    let buttons = [];
    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <button
          key={page}
          className={`pagination-btn ${currentPage === page ? "active" : ""}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      );
    }
    return buttons;
        })()}
</div>

    </div>
  );
}
