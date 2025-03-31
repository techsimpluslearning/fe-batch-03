import "./App.css";
import Add_modal from "./components/Add_modal";

import LeftComponent from "./components/LeftComponent";
import MainComponent from "./components/MainComponent";
import RightComponent from "./components/RightComponent";

const App = () => {
  return (
    <div className="container">
        
       <div className="header">
        <h1>Welcome to ToDo App</h1>
        <div className="btn1"> <Add_modal/></div>
        
        </div>
        
      <div className="row row-1">
        <div className="col-6">
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
