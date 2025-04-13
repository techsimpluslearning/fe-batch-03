import { FaEdit, FaTrash } from "react-icons/fa";
import "./LeftComponent.css";
import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";
import { ThemeContext } from "../ThemeContext";
import { valuesType } from "./Addnewtaskbutton";


function LeftComponent() {
  const { bgColor }: any = useContext(ThemeContext);

  const { todos, onEditClick }: any = useContext(TaskContext);
  console.log("Left Com.");

  return (
    <div className="card-box" style={{ backgroundColor: bgColor }}>
      {todos.slice(0, 5).map((todo: valuesType, index: number) => {
        return (
          <div className={`todoContainer `}>
            <div className="titleContainer">
              <div className="title">
                {todo.title} - {new Date(todo.dueDate).toDateString()}
              </div>
              <div
                className={`chip-text ${
                  todo.importance?.value === "high"
                    ? "bg-danger"
                    : todo.importance?.value === "medium"
                    ? "bg-warning"
                    : "bg-success"
                }`}
              >
                {todo.importance?.label} Priority
              </div>
            </div>
            <div className="">
              <FaEdit
                onClick={() => onEditClick(index)}
                className="edit-todo"
              />
              <FaTrash className="delete-todo" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(LeftComponent);
