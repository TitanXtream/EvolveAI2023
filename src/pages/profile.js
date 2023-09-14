import React from "react";
import "./lorg.css";
import { Link } from "react-router-dom";
import TopNavbar2 from "../inc/TopNavbar2";

const profile = () => {
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

      <div className="profile-box">
        <p id="profile-header">Patient's Profile:</p>
        <p>*Name:</p>
        <p>*Age:</p>
        <p>*Previous Surgical Histories:</p>
        <p>*Preexisting conditions:</p>
        <p>*Allergies:</p>
        <p>*Current medications:</p>
        <p id="profile-consent">
          **written consent from the patient or parental consent if a minor:
        </p>
      </div>

      <footer class="footer1">
        <div class="containerr">
          <a href="#">© 2023, All rights reserved</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
      </footer>
    </div>
  );
};

export default profile;
