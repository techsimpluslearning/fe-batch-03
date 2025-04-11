import "./App.css";
import "./components/Addnewtaskbutton.css";
import { useContext, useState } from "react";
import LeftComponent from "./components/LeftComponent";
import Addnewtaskbutton, { valuesType } from "./Components/Addnewtaskbutton";
import MainComponent from "./components/MainComponent";
import RightComponent from "./components/RightComponent";
import { Input, FormGroup } from "reactstrap";

const App = () => {
  return (
    <div className="container" >
      <p className="mt-4 fs-1 fw-bold">Welcome to My ToDo App</p>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Addnewtaskbutton
        />
      </div>

      <div className="row row-1">
        <div className="col-6" >
          <LeftComponent />
        </div>
        <div className="col-6">
          <RightComponent />
        </div>
      </div>

      <div className="row row-2">
        <div className="col-12">
          <MainComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
