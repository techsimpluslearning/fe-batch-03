import { useContext } from "react";
import Calendar from "./Calendar";
import { TaskContext } from "../TaskContext";

export default function RightComponent(props: any) {
  const data = useContext(TaskContext)
  console.log(data);
  

  return (
    <div className="card-box">
      <div className="calendar_div">
        <div className="calendar">
          <Calendar />
        </div>
        <img src="https://images.vexels.com/media/users/3/127290/isolated/svg/6f34e2f43d7f06371f5b52dbbd44af9e.svg" />
      </div>
    </div>
  );
}
