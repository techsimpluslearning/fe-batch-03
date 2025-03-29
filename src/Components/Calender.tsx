import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="calendar-container">
      <h2>My React Calendar</h2>
      <Calendar onChange={(value) => setDate(value as Date)} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
