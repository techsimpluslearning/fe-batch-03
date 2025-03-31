import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'
import './calendar.css'
const TaskCalendar =(props)=>{
  
    const [startDate, setStartDate] = useState(new Date());
    // const [Date1, setDate] = useState("");
    const ondateclick=(date)=>{
        setStartDate(date)
        // setDate(date);
    }
    
    
    
    useEffect(()=>props.onInputChange(startDate.toDateString(),"dueDate"),[startDate]);
   
    return (
      <DatePicker
        selected={startDate}
        onChange={ondateclick}
        inline
      />
    );
}
export default TaskCalendar