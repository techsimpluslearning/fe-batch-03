import Bottom from "./components/Bottom"
import Topleft from "./components/Topleft"
import Topright from "./components/Topright"


const App = ()=>{
  return (
    
    <div className="boxcontainer">
      <span style={{marginLeft:44,fontSize:35,fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}>Welcome to TODO App</span>

      <div className="card1">
      <Topleft/>
      <Topright/>
      
    </div>
    <div className="bottomcard">
      <Bottom/>
      </div>
    </div>
   
  )
}
export default App