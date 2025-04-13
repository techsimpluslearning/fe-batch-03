import { createContext, useEffect, useState } from "react";
import moment from "moment";
import { valuesType } from "./components/Addnewtaskbutton";

// create
export const TaskContext: any = createContext(undefined);

const TaskProvider = (props: any) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(
    sessionStorage.getItem("status") === "Open"
  );

  const [editTaskId, setEditTaskId] = useState<any>(
    sessionStorage.getItem("editTaskId")
      ? parseInt(sessionStorage.getItem("editTaskId") || "")
      : null
  );

  const defaultValues = {
    title: "",
    description: "",
    status: null,
    dueDate: new Date(),
    importance: null,
  };

  const [todos, setTodos] = useState<valuesType[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<valuesType[] | null>(null);

  const [values, setValues] = useState<valuesType>(
    JSON.parse(sessionStorage.getItem("values") || "{}") || defaultValues
  );

  console.log(sessionStorage.getItem("values"));

  useEffect(() => {
    if (!todos?.length) return;
    localStorage.setItem("myTasks", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    let myTasks: any = localStorage.getItem("myTasks");
    if (!myTasks) return;

    myTasks = JSON.parse(myTasks);
    setTodos(myTasks);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setEditTaskId(null);
      sessionStorage.removeItem("editTaskId");
      sessionStorage.removeItem("values");
      setValues(defaultValues);
    }
  }, [isOpen]);

  const onDateFilter = (date: any) => {
    let remainTodos = todos.filter((todo) => {
      return moment(todo.dueDate).isSame(date, "day");
    });
    setFilteredTodos(remainTodos);
  };

  const clearFilter = () => {
    setFilteredTodos(null);
  };

  const onEditClick = (taskIndex: number) => {
    setValues({ ...todos[taskIndex] });
    setIsOpen(true);
    setEditTaskId(taskIndex);
    sessionStorage.setItem("editTaskId", taskIndex.toString());
    sessionStorage.setItem("values", JSON.stringify(todos[taskIndex]));
  };

  useEffect(() => {
    sessionStorage.setItem("status", isOpen ? "Open" : "Close");
  }, [isOpen]);

  return (
    <TaskContext.Provider
      value={{
        todos: filteredTodos !== null ? filteredTodos : todos,
        setTodos,
        clearFilter,
        values,
        setValues,
        onDateFilter,
        isOpen,
        setIsOpen,
        onEditClick,
        editTaskId,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
