import React from "react";
import "./TimeC.css";
import {Link} from "react-router-dom";

function TimeC() {
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <p>MORNING</p>
        </div>
        <div className="col-sm-2">
        <Link to="/selectappointment" className="link"><button>09:00 AM - 09:30 AM </button></Link>
        </div>
        <div className="col-sm-2">
          <button>09:30 AM - 10:00 AM </button>
        </div>
        <div className="col-sm-2">
          <button>10:00 AM - 10:30 AM </button>
        </div>
        <div className="col-sm-2">
          <button>10:30 AM - 11:00 AM </button>
        </div>
        <div className="col-sm-2">
          <button>11:00 AM - 11:30 AM </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p>AFTERNOON</p>
        </div>
        <div className="col-sm-2">
          <button>01:30 PM - 02:00 PM</button>
        </div>
        <div className="col-sm-2">
          <button>02:00 PM - 02:30 PM</button>
        </div>
        <div className="col-sm-2">
          <button>02:30 PM - 03:00 PM</button>
        </div>
        <div className="col-sm-2">
          <button>03:00 PM - 03:30 PM</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p>EVENING</p>
        </div>
        <div className="col-sm-2">
          <button>01:30 PM - 02:00 PM</button>
        </div>
        <div className="col-sm-2">
          <button>02:00 PM - 02:30 PM</button>
        </div>
        <div className="col-sm-2">
          <button>02:30 PM - 03:00 PM</button>
        </div>
        <div className="col-sm-2">
          <button>03:00 PM - 03:30 PM</button>
        </div>
        <div className="col-sm-2">
          <button>03:00 PM - 03:30 PM</button>
        </div>
      </div>
    </>
  );
}

export default TimeC;
