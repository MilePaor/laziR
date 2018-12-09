import React from "react";

import "../css/styles.css";
import logo from "../images/lazi.png";

const Nav = ({ handleSourceChange, sourceList }) => {
  return (
    <div className="navbar-fixed">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {sourceList ? (
          <select onChange={handleSourceChange}>
            {sourceList.map(source => {
              return (
                <option key={source.id} value={source.id}>
                  {source.name}
                </option>
              );
            })}
          </select>
        ) : (
          "nema ga"
        )}
      </nav>
    </div>
  );
};

export default Nav;
