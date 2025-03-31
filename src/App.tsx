import "./App.css";
import "./components/Addnewtaskbutton.css"
import Addnewtaskbutton from "./components/Addnewtaskbutton";
import LeftComponent from "./components/LeftComponent";
import MainComponent from "./components/MainComponent";
import RightComponent from "./components/RightComponent";
import { useState } from "react";

const App = () => {
    const [data,setData]=useState(JSON.parse(localStorage.getItem("storedData"))||[]);

  
  return (
    <div className="container">
      <p className="mt-4 fs-1 fw-bold">Welcome to My ToDo App</p>
    <div style={{display:"flex",justifyContent:"end"}}><Addnewtaskbutton setData={setData} data={data}/></div>

      <div className="row row-1">
        <div className="col-6 ">
          <LeftComponent Data={data} />
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
