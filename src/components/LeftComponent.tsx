import { FaEdit, FaTrash } from "react-icons/fa";
import "./LeftComponent.css";
import { priorityColors, todoList } from "../constent";
import { valuesType } from "./Addnewtaskbutton";

interface leftComponentType {
  todos: valuesType[];
  setTodos: any;
  setIsOpen: any;
  setValues: any;
  theme?: "dark" | "light" | "default";
}

function LeftComponent(props: leftComponentType) {
  const { todos, setIsOpen, setValues } = props;

  const onEditClick = (item: valuesType) => {
    setIsOpen(true);
    setValues({ ...item });
  };

  return (
    <div className="card-box">
      {todos.slice(0, 5).map((todo: valuesType) => {
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
              <FaEdit onClick={() => onEditClick(todo)} className="edit-todo" />
              <FaTrash className="delete-todo" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeftComponent;
