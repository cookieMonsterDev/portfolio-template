import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBar = () => {
  let prevScrollpos = window.scrollY;
  const [show, setShow] = useState(true);

  const handleNavBar = () => {
    const currentScrollPos = window.scrollY;
    prevScrollpos < currentScrollPos ? setShow(false) : setShow(true);
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavBar);

    return () => {
      window.removeEventListener('scroll', handleNavBar);
    };
  }, []);

  return (
    <Conateiner show={show}>
      <Content>
        <LogoName>Mykhailo Toporkov</LogoName>
        <RightSide>
          <NavBarItem>Experience</NavBarItem>
          <NavBarItem>Resume</NavBarItem>
          <NavBarItem>Contact</NavBarItem>
          <NavBarItem>Dark Theme</NavBarItem>
        </RightSide>
      </Content>
    </Conateiner>
  );
};

export default NavBar;

const Conateiner = styled.div`
  position: fixed;
  width: 100%;
  height: 7rem;
  background-color: #283149;
  display: flex;
  z-index: 999;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: all 700ms;
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
`;

const RightSide = styled.div`
  height: 100%;
  float: right;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 48em) {
    display: none;
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
`;
