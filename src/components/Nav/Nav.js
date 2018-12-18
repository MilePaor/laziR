import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

const NavContainer = styled.nav`
  background-color: brown;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0 5%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  width: 100%;
  height: 56px;
  line-height: 56px;
  color: white;
  @media (max-width: 600px) {
    padding: 0 2%;
  }
`;
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
    <NavContainer>
      <NavLogo>
        <NavLogoImg src={logo} alt="" />
      </NavLogo>
      {sourceList && (
        <select onChange={handleSourceChange}>
          {sourceList.map(source => {
            return (
              <option key={source.id} value={source.id}>
                {source.name}
              </option>
            );
          })}
        </select>
      )}
    </NavContainer>
  );
};

export default Nav;
