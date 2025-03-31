import "./App.css";
import "./components/Addnewtaskbutton.css"
import Addnewtaskbutton from "./Components/Addnewtaskbutton";
import LeftComponent from "./Components/LeftComponent";
import RightComponent from "./Components/RightComponent";
import MainComponent from "./Components/MainComponent";

const App = () => {
  return (
    <div className="container">
      <p className="mt-4 fs-1 fw-bold">Welcome to My ToDo App</p>
    <div style={{display:"flex",justifyContent:"end"}}><Addnewtaskbutton/></div>

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
