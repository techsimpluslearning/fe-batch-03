import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import "./calendar.css"

const Calendar=()=>{
    const [startDate, setStartDate] = useState(new Date());
    
    const onChange = (date) => {
    const [start] = date;
    setStartDate(start);
    console.log(start);
    
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      selectsRange
      selectsDisabledDaysInRange
      inline
    />
  );

}
export default Calendar