import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
const Calendar = (props: any) => {
  const [startDate, setStartDate] = useState(new Date());
  const ondateclick = (date: any) => {
    setStartDate(date);
    console.log(date);
  };
  return <DatePicker selected={startDate} onChange={ondateclick} inline />;
};
export default Calendar;
