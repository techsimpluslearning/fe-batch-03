import {BrowserRouter,Routes,Route} from "react-router-dom"
import LeftSide from "./components/LeftSide/LeftSide"
import RightSide from "./components/RightSide/RightSide"
import BottomPortion from "./components/BottomPortion/BottomPortion"

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" Component={LeftSide} />
          <Route path="/right" Component={RightSide} />
          <Route path="/bottom" Component={BottomPortion} />
        </Routes>
      </BrowserRouter> */}
      <h2>Welcome to the ToDo App</h2>
      <div className="container">
        <div className="inner-container">
          <LeftSide/>
          <RightSide />
        </div>
      <BottomPortion/>
      </div>
    </div>
  )
}

export default App