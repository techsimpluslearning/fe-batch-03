import { FaEdit, FaTrash } from "react-icons/fa";
import "./LeftComponent.css";
import { priorityColors, todoList } from "../constent";
import { valuesType } from "./Addnewtaskbutton";
import { useContext } from "react";
import { myContext } from "../Context";


function LeftComponent() {

  const {isOpen ,setIsOpen,todos,setTodos,values,setValues,btn,setBtn,setIndex}=useContext(myContext);

  const onEditClick = (item: valuesType,i:number) => {
    setIndex(i);
    setBtn("Update Task");
    setIsOpen(true);
    setValues({ ...item });
  }
    const onDelete=(i:number)=>{
      const prevTodos=JSON.parse(JSON.stringify(todos));
    prevTodos.splice(i,1);
    setTodos(prevTodos);
    
    
  }
  return (
    <div className="card-box">
      {todos.slice(0, 5).map((todo: valuesType,i:number) => {
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
