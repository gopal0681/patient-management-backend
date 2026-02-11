import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PAMS</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/add">Add Patient</Link>
      </nav>
    </header>
  );
};

export default Header;
