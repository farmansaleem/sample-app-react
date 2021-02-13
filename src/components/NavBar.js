import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="link-container">
            <NavLink activeClassName="active" to="/employeeform">
                Employee form
      </NavLink>
            <NavLink activeClassName="active" to="/table">
                 Table
      </NavLink>
        </div>
    );
}
