import "./App.css";
import LeftComponent from "./components/LeftComponent";
import MainComponent from "./components/MainComponent";
import RightComponent from "./components/RightComponent";
import "bootstrap-icons/font/bootstrap-icons.css";


const App = () => {
  return (
    <div className="container">
      <p className="mt-4 fs-3">Welcome to My ToDo App</p>

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
