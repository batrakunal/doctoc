import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";
import MonthC from "./MonthC";
import DateC from "./DateC";
import YearC from "./YearC";
import TimeC from "./TimeC";
import "./App.css";

function DocSchedule() {
  console.log("DocSchedule");
  return (
    <div>
      <React.Fragment>
        <Navbar />

      <div className="container-fluid hero-section">
        <div className="row">
          <div className="col-sm-3">
            <div className="doc-image">
              <img src="./images/doc.jpg" alt="doc"></img>
            </div>
            <div className="doc-name">
              <h4>Dr. Schmosby</h4>
              <p>Dermatologist</p>
              <h5>Newyork, USA</h5>
            </div>
          </div>
          <div className="col-sm-6 doc-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ullamcorper, ipsum in feugiat aliquam, elit nisi molestie velit,
              quis auctor justo lacus nec tellus. Nullam ultrices augue feugiat
              ante congue, in ultrices sem cursus. Vestibulum leo augue,
              molestie eu nisl ut, ullamcorper fringilla ligula. Integer ipsum
              eros, sodales non sem id, laoreet sagittis elit. Curabitur ac
              massa felis. Mauris eleifend lorem vitae eros vestibulum pharetra.
              Nam viverra nunc nec imperdiet placerat. <br /> <br />
              Nam vel orci et neque interdum scelerisque. Etiam aliquam eros eu
              quam sagittis, sit amet luctus nisl volutpat. Curabitur rhoncus
              justo ut dolor consequat rhoncus. Quisque in sodales diam. Donec
              sit amet nibh non neque ornare rhoncus et feugiat metus. Phasellus
              convallis quam orci, nec placerat metus aliquam eget. Maecenas
              aliquam turpis at nunc gravida, non porta nunc pulvinar.Proin nec
              urna malesuada erat auctor tristique a eget eros. Sed quis nibh
              imperdiet, aliquet sem at, lacinia augue. Morbi ornare velit id
              placerat viverra.
            </p>
          </div>
          <div className="col-sm-3 row doc-icons">
            <div className="doc-icon col-sm-4">
              <img src="./images/speciality/pediatrician.png"></img>
              <p>Pediatrician</p>
            </div>
            <div className="doc-icon col-sm-4">
              <img src="./images/speciality/dermatologist.png"></img>
              <p>Dermatologist</p>
            </div>
            <div className="doc-icon col-sm-4">
              <img src="./images/speciality/FamilyPhysician.png"></img>
              <p>Family Physician</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid schedule-date">
        <div className="text-topic">
          <h4>Select your preferred Date and Time</h4>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <MonthC />
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
          <DateC />
          </div>
          <div className="col-sm-2"></div>

          <div className="col-sm-2">
            <YearC />
          </div>
        </div>
        <div className="row">
         
        </div>

        <div>
          <TimeC />
        </div>
      </div>
    </React.Fragment>
    </div>
  );
}

export default DocSchedule;
