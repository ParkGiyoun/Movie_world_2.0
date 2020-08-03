import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Banner">
      <h1>Movie World 2.0</h1>
      <div className="navigationBar">
        <Link to="/">Home</Link>
        <Link to="/infoBtn">APP information</Link>
      </div>
    </div>
  );
}
export default Navigation;
