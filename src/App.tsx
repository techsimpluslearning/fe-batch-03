import "./App.css";
import "./components/Addnewtaskbutton.css";
import Addnewtaskbutton, { valuesType } from "./Components/Addnewtaskbutton";
import LeftComponent from "./Components/LeftComponent";
import RightComponent from "./Components/RightComponent";
import MainComponent from "./Components/MainComponent";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState<valuesType[]>([]);
  const [values, setValues] = useState<valuesType>({
    title: "",
    description: "",
    status: null,
    dueDate: new Date(),
    importance: null,
  });

  return (
    <div className="container">
      <p className="mt-4 fs-1 fw-bold">Welcome to My ToDo App</p>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Addnewtaskbutton
          todos={todos}
          setTodos={setTodos}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          values={values}
          setValues={setValues}
        />
      </div>

      <div className="row row-1">
        <div className="col-6">
          <LeftComponent
            todos={todos}
            setTodos={setTodos}
            setIsOpen={setIsOpen}
            setValues ={setValues}
          />
        </div>
        <div className="col-6">
          <RightComponent todos={todos} setTodos={setTodos} />
        </div>
      </div>

      <div className="row row-2">
        <div className="col-12">
          <MainComponent todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;
