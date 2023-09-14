import React from "react";
import { Link } from "react-router-dom";
import "./lorg.css";
import TopNavbar2 from "../inc/TopNavbar2";

const followup = () => {
  return (
    <div className="body1">
      <div className="b1">
        <div className="container1">
          <div className="top-header1">
            <div class="image1">
              <img src="images/logo.png" alt="" />
            </div>
          </div>
          <TopNavbar2 />
        </div>
      </div>
      <div className="followup-box">
        <h1 className="followup-main-heading"> Follow-up </h1>
        <div className="followup-content flex-col-centered">
          <div className="followup-div flex-col-centered">
            <p className="followup-header">Follow-up Notes</p>
            <p className="followup-item">[Text Input]</p>
            <p className="followup-item"> [Date and Time]</p>
          </div>
          <div className="followup-div flex-col-centered">
            <p className="followup-header">Referrals</p>
            <p className="followup-item">[Referring Doctor]</p>
            <p className="followup-item"> [Referred Doctor]</p>
            <p className="followup-item">[Reason for Referral]</p>
          </div>
          <div className="followup-div flex-col-centered">
            <p className="followup-header">- Prescriptions</p>
            <p className="followup-item">[Medication Name]</p>
            <p className="followup-item">[Dosage]</p>
            <p className="followup-item">[Frequency]</p>
            <p className="followup-item">[Duration]</p>
          </div>
          <div className="followup-div flex-col-centered">
            <p className="followup-header">-Tests</p>
            <p className="followup-item">[Test Name]</p>
            <p className="followup-item">[Test Type]</p>
            <p className="followup-item">[Ordering Doctor]</p>
          </div>
          <div className="followup-div flex-col-centered">
            <p className="followup-header">-Appointments</p>
            <p className="followup-item">[Appointment Date and Time]</p>
            <p className="followup-item">[Location]</p>
            <p className="followup-item">[Notes]</p>
          </div>
          <div className="followup-div flex-col-centered">
            <p className="followup-header">-Task List</p>
            <p className="followup-item">[Task Name]</p>
            <p className="followup-item">[Assigned To]</p>
            <p className="followup-item">[Due Date]</p>
          </div>
        </div>
      </div>
      <div class="footer1">
        <div class="containerr">
          <a href="#">© 2023, All rights reserved</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  );
};

export default followup;
