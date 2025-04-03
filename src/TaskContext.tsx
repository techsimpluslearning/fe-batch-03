import React, { createContext, useState } from "react";
import { valuesType } from "./Components/Addnewtaskbutton";

// create
export const TaskContext: any = createContext(undefined);

const TaskProvider = (props: any) => {
  const { children } = props;
  const [todos, setTodos] = useState<valuesType[]>([]);
  const [values, setValues] = useState<valuesType>({
    title: "",
    description: "",
    status: null,
    dueDate: new Date(),
    importance: null,
  });

  return (
    <TaskContext.Provider value={{ todos, setTodos, values, setValues }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
