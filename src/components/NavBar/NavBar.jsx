import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import BurgerMenu from './BurgerMenu';

const NavBar = () => {
  let prevScrollpos = window.scrollY;
  const [show, setShow] = useState(true);
  const [shadow, setShadow] = useState(false);

  const handleNavBar = () => {
    const currentScrollPos = window.scrollY;
    prevScrollpos < currentScrollPos ? setShow(false) : setShow(true);
    currentScrollPos === 0 ? setShadow(false) : setShadow(true);
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavBar);

    return () => {
      window.removeEventListener('scroll', handleNavBar);
    };
  });

  return (
    <Conteiner show={show} shadow={shadow}>
      <Content>
        <LogoName>Mykhailo</LogoName>
        <NavSection>
          <a href="/#experience">
            <NavBarItem>Experience</NavBarItem>
          </a>
          <NavBarItem>Resume</NavBarItem>
          <a href="/#contact">
            <NavBarItem>Contact</NavBarItem>
          </a>
          <NavBarItem>Dark Theme</NavBarItem>
          <NavBarMenu><BurgerMenu /></NavBarMenu>
        </NavSection>
      </Content>
    </Conteiner>
  );
};

export default NavBar;

const Conteiner = styled.div`
  position: fixed;
  width: 100%;
  height: 7rem;
  background-color: #0a192f;
  display: flex;
  z-index: 999;
  transition: all 700ms;

  ${( props ) =>
    !props.show &&
    css`
      transform: translateY(-100%);
    `}

    ${( props ) =>
    props.shadow &&
    css`
      box-shadow: 0 10px 30px -10px rgba(2,12,27,0.7);
    `}

  @media only screen and (max-width: 48em) {
    height: 5rem;
  }
`;

const Content = styled.div`
  width: 100rem;
  margin: 0 auto;
`;

const LogoName = styled.div`
  height: 100%;
  float: left;
  box-sizing: border-box;
  color: #0ee3b5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  
  @media only screen and (max-width: 1000rem) {
    margin-left: 1rem;
  }
`;

const NavSection = styled.div`
  height: 100%;
  float: right;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    text-decoration: none;
  }

  @media only screen and (max-width: 1000rem) {
    margin-right: 1rem;
  }
`;

const NavBarItem = styled.div`
  height: 2rem;
  position: relative;
  overflow: hidden;
  margin: 0 1rem;
  color: #8fa3cd;
  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 600ms ease;

  &:hover {
    color: #e7e6e1;
  }

  &::before {
    content: '';
    width: 110%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #0ee3b5;
    transition: all 700ms ease;
    transform: translateX(-110%);
  }

  &:hover::before {
    transform: none;
  }

  @media only screen and (max-width: 48em) {
    display: none;
  }
`;

const NavBarMenu = styled.div`
  display: none;

  @media only screen and (max-width: 48em) {
    display: flex;
  }
`