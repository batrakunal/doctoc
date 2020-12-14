import React, { useState } from "react";
import "./MonthC.css";

function MonthC() {
  const initialM  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const [month , setMonth] = useState(initialM[2])

  function prevMonth() {
    
    if (month === initialM[0]) {
      setMonth(initialM[0])
    } else if (month === initialM[1]) {
      setMonth(initialM[0])
    } else if (month === initialM[2]) {
      setMonth(initialM[1])
    } else if (month === initialM[3]) {
      setMonth(initialM[2])
    } else if (month === initialM[4]) {
      setMonth(initialM[3])
    }
  }

  function nextMonth() {
    if (month === initialM[0]) {
      setMonth(initialM[1])
    } else if (month === initialM[1]) {
      setMonth(initialM[2])
    } else if (month === initialM[2]) {
      setMonth(initialM[3])
    } else if (month === initialM[3]) {
      setMonth(initialM[4])
    } else if (month === initialM[4]) {
      setMonth(initialM[5])
    }
  }

  return (
    <>
      <div className="row month-block">
      <i  onClick={prevMonth} class="fas fa-angle-left arrow"></i>
      <div className="monthC">{month}</div>
      <i onClick={nextMonth} className="fas fa-angle-right arrow"></i>
      </div>
    </>
  );
}

export default MonthC;
