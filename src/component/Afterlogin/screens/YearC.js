import React, { useState } from "react";
import "./YearC.css";

function YearC() {
  const initialYear = 2020
  const [year , setYear] = useState(initialYear)

  function prevYear() {
    setYear(initialYear => initialYear - 1)
  }

  function nextYear() {
    setYear(initialYear => initialYear + 1)
  }

  return (
    <>
      <div className="row year-block">
      <i  onClick={prevYear} class="fas fa-angle-left arrow"></i>
      <div className="yearC">{year}</div>
      <i onClick={nextYear} className="fas fa-angle-right arrow"></i>
      </div>
    </>
  );
}

export default YearC;
