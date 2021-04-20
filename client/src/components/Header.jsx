import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* <h1>FEMMY'S INSTITUTE STUDENTS DATA</h1> */}
      <nav className="navItem">
        <NavLink exact to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/registration" className="navlink">
          Register Student
        </NavLink>
        <NavLink to="/database" className="navlink">
          Students Database
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
