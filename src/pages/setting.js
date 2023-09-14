import React from "react";
import { Link } from "react-router-dom";
import "./lorg.css";
import TopNavbar2 from "../inc/TopNavbar2";

const setting = () => {
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
      <main className="setting-box">
        <h1>Settings: </h1>
        <div className="setting-content flex-col-centered">
          <div className="setting-div flex-col-centered">
            <p className="setting-header">-User Profile</p>
            <p className="setting-item">-Name</p>
            <p className="setting-item">-Contact Details</p>
            <p className="setting-item">-Professional Credentials</p>
            <p className="setting-item">-Specialties</p>
          </div>
          <div className="setting-div flex-col-centered">
            <p className="setting-header">-Privacy and Security</p>
            <p className="setting-item">-Consent Settings</p>
            <p className="setting-item"> -Two-Factor Authentication</p>
            <p className="setting-item">-Data Sharing Permissions</p>
          </div>
          <div className="setting-div flex-col-centered">
            <p className="setting-header">-Notification</p>
            <p className="setting-item">-Email Alerts</p>
            <p className="setting-item">-In-App Notifications</p>
            <p className="setting-item">-Frequency of Updates</p>
          </div>
          <div className="setting-div flex-col-centered">
            <p className="setting-header">-Language and Localization</p>
            <p className="setting-item">-Interface Language</p>
          </div>
          <div className="setting-div flex-col-centered">
            <p className="setting-header">-Display and Theme</p>
            <p className="setting-item">-Themes</p>
            <p className="setting-item">-Color Schemes</p>
            <p className="setting-item">-Font Sizes</p>
            <p className="setting-item">-Layout Options</p>
          </div>
          <div className="setting-div flex-col-centered">
            <p className="setting-header">-Preference and Default</p>
            <p className="setting-item">-Default view</p>
            <p className="setting-item">-Sorting Options</p>
            <p className="setting-item">-Default units of measurement</p>
          </div>
          <div className="setting-div flex-col-centered">
            <p className="setting-header">-Integration Settings</p>
            <p className="setting-item">-External System Integration</p>
            <p className="setting-item">-API Configuration</p>
          </div>
          <div className="setting-div flex-col-centered">
            <p className="setting-header">-Backup and Data Expor</p>
            <p className="setting-item">-Data Backup</p>
            <p className="setting-item">-Export Options</p>
          </div>
          <div className="setting-div flex-col-centered">
            <p className="setting-header">-Help and Support</p>
            <p className="setting-item">-User Guides</p>
            <p className="setting-item">-FAQs</p>
            <p className="setting-item">-Support Contact Information</p>
          </div>
        </div>
      </main>
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

export default setting;
