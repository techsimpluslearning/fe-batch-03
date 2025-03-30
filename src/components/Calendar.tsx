<<<<<<< HEAD
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

=======
import DatePicker from "react-datepicker";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'
import './calendar.css'
const Calendar =()=>{
    const [startDate, setStartDate] = useState(new Date());
    const ondateclick=(date)=>{
        setStartDate(date)
        console.log(date);
    }
    return (
      <DatePicker
        selected={startDate}
        onChange={ondateclick}
        inline
      />
    );
>>>>>>> 667b70eb8ee5d7ccf95cfd9eb9bb8ac72618627c
}
export default Calendar