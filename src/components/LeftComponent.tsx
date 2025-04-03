import { FaEdit, FaTrash } from "react-icons/fa";
import "./LeftComponent.css";
import { valuesType } from "./Addnewtaskbutton";
import { useContext } from "react";
import { TaskContext } from "../TaskContext";
import { ThemeContext } from "../ThemeContext";

interface leftComponentType {
  setIsOpen: any;
  setValues: any;
  theme?: "dark" | "light" | "default";
}

function LeftComponent(props: leftComponentType) {
  const { bgColor }: any = useContext(ThemeContext);
  const { setIsOpen, setValues } = props;
  const { todos}: any = useContext(TaskContext);

  const onEditClick = (item: valuesType) => {
    setIsOpen(true);
    setValues({ ...item });
  };

  return (
    <div className="card-box" style={{ backgroundColor: bgColor }}>
      {todos.slice(0, 5).map((todo: valuesType, index:number) => {
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
