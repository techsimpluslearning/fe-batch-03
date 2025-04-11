import { FaEdit, FaTrash } from "react-icons/fa";
import "./LeftComponent.css";
import { priorityColors, todoList } from "../constent";
import { valuesType } from "./Addnewtaskbutton";
import { useContext } from "react";
import { myContext } from "../Context";


function LeftComponent() {

  const {isOpen ,setIsOpen,todos,setTodos,values,setValues,btn,setBtn,setIndex,onDelete,onEditClick,filterTask}=useContext(myContext);

 let Tasks=filterTask? filterTask : todos
  
  return (
    <div className="card-box">
      {filterTask?.length==0 && "No Task Found"}
      {filterTask==null && todos.length==0 && "Add first Task"}
      {Tasks.slice(0, 5).map((todo: valuesType,i:number) => {
        return (
          <div className={`todoContainer `}>
            <div className="titleContainer">
              <div className="title">{todo.title}</div>
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
              <FaEdit onClick={() => onEditClick(todo,i)} className="edit-todo" />
              <FaTrash className="delete-todo" onClick={()=>onDelete(i)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeftComponent;
