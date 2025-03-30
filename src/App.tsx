
import TopLeftCard from "./components/TopLeft"
import TopRightCard from "./components/TopRight"
import DisplayStatus from "./components/DisplayStatus"
import "./App.css"
const App = () =>{
  return(
    <div className="container">

          <p className="mt-4 fs-3"> Welcome to My ToDo Application</p>

     <div className="row row-1">
      <div className="col-6">
         <TopLeftCard/> 
      </div>
        <div className="col-6">
        <TopRightCard/>
        </div>
     </div>
     <div className="row row-2">
      <div className="col-12">
      <DisplayStatus/>
      </div>
     </div>
    
    </div>
  )
}
export default App