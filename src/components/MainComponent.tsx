import { useEffect, useState } from "react";
import { todoList } from "../constent";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./MainComponent.css";

function MainComponent(props: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [activePaginList, setActivePaginList] = useState<number[]>([]);

  const totalTodos = todoList.length; // Use the existing todoList length
  const totalPages = Math.ceil(totalTodos / perPage);

  useEffect(() => {
    buildPagin(totalPages);
  }, [currentPage, totalPages]);

  // Pagination Logic
  const buildPagin = (totalPages: number) => {
    let pages = Array.from(Array(totalPages + 1).keys()).slice(1);
    let selectedPage = currentPage > 2 ? currentPage - 3 : 0;
    let activePages = pages.slice(selectedPage, selectedPage + 5);
    setActivePaginList(activePages);
  };

  // Get current page items
  const startIndex = (currentPage - 1) * perPage;
  const currentTodos = todoList.slice(startIndex, startIndex + perPage);

  return (
    <div className="card-box">
      <h2 className="mb-4">To-Do List</h2>
      <div className="row">
        {currentTodos.map((v, i) => {
          return (
            <div className="col-4 mb-4">
              <div className="card p-4 shadow">
                <h3>{v.title}</h3>
                <p>{v.description}</p>
                <span
                  className={` badge ${
                    v.priority === "High"
                      ? "bg-danger"
                      : v.priority === "Medium"
                      ? "bg-warning"
                      : "bg-success"
                  }`}
                >
                  {" "}
                  {v.priority}
                </span>
                <div className="features-todo mt-3">
                  <span>{v.dueDate}</span>
                  <FaEdit className="edit-todo" />
                  <FaTrash className="delete-todo" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row mt-4">
        <div className="d-flex gap-3 justify-content-center">
          {activePaginList.map((n) => {
            return (
              <span
                onClick={() => setCurrentPage(n)}
                className={`dot p-2 border rounded ${
                  currentPage === n ? "bg-dark text-white" : "bg-light"
                }`}
                style={{ cursor: "pointer" }}
              >
                {n}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;