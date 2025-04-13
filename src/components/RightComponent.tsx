import { useContext } from "react";
import Calendar from "./Calendar";
import { TaskContext } from "../TaskContext";
import { Button } from "reactstrap";

export default function RightComponent() {
  const {clearFilter}:any = useContext(TaskContext)

  return (
    <div className="card-box">
      <div className="calendar_div">
        <div className="calendar">
          <Calendar />
        </div>
        <img src="https://images.vexels.com/media/users/3/127290/isolated/svg/6f34e2f43d7f06371f5b52dbbd44af9e.svg" />
      </div>
      <Button onClick={clearFilter}>Clear Filter</Button>
    </div>
  );
}
