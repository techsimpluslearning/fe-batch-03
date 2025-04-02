import "./App.css";
import "./components/Addnewtaskbutton.css";
import Addnewtaskbutton, { valuesType } from "./Components/Addnewtaskbutton";
import LeftComponent from "./Components/LeftComponent";
import RightComponent from "./Components/RightComponent";
import MainComponent from "./Components/MainComponent";
import { useState } from "react";

const App = () => {

  return (
    <div className="container">
      <p className="mt-4 fs-1 fw-bold">Welcome to My ToDo App</p>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Addnewtaskbutton/>
      </div>

      <div className="row row-2 row-md-1 ">
        <div className="col-12 col-md-6">
          <LeftComponent />
        </div>
        <div className="col-12 col-md-6">
          <RightComponent />
        </div>
      </div>

      <div className="row row-2">
        <div className="col-12">
          <MainComponent  />
        </div>
      </div>
    </div>
  );
};

export default App;

