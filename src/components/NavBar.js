import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Img from "../assets/logo.svg";

export default function NavBar(props) {
  const NavBarContainer = styled.header`
    padding: 20px;
    width: 100%;
  `;

  const NavBarWrap = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  const Logo = styled.div`
    background: url(${Img});
  `;
  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const NavLink = styled(Link)`
    margin: 0 20px;
    text-decoration: none;
    color: ${(props) => props.inputColor || "black"};
    font-weight: 600;
  `;
  const RegisterNav = styled.div``;

  return (
    <NavBarContainer>
      <NavBarWrap>
        <Nav>
          <Logo />
          <NavLink to="/">Live</NavLink>
          <NavLink to="/">Push</NavLink>
          <NavLink to="/">Link</NavLink>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/">Packs</NavLink>
          <NavLink to="/">Help</NavLink>
          <NavLink to="/">More</NavLink>
        </Nav>
        <RegisterNav>
          <NavLink inputColor="#0001fb" to="/">
            Try live for free
          </NavLink>
          <NavLink to="/">login or Register </NavLink>
        </RegisterNav>
      </NavBarWrap>
    </NavBarContainer>
  );
}
