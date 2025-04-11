import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import { TaskContext } from "../TaskContext";
const Calendar = (props: any) => {
  const [startDate, setStartDate] = useState(new Date());
  const { onDateFilter }: any = useContext(TaskContext);

  const ondateclick = (date: any) => {
    setStartDate(date);
    onDateFilter(date);
  };
  return <DatePicker dateFormat="dd-MMM-yyyy" selected={startDate} onChange={ondateclick} inline />;
};
export default Calendar;
