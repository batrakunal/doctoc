import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";
import "./App.css";

function SelectAppointment() {
  return (
    <div>
      <Navbar />
      <div className="row appointment-hero">
        <div className="col-sm-7 sectionA-one">
          <h4 className="select-head">Choose your Appointment</h4>
          <div className="row">
            <div className="col-sm-4 select-semihead">Type of Appointment</div>
            <div className="col-sm-4 select-semihead">Description</div>
            <div className="col-sm-4 select-semihead">Fee</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4 select-type">1. Consult on Phone Call <br />(details/symptoms defined)</div>
            <div className="col-sm-4 select-desc">An <b>AUDIO</b> call with the doctor where the patient has provided their symptoms’ details in advance.</div>
            <div className="col-sm-4">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">15 Minutes <b><i class="fas fa-rupee-sign"></i> 150</b></label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">30 Minutes <b><i class="fas fa-rupee-sign"></i> 300</b></label>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4 select-type">2. Consult on Video Call<br />(details/symptoms defined)</div>
            <div className="col-sm-4 select-desc">A <b>VIDEO</b> call with the doctor where the patient has provided their symptoms’ details in advance.</div>
            <div className="col-sm-4">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">15 Minutes <b><i class="fas fa-rupee-sign"></i> 350</b></label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">30 Minutes <b><i class="fas fa-rupee-sign"></i> 700</b></label>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4 select-type">3. Consult on Phone Call <br />(no information provided)</div>
            <div className="col-sm-4 select-desc">An <b>VIDEO</b> call with the doctor with no prior
information provided by the patient.</div>
            <div className="col-sm-4">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">15 Minutes <b><i class="fas fa-rupee-sign"></i> 200</b></label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">30 Minutes <b><i class="fas fa-rupee-sign"></i> 400</b></label>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4 select-type">4. Consult on Video Call <br />(no information provided)</div>
            <div className="col-sm-4 select-desc">A <b>VIDEO</b> call with the doctor with no prior information provided by the patient.</div>
            <div className="col-sm-4">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">15 Minutes <b><i class="fas fa-rupee-sign"></i> 400</b></label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">30 Minutes <b><i class="fas fa-rupee-sign"></i> 800</b></label>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4 select-type">5. Consult in person</div>
            <div className="col-sm-4 select-desc">Meet and consult your doctor in person. Time limit may vary from 25-35 minutes. </div>
            <div className="col-sm-4 fee-inperson"><b><i class="fas fa-rupee-sign"></i> 800</b></div>
          </div>

        </div>
        <div className="col-sm-4 ">
          <div className="sectionA-two">
            <h4 className="select-head">Cost of Appointment</h4>
            <div className="row">
              <div className="col-sm-4">
                <img className="cost-image" src="./images/doc.jpg"></img>
              </div>
              <div className="col-sm-6">
                <p className="cost-doc doc-name">Dr. Schmosby</p>
                <p className="cost-doc"><i class="fas fa-map-marker-alt"></i> Newyork, USA</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5 selectB-semihead">Appointment Type</div>
              <div className="col-sm-3 selectB-semihead">Qty.</div>
              <div className="col-sm-4 selectB-semihead">Cost</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-5"><p className="cart-item">Audio Call (30m)</p>
                <p className="cart-item2">(Symptoms Defined)</p></div>
              <div className="col-sm-3"><p className="cart-item-qty">x1</p></div>
              <div className="col-sm-4"><p className="cart-item-price"><i class="fas fa-rupee-sign"></i><b>300</b></p></div>
            </div>
            <div className="row">
              <div className="col-sm-5"><p className="cart-item">Video Call (15m)</p>
                <p className="cart-item2">(Symptoms Defined)</p></div>
              <div className="col-sm-3"><p className="cart-item-qty">x1</p></div>
              <div className="col-sm-4"><p className="cart-item-price"><i class="fas fa-rupee-sign"></i><b>350</b></p></div>
            </div>


            <hr />
            <div className="row">
              <div className="col-sm-4 "><p className="cart-item">TOTAL</p></div>
              <div className="col-sm-3"></div>
              <div className="col-sm-5"><p className="cart-total-price"><i class="fas fa-rupee-sign"></i><b>650</b></p></div>
            </div>

          </div>
          <button className="proceed-to-pay">Proceed To Pay</button>
        </div>

      </div>
    </div>
  );
}

export default SelectAppointment;
