import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  { path: "/", label: "Home" },
  { path: "/profile", label: "Patient's Profile" },
  { path: "/notes-summary", label: "Notes/ Summary" },
  { path: "/setting", label: "Settings" },
  { path: "/followup", label: "Follow up" },
];

const TopNavbar2 = () => {
  return (
    <div class="navbar2">
      {routes.map((route) => (
        <NavLink className="navbar2-item" to={route.path}>
          {route.label}
        </NavLink>
      ))}
    </div>
  );
};

export default TopNavbar2;
