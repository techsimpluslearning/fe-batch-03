import Calendar from "./Calendar";
import "./rightcomponent.css"

export default function RightComponent() {
  return (
   <div className="card-box">
    <div><label className="labelright">Select date</label></div>
        <div className="calendar_div">
          <div className="calendar">< Calendar/></div>
          <img  src="https://images.vexels.com/media/users/3/127290/isolated/svg/6f34e2f43d7f06371f5b52dbbd44af9e.svg" />
        </div>
   </div>
  )
}
