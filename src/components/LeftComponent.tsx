import { FaEdit, FaTrash } from "react-icons/fa";
import "./LeftComponent.css";
import { priorityColors, todoList } from "../constent";

function LeftComponent() {
  return (
    <div className="card-box">
      {todoList.slice(0, 3).map((v,idx) => {
        return (
          <div key={idx} className={`todoContainer `}>
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
