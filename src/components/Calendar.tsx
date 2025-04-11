import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import { myContext } from "../Context";
import moment from "moment";
const Calendar = (props: any) => {
    const{todos,setFilterTask,filterTask,setTaskMsg}=useContext(myContext);

  const [startDate, setStartDate] = useState(new Date()); 
  const ondateclick = (date: any) => {
    setStartDate(date);
    const filtered=todos.filter((v:any)=>{
        return moment(v.dueDate).isSame(moment(date),"D");

    })
      setFilterTask(filtered);
      if (filterTask?.length==0) {
        setTaskMsg("No Task Found");
      }
    

    
  };
  return <DatePicker selected={startDate} onChange={ondateclick} inline />;
};
export default Calendar;
