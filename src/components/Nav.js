import React from "react";
import styled from "styled-components";
import logo from "../images/lazi.png";

// import "../css/styles.css";
const NavLogo = styled.div`
  width: 40px;
  height: 40px;
  display: inline-block;
`;
const NavLogoImg = styled.img`
  width: 100%;
`;

const Nav = ({ handleSourceChange, sourceList }) => {
  return (
    <nav className="nav">
      <NavLogo>
        <NavLogoImg src={logo} alt="" />
      </NavLogo>
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
  );
};

export default Nav;
