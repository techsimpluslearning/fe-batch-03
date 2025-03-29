import TopLeft from "./Components/TopLeft"
import TopRight from "./Components/TopRight"
import "./App.css"
import DisplayStatus from "./Components/DisplayStatus"

const App = () =>{
  return(
    <div className="container">
      <p className="mt-4 fs-3 " >Welcome To My TODO Application!</p>
       <div className="App">
         <TopLeft/>
         <TopRight/>
       </div>
         <DisplayStatus/>
      </div>
  )}
export default App;
