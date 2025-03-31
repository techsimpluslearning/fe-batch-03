import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'
import './calendar.css'
const Calendar =()=>{
  let date="";
    const [startDate, setStartDate] = useState(new Date());
    const ondateclick=(date)=>{
        setStartDate(date)
        date=date;
        console.log(date);
    }
   
    return (
      <DatePicker
        selected={startDate}
        onChange={ondateclick}
        inline
      />
    );
}
export default Calendar