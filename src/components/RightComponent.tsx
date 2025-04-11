import { useContext } from "react";
import Calendar from "./Calendar";
import { myContext } from "../Context";

export default function RightComponent(props: any) {
  const {setFilterTask}=useContext(myContext);
  const onClearFilter=()=>{
    setFilterTask(null);
  }
  return (
    <div className="card-box">
      <div className="calendar_div">
        <div className="calendar">
          <Calendar />
          <button className="btn btn-dark" onClick={onClearFilter}>Clear filter</button>
        </div>
        <img src="https://images.vexels.com/media/users/3/127290/isolated/svg/6f34e2f43d7f06371f5b52dbbd44af9e.svg" />
      </div>
    </div>
  );
}
