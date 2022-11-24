import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import BurgerMenu from './BurgerMenu';
import SideMenu from './SideMenu';
import { useSelector } from 'react-redux';
import config from '../../static/config';

const NavBar = () => {
  const active = useSelector((state) => state.contact);

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
    <>
      <Conteiner
        show={active ? show && !(window.innerWidth <= 768) : show}
        shadow={shadow}
      >
        <Content>
          <NavSection>
            <a href="#about">
              <NavBarItem>About</NavBarItem>
            </a>
            <a href="#experience">
              <NavBarItem>Experience</NavBarItem>
            </a>
            <a href="#contact">
              <NavBarItem>Contact</NavBarItem>
            </a>
            <a href={config.resume_url} download>
              <ResumeButton>Resume</ResumeButton>
            </a>
            <NavBarMenu>
              <BurgerMenu />
            </NavBarMenu>
          </NavSection>
        </Content>
        <SideMenu />
      </Conteiner>
    </>
  );
};

export default NavBar;

const Conteiner = styled.div`
  position: fixed;
  width: 100%;
  height: 7rem;
  background-color: #0a192f;
  display: flex;
  z-index: 1000;
  transition: all 700ms;
  touch-action: none;

  ${(props) =>
    !props.show &&
    css`
      transform: translateY(-100%);
    `}

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
    `}

  @media only screen and (max-width: 56rem) {
    height: 5rem;
  }
`;

const Content = styled.div`
  width: 100rem;
  margin: 0 auto;
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

  @media only screen and (max-width: 56rem) {
    display: none;
  }
`;

const ResumeButton = styled.button`
  width: 6rem;
  margin: 0 1rem;
  box-sizing: border-box;
  background-color: #0a192f;
  border-radius: 0;
  border: 0.15rem solid #0ee3b5;
  color: #0ee3b5;

  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  text-transform: uppercase;

  &:active {
    background-color: rgba(14, 227, 181, 0.2);
  }

  @media only screen and (max-width: 56rem) {
    display: none;
  }
`;

const NavBarMenu = styled.div`
  display: none;
  position: relative;
  z-index: 1000;

  @media only screen and (max-width: 56rem) {
    display: flex;
  }
`;
