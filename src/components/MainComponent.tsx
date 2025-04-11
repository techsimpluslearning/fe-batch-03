import { useContext, useEffect, useState } from "react";
import { todoList } from "../constent";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./MainComponent.css";
import { myContext } from "../Context";

function MainComponent(props: any) {
  const{todos,setTodos,onDelete,onEditClick}=useContext(myContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [activePaginList, setActivePaginList] = useState<number[]>([]);

  const totalTodos = todos.length; // Use the existing todoList length
  const totalPages = Math.ceil(totalTodos / perPage);

  useEffect(() => {
    buildPagin(totalPages)
  }, [currentPage, totalPages,setTodos]);

  // Pagination Logic
  const buildPagin = (totalPages: number) => {
    let pages = Array.from(Array(totalPages + 1).keys()).slice(1);
    let selectedPage = currentPage > 2 ? currentPage - 3 : 0;
    let activePages = pages.slice(selectedPage, selectedPage + 5);
    setActivePaginList(activePages);
  };

  // Get current page items
  const startIndex = (currentPage - 1) * perPage;
  const currentTodos = todos.slice(startIndex, startIndex + perPage);
console.log(todos);

  return (
    <div className="card-box">
      Main Component hiiiiii
      <h2 className="mb-4">To-Do List</h2>
      <div className="row">
        {todos?.map((v, i) => {
          return (
            <div className="col-4 mb-4">
              <div className="task ReactNodecard p-4 shadow">
                <h3>{v.title}</h3>
                <p>{v.description}</p>
                <span
                  className={` badge ${
                    v.importance?.value === "high"
                      ? "bg-danger"
                      : v.importance?.value === "medium"
                      ? "bg-warning"
                      : "bg-success"
                  }`}
                >
                  {" "}
                  {v.importance?.label}
                </span>
                <div className="features-todo mt-3">
                  <p> {JSON.stringify(v.dueDate)}</p>
                  <FaEdit className="edit-todo" onClick={()=>onEditClick(v,i)} />
                  <FaTrash className="delete-todo" onClick={()=>{onDelete(i)}} />
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
